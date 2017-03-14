import { Component, OnInit } from '@angular/core';
import { passwordService } from '../services/passwordService';

@Component({
  selector: 'app-roomateform',
  templateUrl: './roomateform.component.html',
  styleUrls: ['./roomateform.component.css']
})
export class RoomateformComponent implements OnInit {
  authenticate:Boolean;
  logout=()=>{
    this._passwordService.setAuthenticate(false);
  }
  constructor(private _passwordService:passwordService) { 
    this._passwordService.authUpdated.subscribe(
      (authenticate)=>{
        this.authenticate = this._passwordService.getAuthenticate();
      }
    );
  }
  

  ngOnInit() {
  }

}
