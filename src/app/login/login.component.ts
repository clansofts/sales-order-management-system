import { Component, OnInit, Input } from '@angular/core';
import {Http, Headers, RequestOptions, RequestOptionsArgs, Request, Response, URLSearchParams } from '@angular/http';
import {Router} from '@angular/router';

export class RegisterBindingModel {
     Email: string;
     Password: String;
     ConfirmPassword: String;
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  user: RegisterBindingModel;
  @Input() message: any;
  error: any;
  testvar: any;
  private headers = new Headers({'Content-Type':'application/json'});     
  
 
  constructor(private _router: Router, private _http: Http) { }
  
  

 
  Register(username, password, confirmpassword){
                        
        let user = new RegisterBindingModel();
        user.Email = username;
        user.Password = password;
        user.ConfirmPassword = confirmpassword;
        var err: any;
     
          
        let url = `http://localhost:8082/api/account/register`;
        let data = JSON.stringify(user);
        
      
       var options:RequestOptionsArgs = {
          url : url,
          method : 'Post',
          search : null,
          headers : this.headers, 
          body : data,
          withCredentials: false
        };  
      
        var reqoptions = new RequestOptions(options); 
        var req = new Request(reqoptions);   

        var reqoptions = new RequestOptions({ headers: this.headers }); 
        var req = new Request(reqoptions);   
     
        this._http.post(url, data, req).toPromise().then(res => { this.registerlogin(username,password,res.status) })
                  .catch(err => {
                     this.registerlogin(null,null,err["status"]);
                      Promise.reject(err);});
    
        return false;
  }
  
  registerlogin(username,password,status)
  {
    
        // if status = 200 ok allow to login into the system.
       if (status == 200) {
         let loginurl = `http://localhost:8082/token`;
         let body = "username=" + username + "&password=" + password + "&grant_type=password";
         let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
         let options = new RequestOptions({ headers: headers });
         
         this._http.post(loginurl, body, options).toPromise().then(response => {
                localStorage.setItem('access_token', response.json().access_token);
                localStorage.setItem('expires_in', response.json().expires_in);
                localStorage.setItem('token_type', response.json().token_type);
                localStorage.setItem('userName', response.json().userName);
                this._router.navigate(['salesorder']);
         }).catch(err => { this.message = "Invalid Username/Password"; Promise.reject(err)});
         
        }
        else
         {
               this.message = "Registration Failed!!!";
         }
                  
        return false;
      }  
  
  ngOnInit() {
  }

}
