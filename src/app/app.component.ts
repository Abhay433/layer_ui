import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './components/landing/landing.component';
import { FeaturesComponent } from './components/features/features.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { OurpartnersComponent } from './components/ourpartners/ourpartners.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, // <--- Ye sabse important hai
    HeaderComponent,
    FooterComponent,
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
