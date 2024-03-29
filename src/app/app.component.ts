import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
 
  constructor(private authService: AuthenticationService, private router: Router){ }

  ngOnInit(): void {
    
    if(!this.authService.authenticated){
      this.router.navigateByUrl('/login');
    }else{
      this.router.navigateByUrl('/dashboard');
    }
  }
}
