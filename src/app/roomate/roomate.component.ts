import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roomate',
  templateUrl:'./roomate.html',
  styles: []
})
export class RoomateComponent implements OnInit {
  formModel = {
    firstName:'',
    lastName:'',
    address:'',
    phone:''
  };
  roomateList =[];
  
  
  submit = function(){
    var temp = {
        firstName:this.formModel.firstName,
        lastName:this.formModel.lastName,
        address:this.formModel.address,
        phone:this.formModel.phone
    }
    this.roomateList.push(temp);
  }
  constructor() { }

  ngOnInit() {
  }

}
