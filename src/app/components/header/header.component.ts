import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isHidden = false;
  private lastScrollTop = 0;

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // 1. Agar page ke ekdum top par hain, toh hamesha dikhao
    if (currentScroll <= 0) {
      this.isHidden = false;
      return;
    }

    // 2. Scroll Up ho raha hai -> Hide navbar
    if (currentScroll < this.lastScrollTop) {
      this.isHidden = true;
    } 
    // 3. Scroll Down ho raha hai -> Show navbar
    else {
      this.isHidden = false;
    }

    this.lastScrollTop = currentScroll;
  }

  goHome() {
    this.router.navigate(['/']).then(() => {
      window.scrollTo(0, 0); // turant top
    });
  }

  // Section links click -> instant jump
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'auto' }); // turant jump
    }
  }
  
}
