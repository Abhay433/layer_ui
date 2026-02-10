import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usecase2',
  imports: [],
  templateUrl: './usecase2.component.html',
  styleUrl: './usecase2.component.css'
})
export class Usecase2Component {
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
