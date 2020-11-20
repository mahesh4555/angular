import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
 <div>
    <img src="/assets/mieupro.png">
</div>
  `,
  styleUrls: ['./title.component.css']

})
export class TitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
