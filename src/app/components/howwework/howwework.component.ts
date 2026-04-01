import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// import { SupabaseService } from '../../services/supabase.service';
import { FirebaseService } from '../../firebase.service';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-howwework',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './howwework.component.html',
  styleUrl: './howwework.component.css'
})
export class HowweworkComponent implements OnInit{

  constructor(private router: Router, private firebaseService: FirebaseService) {}

  ngOnInit() {
    emailjs.init('FzsZ2DmJYMxCsNUOk'); 
  }

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
  console.log("!!! FUNCTION TRIGGERED !!!"); 

  // Check if form is valid in logic too
  if (contactForm.invalid) {
    console.log("Form is invalid!");
    return;
  }

  this.form.full_name = this.toTitleCase(this.form.full_name);
  this.form.company = this.toTitleCase(this.form.company);
  this.form.email = this.form.email.toLowerCase().trim();

  try {
    const res = await this.firebaseService.saveContact({
      ...this.form,
      createdAt: new Date()
    });

    if (!res.success) throw res.error;
    console.log('Firebase Save Success:', res.id);

    const templateParams = {
      name: this.form.full_name,  
      email: this.form.email,    
      message: this.form.message,  
      title: 'New Inquiry from Website',        
      time: new Date().toLocaleString() 
    };

    const emailRes = await emailjs.send(
      'service_uquqhya', 
      'template_hsvcm5m', 
      templateParams
    );

    console.log("EmailJS Success:", emailRes.status, emailRes.text);
    alert('Thank you! Your message has been sent. 🚀');

    contactForm.resetForm();
    this.form = { full_name: '', email: '', company: '', message: '' };

  } catch (error: any) {
    console.error('Submission Error:', error);
    alert('Something went wrong. Please check the console.');
  }
}
  goToIndustries() {
    this.router.navigate(['/'], { fragment: 'industries-section' });
  }

}
