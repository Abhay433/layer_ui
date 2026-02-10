import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-howwework',
  imports: [CommonModule,FormsModule],
  templateUrl: './howwework.component.html',
  styleUrl: './howwework.component.css'
})
export class HowweworkComponent {

  form = {
    name: '',
    email: '',
    company: '',
    message: ''
  };

  submitForm() {
    console.log('Form Data:', this.form);

    alert('Thanks! We will contact you soon 🚀');

    // Reset form
    this.form = {
      name: '',
      email: '',
      company: '',
      message: ''
    };
  }

}
