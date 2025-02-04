import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent {
  users: User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', role: 'User' },
  ];

  nextId: number = 4;
  displayModal: boolean = false; // Control modal visibility
  editingUser: boolean = false;
  currentUser: User = { id: 0, name: '', email: '', role: '' }; // Default user model

  constructor(private router: Router) {}

  openModal() {
    this.editingUser = false; // Set to false for adding a user
    this.currentUser = { id: 0, name: '', email: '', role: '' }; // Reset form fields
    this.displayModal = true; // Show the modal
  }

  editUser(user: User) {
    this.editingUser = true; // Set to true for editing a user
    this.currentUser = { ...user }; // Clone the user for editing
    this.displayModal = true; // Show the modal
  }

  cancelEditing() {
    this.displayModal = false; // Hide the modal
  }

  onSubmit(form: any) {
    if (form.invalid) {
      return; // Prevent submission if the form is invalid
    }

    if (this.editingUser) {
      const index = this.users.findIndex(u => u.id === this.currentUser.id);
      if (index !== -1) {
        this.users[index] = this.currentUser; // Update existing user
        alert("User updated successfully!");
      }
    } else {
      const newUser: User = {
        id: this.nextId++,
        name: this.currentUser.name,
        email: this.currentUser.email,
        role: this.currentUser.role
      };
      this.users.push(newUser); // Add new user
      alert("User added successfully!");
    }
    this.cancelEditing(); // Reset the form after submission
  }

  deleteUser(user: User) {
    const confirmDelete = confirm(`Are you sure you want to delete user ${user.name}?`);
    if (confirmDelete) {
      this.users = this.users.filter(u => u.id !== user.id);
      alert("User deleted successfully!");
    }
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}