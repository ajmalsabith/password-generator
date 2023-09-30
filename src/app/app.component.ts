import { Component, Directive, Input, ElementRef, HostListener  } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {


  isletter=false
  isnumber=false
  isspecial=false
  length=null
  message=''
  password =''
  isButtonClicked=false;
  isshow=false


  generateRandomPassword(length:number,type:string) {
   
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * type.length)
        password += type[randomIndex]
    }
    return password;
 } 



  generate(length:any){
    const mixed = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"
    const number="0123456789"
    const charset="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const charandnum="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    const special="!@#$%^&*()_+"
    const specialandnum="!@#$%^&*()_+0123456789"
    const specialandchar="!@#$%^&*()_+abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"


    if(length<6 || length>20){
      Swal.fire({
        icon: 'error',
        title: 'length fix',
        text: 'length should be > 6 and < 20',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
    })
      this.password=''
    }

    else if(this.isletter && this.isnumber && this.isspecial){
     const pass= this.generateRandomPassword(length,mixed)
     this.password=pass
this.isshow=true
    }else if(this.isletter && this.isnumber){
      const pass= this.generateRandomPassword(length,charandnum)
      this.password=pass
this.isshow=true

    }else if(this.isspecial && this.isnumber){
      const pass= this.generateRandomPassword(length,specialandnum)
      this.password=pass
this.isshow=true

    }else if(this.isletter && this.isspecial){
      const pass= this.generateRandomPassword(length,specialandchar)
      this.password=pass
this.isshow=true

    }else if(this.isletter){
      const pass= this.generateRandomPassword(length,charset)
      this.password=pass
this.isshow=true

    }else if(this.isnumber){
      const pass= this.generateRandomPassword(length,number)
      this.password=pass
this.isshow=true

    }else if(this.isspecial){
      const pass= this.generateRandomPassword(length,special)
      this.password=pass
      this.isshow=true

    }
   
this.isletter=false
this.isspecial=false
this.isnumber=false
this.length=null
  }

  toggleButtonClick() {
    this.isButtonClicked = !this.isButtonClicked;
  }
}
