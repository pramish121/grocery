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
    this.authenticate = false;
  }
  constructor(private _passwordService:passwordService) { 
    this.authenticate=this._passwordService.getAuthenticate();
  }
  

  ngOnInit() {
  }

}
