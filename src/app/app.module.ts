import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatMenuModule,
  MatNativeDateModule,
  MatOptionModule,
  MatPaginatorModule,
  MatDialogModule,
  MatExpansionModule
 } from '@angular/material';

import { AppComponent } from './app.component';
import { OrderHeaderComponent } from './order/order-header.component';

@NgModule({
  imports:[
    BrowserModule,
    FormsModule,  
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatDatepickerModule,
  　MatNativeDateModule,
  　MatOptionModule,
  　MatPaginatorModule,
    MatExpansionModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    ReactiveFormsModule ],
  declarations: [ AppComponent, OrderHeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
