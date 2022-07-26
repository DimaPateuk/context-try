import { Directive, Optional, Component, OnChanges, Input, OnInit } from '@angular/core';
import { ContextProviderService } from '../context-provider.service';

@Directive({
  selector: '[context-provider]'
})
export class ContextProviderDirective {
  constructor() {}

  consumers: any = [];
  provider: any;

  setProvider(provider: any) {
    this.provider = provider;
    this.provider.consumers.push(...this.consumers);
    this.consumers = [];
  }

  setConsumer(consumer: any) {
    if (this.provider) {
      this.provider.consumer.push(consumer);

      return;
    }

    this.consumers.push(consumer);
  }

}

@Component({
  selector: 'context-provider',
  templateUrl: './context-provider.component.html',
  styleUrls: ['./context-provider.component.sass'],
  providers: [ContextProviderService]
})
export class ContextProviderComponent implements OnInit, OnChanges {

  constructor(
    @Optional() private providerDir: ContextProviderDirective,
    private service: ContextProviderService,
  ) { }

  @Input()
  name: string = 'no-name';

  @Input()
  value: number = 0;

  consumers: any = [];

  ngOnInit(): void {
    if (this.providerDir) {
      this.providerDir.setProvider(this);
    }
  }

  ngOnChanges() {
    this.consumers.forEach((instance: any) => instance.onChange(this.value));
  }
}
