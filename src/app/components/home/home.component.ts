import { LandingComponent } from '../landing/landing.component';
import { FeaturesComponent } from '../features/features.component';
import { IndustriesComponent } from '../industries/industries.component';
import { OurpartnersComponent } from '../ourpartners/ourpartners.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LandingComponent, FeaturesComponent, IndustriesComponent, OurpartnersComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { title = 'layer_ui';}
