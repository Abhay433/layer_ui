import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agriculture',
  imports: [],
  templateUrl: './agriculture.component.html',
  styleUrl: './agriculture.component.css'
})
export class AgricultureComponent {

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
