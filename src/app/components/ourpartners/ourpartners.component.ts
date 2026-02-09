import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ourpartners',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './ourpartners.component.html',
  styleUrl: './ourpartners.component.css'
})
export class OurpartnersComponent {
  partners = [
    { name: 'Partner 1', logo: 'https://placehold.co/200x80?text=Logo+1' },
    { name: 'Partner 2', logo: 'https://placehold.co/200x80?text=Logo+2' },
    { name: 'Partner 3', logo: 'https://placehold.co/200x80?text=Logo+3' },
    { name: 'Partner 4', logo: 'https://placehold.co/200x80?text=Logo+4' },
    { name: 'Partner 5', logo: 'https://placehold.co/200x80?text=Logo+5' },
    { name: 'Partner 6', logo: 'https://placehold.co/200x80?text=Logo+6' }
  ];
}
