import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

// Define an interface for the response object
interface ResetEmailResponse {
  message: string;
}

interface ResetPasswordResponse {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Removed the empty constructor as it's not necessary

  // Mock function to simulate sending a reset email
  sendResetEmail(email: string): Observable<ResetEmailResponse> {
    console.log('Mock sending reset email to:', email);
    return of({ message: 'Reset link sent to ' + email }).pipe(delay(1000)); // Simulate network delay
  }

  // Mock function to simulate resetting the password
  resetPassword(newPassword: string): Observable<ResetPasswordResponse> {
    console.log('Mock resetting password to:', newPassword);
    return of({ message: 'Password has been reset successfully!' }).pipe(delay(1000)); // Simulate network delay
  }
}
