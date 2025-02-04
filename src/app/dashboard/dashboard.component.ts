import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface Order {
  id: number;
  customer: string;
  date: string;
  status: string;
  netAmount: number; // New field for Net Amount
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  orders: Order[] = [
    { id: 1, customer: 'John Doe', date: '2023-10-01', status: 'Shipped' , netAmount: 150.00},
    { id: 2, customer: 'Jane Smith', date: '2023-10-02', status: 'Pending' , netAmount: 200.00},
    { id: 3, customer: 'Bob Johnson', date: '2023-10-03', status: 'Delivered' , netAmount: 250.00},
  ];

  statusOptions = [
    { label: 'All', value: null },
    { label: 'Shipped', value: 'Shipped' },
    { label: 'Pending', value: 'Pending' },
    { label: 'Delivered', value: 'Delivered' }
  ];

  
  locationOptions = [
    { label: 'All Locations', value: null },
    { label: 'Location A', value: 'Location A' },
    { label: 'Location B', value: 'Location B' },
    { label: 'Location C', value: 'Location C' }
  ];

  entriesOptions = [
    { label: '5', value: 5 },
    { label: '10', value: 10 },
    { label: '20', value: 20 },
    { label: '50', value: 50 }
  ];

  selectedStatus: any;
  selectedLocation: any;
  selectedEntries: number = 5; // Default to show 5 entries
  searchName: string = '';
  getTotalOrders(): number {
    return this.orders.length;
  }

  getShippedOrders(): number {
    return this.orders.filter(order => order.status === 'Shipped').length;
  }

  getPendingOrders(): number {
    return this.orders.filter(order => order.status === 'Pending').length;
  }

  performAction(order: Order) {
    // Define your action logic here (e.g., edit, delete)
    console.log(`Action performed on Order ID: ${order.id}`);
    this.router.navigate(['manage-users']);
  }

  exportToExcel() {
    // Logic to export orders to Excel
    console.log('Export to Excel button clicked');
  }

  refreshList() {
    // Logic to refresh the list of orders (e.g., re-fetch from API)
    console.log('Refresh List button clicked');
    // For demo purposes, we'll just log to the console
  }
  constructor(private router: Router) { }
  logout() {
    // Add your logout logic here, e.g., clear tokens or user data
    sessionStorage.clear();
    // Redirect to the login page or home page
    this.router.navigate(['login']);
  }
 ManageUsersComponent(){
  this.router.navigate(['manage-users'])
 }

  
}