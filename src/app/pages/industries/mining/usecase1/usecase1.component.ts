import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usecase1',
  templateUrl: './usecase1.component.html',
  styleUrls: ['./usecase1.component.css']
})
export class Usecase1Component {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/industries/mining']);
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