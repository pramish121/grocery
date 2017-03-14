import { Injectable,Input, Output, EventEmitter } from '@angular/core';

@Injectable()

export class passwordService{
    authenticate:Boolean;
    authUpdated:EventEmitter<Boolean> = new EventEmitter<Boolean>();
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
    setAuthenticate=(auth)=>{
        this.authenticate=auth;
        this.authUpdated.emit(this.authenticate);
    }
    getAuthenticate=()=>this.authenticate;
    setUserName=(usr)=>this.passwordModel.userName=usr;
    setPassword=(pass)=>this.passwordModel.password=pass;
    getUserName=()=>this.passwordModel.userName;
    getPassword=()=>this.passwordModel.password;
    checkPassword=()=>{
        var temp=false;
        for(let i=0;i<this.validUsers.length;i++){
            if (this.passwordModel.userName === this.validUsers[i].userName && this.passwordModel.password === this.validUsers[i].password){
                temp=true;
               // this.setAuthenticate(true);
                break;   
            }
        }
        this.setAuthenticate(temp);
        //this.setAuthenticate(false);
    }
    logout=()=>this.setAuthenticate(false);

    constructor(){
        
    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }
}