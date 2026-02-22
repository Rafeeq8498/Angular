import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  
  loginForm:FormGroup=new FormGroup({})
  constructor(private fb: FormBuilder, private r: Router) {
    this.loginForm = this.fb.group({
      password: ['', Validators.required],
    username: ['', Validators.required]
    })
  }
  uname: any;
  pwd: any; reqpwd: any;
  checkLogin() {
    this.uname = this.loginForm.value.username;
    this.pwd = this.loginForm.value.password
    this.reqpwd = this.pwd.slice(0, 3) + "123"
    if (this.uname == "admin" && this.pwd == "12345") {
      this.r.navigateByUrl("/admin/add")
    }
    else if (this.reqpwd == this.pwd) {
      this.r.navigateByUrl("user/view")
    }
    else {
      alert("incorrect username or password!")
    }

  }
}
