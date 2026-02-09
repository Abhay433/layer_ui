import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isHidden = false;
  private lastScrollTop = 0;

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
  
}
