import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-defence',
  imports: [],
  templateUrl: './defence.component.html',
  styleUrl: './defence.component.css'
})
export class DefenceComponent {
   
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
