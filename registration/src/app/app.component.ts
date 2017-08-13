import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  success = false;

  states = ["Alaska","Alabama","Arkansas","American Samoa","Arizona","California","Colorado","Connecticut","District of Columbia","Delaware","Florida","Georgia","Guam","Hawaii","Iowa","Idaho","Illinois","Indiana","Kansas","Kentucky","Louisiana","Massachusetts","Maryland","Maine","Michigan","Minnesota","Missouri","Mississippi","Montana","North Carolina"," North Dakota","Nebraska","New Hampshire","New Jersey","New Mexico","Nevada","New York","Ohio","Oklahoma","Oregon","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Virginia","Virgin Islands","Vermont","Washington","Wisconsin","West Virginia","Wyoming"];

  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    street: '',
    apartment: '',
    city: '',
    state: '',
    lucky: true
  };

  confirmPassword = '';
  passwordMatch = false;
  
  checkPassword() {
    if (this.user.password === this.confirmPassword) {
      this.passwordMatch = true;
    }
  };

  onSubmit() {
    this.success = true;
  };

}
