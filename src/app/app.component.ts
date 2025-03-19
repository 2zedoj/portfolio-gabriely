import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import emailjs from '@emailjs/browser';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { environment } from "../environments/environment.prod";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    RouterOutlet,
    NgbModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    HttpClientModule,
    MatProgressBarModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'portfolio';
  panelOpenState = false;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  nameFormControl = new FormControl('', [Validators.required])
  messageFormControl = new FormControl('', [Validators.required])


  constructor(){
    
  }

  download(path:string){
    window.open(path,'_blanck')
  }

  async sendContactMe(){
    try{
      emailjs.init(environment.publicKey);
    var response = await emailjs.send(environment.ServiceID,environment.templateID,{
      from_name: this.nameFormControl.value,
      to_name: 'Admin',
      from_email: this.emailFormControl.value,
      subject: '',
      message: this.messageFormControl.value,
      cid: '../assets/Fotos/assinatura.png',
    });
    alert('Message has been sent.')
    }catch{
      alert('Error: Message cant send now. Try Later')
    }
    this.emailFormControl.reset();
    this.messageFormControl.reset();
    this.nameFormControl.reset();
  }

}




