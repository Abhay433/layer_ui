import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usecase3',
  imports: [],
  templateUrl: './geological_mapping.html',
  styleUrl: './geological_mapping.css'
})
export class geological_mapping {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/industries/mining']);
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
