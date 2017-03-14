import { Injectable } from '@angular/core';

@Injectable()

export class passwordService{
    validUsers=[
        {
            "userName":"kcabhish@gmail.com",
            "password":"123"
        },
        {
            "userName":"pramish@gmail.com",
            "password":"123"
        },
         {
            "userName":"rejin@gmail.com",
            "password":"ugly"
        }
    ];
    passwordModel={
        "userName":"",
        "password":""
    }
    setUserName=(usr)=>this.passwordModel.userName=usr;
    setPassword=(pass)=>this.passwordModel.password=pass;
    getUserName=()=>this.passwordModel.userName;
    getPassword=()=>this.passwordModel.password;
    checkPassword=()=>{
        for(let i=0;i<this.validUsers.length;i++){
            if (this.passwordModel.userName === this.validUsers[i].userName && this.passwordModel.password === this.validUsers[i].password){
                return true;   
            }
        }
        return false;
    }
    constructor(){

    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }
}