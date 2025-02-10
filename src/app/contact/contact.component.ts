import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import emailjs from '@emailjs/browser';
import { from } from 'rxjs';
import{ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      from_name: ['', Validators.required],
      to_name: 'SLIM Hassen',
      message: ['', Validators.required],
      from_email: ['', [Validators.required, Validators.email]], // Ensures a valid email format
    });
  }
  async send(){
    if(this.form.valid){
      
    emailjs.init('gvs1DEwyfkG8HahCv');
    let response =await emailjs
      .send('service_20sf55u', 'template_3dz39yt', {
        to_name: this.form.value.to_name,
        from_name: this.form.value.from_name,
        message: this.form.value.message,
        from_email: this.form.value.from_email,
        subject :'aaa'
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          console.log('FAILED...', err);
        },
      );
      alert('Message sent successfully');
      this.form.reset();
  }

}
}