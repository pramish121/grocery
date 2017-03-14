import { Component } from '@angular/core';
import { passwordService } from './services/passwordService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  authenticate:Boolean;
  passwordModel={
    "userName":"pramish@gmail.com",
    "password":"123"
  }
  
  validateUser=()=>{
    
    this._passwordService.setUserName(this.passwordModel.userName);
    this._passwordService.setPassword(this.passwordModel.password);
    this._passwordService.checkPassword();
    ;
  }
  constructor(private _passwordService:passwordService){
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._passwordService.authUpdated.subscribe(
      (authenticate)=>
        {
          this.authenticate=this._passwordService.getAuthenticate()
        }
      );
  }
  
}
