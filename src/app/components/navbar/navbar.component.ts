import { Component, OnInit} from '@angular/core';


/*window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    @NavbarComponent.navbar.style.top = "0";
  } else {
    @NavbarComponent.navbar.style.top = "-50px";
  }
}*/

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent { }

