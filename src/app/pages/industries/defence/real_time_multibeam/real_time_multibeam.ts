import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usecase1',
  imports: [],
  templateUrl: './real_time_multibeam.html',
  styleUrl: './real_time_multibeam.css'
})
export class real_time_multibeam {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/industries/defence']);
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
