import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Try-context';

  v: number = 0;

  handleClick() {
    this.v++;
  }

  v2: number = 0;

  handleClick2() {
    this.v2++;
  }
}
