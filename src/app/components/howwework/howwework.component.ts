import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-howwework',
  imports: [CommonModule,FormsModule],
  templateUrl: './howwework.component.html',
  styleUrl: './howwework.component.css'
})
export class HowweworkComponent {

  constructor(private router: Router, private supabaseService: SupabaseService) {}

  // Purane HTML ke hisaab se fields
  form = {
    full_name: '',
    email: '',
    company: '',
    message: ''
  };

  async onSubmit(contactForm: any) {
    console.log('Form submitting:', this.form);

    const { data, error } = await this.supabaseService.saveContact(this.form);

    if (error) {
      console.error('Database error:', error.message);
      
      // Professional Error Handling
      if (error.message.includes('unique_email')) {
        alert('This email has already been submitted. Our team will get back to you soon.');
      } else {
        alert('We encountered a technical issue while saving your details. Please try again later.');
      }
    } else {
      // Professional Success Message
      alert('Thank you for reaching out! Your message has been successfully received. Our team will contact you shortly. 🚀');
      
      // Form reset logic
      contactForm.resetForm(); 
      this.form = { full_name: '', email: '', company: '', message: '' };
    }
  }

  
  
  goToIndustries() {
    this.router.navigate(['/'], { fragment: 'industries-section' });
  }

}
