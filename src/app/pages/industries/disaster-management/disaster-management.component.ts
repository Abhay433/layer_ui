import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disaster-management',
  imports: [],
  templateUrl: './disaster-management.component.html',
  styleUrl: './disaster-management.component.css'
})
export class DisasterManagementComponent {

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
