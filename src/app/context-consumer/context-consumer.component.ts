import { Optional, SkipSelf, Component, OnInit, Input, Host } from '@angular/core';
import { ContextProviderDirective, ContextProviderComponent } from '../context-provider/context-provider.component';
import { ContextProviderService } from '../context-provider.service';

@Component({
  selector: 'context-consumer',
  templateUrl: './context-consumer.component.html',
  styleUrls: ['./context-consumer.component.sass'],
})
export class ContextConsumerComponent implements OnInit {

  constructor(
    @Optional() @SkipSelf() private providerDir: ContextProviderDirective,
    @Optional() @SkipSelf() private provider: ContextProviderComponent,
    @Host() @SkipSelf() @Optional() private host: ContextProviderComponent,
    @Host() @SkipSelf() @Optional() private service: ContextProviderService,
  ) { }

  value: number = 0;

  @Input()
  name: string = 'no-name';

  ngOnInit(): void {
    console.log(this.provider);

    if (this.provider) {
      this.provider.consumers.push(this);
      return;
    }

    if (this.providerDir) {
      this.providerDir.setConsumer(this);
    }
  }

  onChange(v: any) {
    this.value = v;
  }
}
