import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-environmental-sustainability',
  imports: [],
  templateUrl: './environmental-sustainability.component.html',
  styleUrl: './environmental-sustainability.component.css'
})
export class EnvironmentalSustainabilityComponent {

  constructor(private router: Router) {}
  
  goToIndustries() {
    this.router.navigate(['/'], { fragment: 'industries-section' });
  }

  goToHowWeWork() {
    this.router.navigate(['/how-we-work']).then(() => {
      window.scrollTo(0, 0); // top se open ho
    });
 }

}
