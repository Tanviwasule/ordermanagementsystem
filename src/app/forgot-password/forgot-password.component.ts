import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router
import { AuthService } from '../services/auth.service'; // Adjust the path based on your structure

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  emailSent = false; // Flag to check if email has been sent
  errorMessage: string | null = null; // For capturing error messages
  resetPassword = false;// Flag to toggle reset password form

  constructor(private authService: AuthService, private router: Router) {} // Inject Router

  onRequestReset(form: NgForm) {
    if (form.valid) {
      const email = form.value['email']; // Use bracket notation for accessing form value
      this.authService.sendResetEmail(email).subscribe(
        // response => {
        //   this.emailSent = true;
        //   this.errorMessage = null; // Clear any previous errors
        //   alert(response.message); // Use response.message as needed
        //   this.resetPassword = true; // Show reset password fields
        // },
        error => {
          this.errorMessage = 'Failed to send reset email. Please try again.';
          console.error('Error sending reset link', error);
        }
      );
    }
  }

  onResetPassword(form: NgForm) {
    if (form.valid) {
      const newPassword = form.value['newPassword']; // Use bracket notation
      const confirmPassword = form.value['confirmPassword']; // Use bracket notation

      if (newPassword === confirmPassword) {
        this.authService.resetPassword(newPassword).subscribe(
          // response => {
          //   alert('Your password has been reset successfully!');
          //   this.router.navigate(['/login']); // Navigate to login page
          // },
          error => {
            this.errorMessage = 'Failed to reset password. Please try again.';
            console.error('Error resetting password', error);
          }
        );
      } else {
        this.errorMessage = 'Passwords do not match!';
      }
    }
  }

  goToLogin() {
    this.router.navigate(['/login']); // Navigate to login page
  }
}
