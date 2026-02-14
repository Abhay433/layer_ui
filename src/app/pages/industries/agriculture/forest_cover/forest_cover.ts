import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usecase1',
  imports: [],
  templateUrl: './forest_cover.html',
  styleUrl: './forest_cover.css'
})
export class forest_cover {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/industries/agriculture']);
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
