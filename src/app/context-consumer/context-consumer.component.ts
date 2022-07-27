import { Optional, SkipSelf, Component, OnInit, Input, Host, ElementRef } from '@angular/core';
import { ContextProviderComponent } from '../context-provider/context-provider.component';

@Component({
  selector: 'context-consumer',
  templateUrl: './context-consumer.component.html',
  styleUrls: ['./context-consumer.component.sass'],
})
export class ContextConsumerComponent implements OnInit {
  constructor(
    @Optional() private context: ContextProviderComponent | null
  ) { }

  value: number = 0;

  @Input()
  name: string = 'no-name';


  trySubscribe() {

  }

  ngOnInit(): void {
    console.log(this.context);

    if (this.context) {
      if (this.context) {
        this.context.consumers.push(this);
      }
      return;
    }

  }

  onChange(v: any) {
    this.value = v;
  }
}
