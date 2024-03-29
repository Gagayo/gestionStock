import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthenticationService, 
              private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout( ()=>{
      this.router.navigateByUrl('/login');
    });
  }
}
