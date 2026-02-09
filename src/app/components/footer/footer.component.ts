import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // 👈 Ye zaroori hai

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule], // 👈 Yahan add karein
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {}
