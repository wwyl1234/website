import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Winnie Lam';

  toggleMenu(){
    var divMyLinks = <HTMLDivElement>document.getElementById("myLinks");
      if (divMyLinks.style.display === "block") {
        divMyLinks.style.display = "none";
      } else {
        divMyLinks.style.display = "block";
    }
  }
}
