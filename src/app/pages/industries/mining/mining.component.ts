import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mining',
  standalone: true,
  templateUrl: './mining.component.html',
  styleUrls: ['./mining.component.css']
})
export class MiningComponent {

  constructor(private router: Router) {}

  // goToIndustries() {
  //   this.router.navigate(['/']).then(() => {
  //     setTimeout(() => {
  //       document.getElementById('industries-section')
  //         ?.scrollIntoView({ behavior: 'auto' });
  //     }, 300);
  //   });
  // }

  goToIndustries() {
    this.router.navigate(['/'], { fragment: 'industries-section' });
  }

  goToHowWeWork() {
    this.router.navigate(['/how-we-work']).then(() => {
      window.scrollTo(0, 0); // top se open ho
    });
 }

 goToUsecase(path: string) {
  // Ye URL ko industries/mining/usecase1 (ya 2, 3) par redirect karega
  this.router.navigate(['industries/mining', path]);
 }
 
}
