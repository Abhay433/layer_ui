import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oil-gas',
  imports: [],
  templateUrl: './oil-gas.component.html',
  styleUrl: './oil-gas.component.css'
})
export class OilGasComponent {
  
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
