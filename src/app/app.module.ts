import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { DropdownModule } from 'primeng/dropdown';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { DialogModule } from 'primeng/dialog'; // Import DialogModule


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  
    DashboardComponent,
        ManageUsersComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
   DropdownModule,
    TableModule,
    FormsModule,
    DialogModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
