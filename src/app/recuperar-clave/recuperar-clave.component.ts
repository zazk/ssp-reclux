import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// JQuery Works!
declare var $: any;
// --------
@Component({
  selector: 'app-recuperar-clave',
  template: `
    <p>
      recuperar-clave works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class RecuperarClaveComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
