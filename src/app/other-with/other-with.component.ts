import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'other-with',
  templateUrl: './other-with.component.html',
  styleUrls: ['./other-with.component.sass'],
})
export class OtherWithComponent implements OnInit {

  constructor() { }

  @Input()
  v: number = 0;

  ngOnInit(): void {
  }

}
