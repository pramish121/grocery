import { Component } from '@angular/core';
import { passwordService } from './services/passwordService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private _passwordService:passwordService){

  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._passwordService.setUserName("rejin@gmail.com");
    this._passwordService.setPassword("ugly");

    alert(this._passwordService.checkPassword());

  }
}
