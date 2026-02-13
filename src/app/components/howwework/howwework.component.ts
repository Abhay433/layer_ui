import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-howwework',
  standalone: true,
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

  private toTitleCase(str: string): string {
    if (!str) return '';
    return str.toLowerCase().split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }

  async onSubmit(contactForm: any) {

    // 1. Data Clean-up (Capitalize Names & Company)
    this.form.full_name = this.toTitleCase(this.form.full_name);
    this.form.company = this.toTitleCase(this.form.company);
    this.form.email = this.form.email.toLowerCase().trim(); // Email hamesha lowercase

    console.log('Form submitting:', this.form);

    const { error } = await this.supabaseService.saveContact(this.form);

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
