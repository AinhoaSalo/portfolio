import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactForm } from '../../models/portfolio.models';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  protected readonly formData = signal<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  protected readonly submitStatus = signal<'idle' | 'submitting' | 'success' | 'error'>('idle');

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitStatus.set('submitting');

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', this.formData());
      this.submitStatus.set('success');
      
      // Reset form
      setTimeout(() => {
        this.formData.set({
          name: '',
          email: '',
          message: ''
        });
        this.submitStatus.set('idle');
      }, 3000);
    }, 1000);
  }

  updateField(field: keyof ContactForm, value: string): void {
    this.formData.update(data => ({
      ...data,
      [field]: value
    }));
  }
}
