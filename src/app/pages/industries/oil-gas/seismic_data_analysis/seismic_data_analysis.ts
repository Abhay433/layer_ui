import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usecase2',
  imports: [],
  templateUrl: './seismic_data_analysis.html',
  styleUrl: './seismic_data_analysis.css'
})
export class seismic_data_analysis {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/industries/oil-gas']);
  }

  goToContact() {
    // Aapka contact page ka link
    this.router.navigate(['/contact']);
  }
  goToIndustries() {
    this.router.navigate(['/'], { fragment: 'industries-section' });
  }

  goToHowWeWork() {
    this.router.navigate(['/how-we-work']).then(() => {
      window.scrollTo(0, 0); // top se open ho
    });
 }

}
