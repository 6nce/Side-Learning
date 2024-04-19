import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = ""

  resetUsername =
  
  }
}



// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   username = ""
//   nameEmpty = true;

//   usernameInputted() {
//     if(this.username !== ""){
//       this.nameEmpty = false;
//     }
//   }

//   resetUsername() {
//     this.username = ""
//     this.nameEmpty = true;
//   }

//   onUsernameChange(event: Event) {
//     if(this.username !== "") {
//       this.nameEmpty = false;
//     }
//   }
// }
