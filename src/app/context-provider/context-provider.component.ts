import { Component, OnChanges, Input, OnInit } from '@angular/core';

@Component({
  selector: 'context-provider',
  templateUrl: './context-provider.component.html',
  styleUrls: ['./context-provider.component.sass'],
})
export class ContextProviderComponent implements OnInit, OnChanges {

  constructor(
  ) { }

  @Input()
  name: string = 'no-name';

  @Input()
  value: number = 0;

  consumers: any = [];

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.consumers.forEach((instance: any) => instance.onChange(this.value));
  }
}
