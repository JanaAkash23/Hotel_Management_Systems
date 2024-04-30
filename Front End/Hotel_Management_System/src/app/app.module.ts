import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BookingTableComponent } from './AdminDashBoard/booking-table/booking-table.component';
import { PaymentTableComponent } from './AdminDashBoard/payment-table/payment-table.component';
import { RoomTableComponent } from './AdminDashBoard/room-table/room-table.component';
import { UserTableComponent } from './AdminDashBoard/user-table/user-table.component';
import { AboutComponent } from './about/about.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { FacilitiesheadingComponent } from './facilitiesheading/facilitiesheading.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderContentComponent } from './header-content/header-content.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegistarformComponent } from './registarform/registarform.component';
import { RoomsComponent } from './rooms/rooms.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { UpdateBookingtableComponent } from './AdminDashBoard/BookingTable/update-bookingtable/update-bookingtable.component';
import { UpdatePaymentTableComponent } from './AdminDashBoard/PaymentTable/update-payment-table/update-payment-table.component';
import { UpdateRoomtableComponent } from './AdminDashBoard/RoomTable/update-roomtable/update-roomtable.component';
import { UpdateUserTableComponent } from './AdminDashBoard/UserTable/update-user-table/update-user-table.component';
import { DeluxRoomComponent } from './Rooms/delux-room/delux-room.component';
import { NormalRoomComponent } from './Rooms/normal-room/normal-room.component';
import { SuperDeluxRoomComponent } from './Rooms/super-delux-room/super-delux-room.component';
import { PaymentComponent } from './booking/payment/payment.component';



const appRoute:Routes=[
  { path: "", component:HeaderContentComponent},
  { path: "facilities", component:FacilitiesComponent},
  { path: "rooms", component:RoomsComponent},

  { path: "", children:[
    { path: "spdelux", component:SuperDeluxRoomComponent},
    { path: "delux", component:DeluxRoomComponent},
    { path: "normal", component:NormalRoomComponent}
  ]
  },
  { path: "login", component:LoginComponent},
  { path: "ragistration", component:RegistarformComponent},
  { path: "booking", component:BookingComponent},
  { path: "Payment", component:PaymentComponent},
  { path: "AboutUs", component:AboutComponent},
  { path: "facilitiesHeading", component:FacilitiesheadingComponent},
  { path: "contact", component:ContactComponent},
  { path: "AdminLogin", component:AdminLoginComponent},
  { path: "AdminDashBoard", component:AdminDashBoardComponent},
  { path: "", children:[
    { path: "UserTable", component:UserTableComponent},
    { path: "RoomTable", component:RoomTableComponent},
    { path: "BookingTable", component:BookingTableComponent},
    { path: "PaymentTable", component:PaymentTableComponent}

  ]},
  { path: "UpdateUser/:id", component:UpdateUserTableComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderContentComponent,
    FooterComponent,
    FacilitiesComponent,
    RoomsComponent,
    LoginComponent,
    RegistarformComponent,
    BookingComponent,
    AboutComponent,
    FacilitiesheadingComponent,
    ContactComponent,
    AdminLoginComponent,
    AdminDashBoardComponent,
    UserTableComponent,
    RoomTableComponent,
    BookingTableComponent,
    PaymentTableComponent,
    PaymentComponent,
    SuperDeluxRoomComponent,
    DeluxRoomComponent,
    NormalRoomComponent,
    UpdateUserTableComponent,
    UpdateRoomtableComponent,
    UpdateBookingtableComponent,
    UpdatePaymentTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    RouterModule.forRoot(appRoute),
    ButtonsModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
