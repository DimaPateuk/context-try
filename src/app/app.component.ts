import { Component } from '@angular/core';

import { Action, Model } from './service-test/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'Try-context';

  appState_1: Model = {} as any;
  appState_2: Model = {} as any;

  v1: number = 0;
  v2: number = 0;

  handleLowClick() {
    this.appState_1 = {
      message: 'FirstAppState' + this.v1++,
      action: Action.Low,
    };
  }

  handleMajorClick() {
    this.appState_2 = {
      message: 'SecondAppState' + this.v2++,
      action: Action.Major,
    };
  }

  // v2: number = 0;

  // handleClick2() {
  //   this.v2++;
  // }
}
