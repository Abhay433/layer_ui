import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usecase3',
  imports: [],
  templateUrl: './path_optimisation.html',
  styleUrl:  './path_optimisation.css'
})
export class path_optimisation {

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
