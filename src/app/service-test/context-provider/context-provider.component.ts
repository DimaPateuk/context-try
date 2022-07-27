import {
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges
} from '@angular/core';

import { ContextProviderState } from './context-provider';

@Component({
  selector: 'context-provider',
  templateUrl: './context-provider.component.html',
  providers: [ContextProviderState],
})
export class ContextProvider<M extends Object> implements OnInit, OnChanges {
  @Input() value: M = {} as any;

  constructor(private state: ContextProviderState<M>) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.state.setState(changes['value'].currentValue);
  }

  ngOnInit() {
    this.state.setState(this.value);
  }
}
