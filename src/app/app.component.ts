import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCreateToken: boolean = true;

  showToken(){
    this.isCreateToken = !this.isCreateToken;
  }
}
