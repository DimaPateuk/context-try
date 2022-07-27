import { state } from '@angular/animations';
import { Component } from '@angular/core';

import { ContextProviderState } from '../context-provider/context-provider';
import { Model } from '../state';

@Component({
  selector: 'child-pure',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  constructor(public state: ContextProviderState<Model>) {}
}
