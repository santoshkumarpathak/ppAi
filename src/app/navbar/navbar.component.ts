import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit(): void {
  }

  newFunctioncall() {
    console.log("new function")
    this.route.navigateByUrl('newfunction');
  }
}
