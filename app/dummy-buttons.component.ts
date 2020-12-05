import { Component } from "@angular/core";

@Component({
  selector: "button-dummy",
  template: `
    <button style="
      border-color: rgba(183, 183, 183, 0.43);
    "  mat-stroked-button>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    </button>
  `
})
export class DummyButtonComponent {}


@Component({
  selector: "icon-button-dummy",
  template: `
    		<button style="
      min-width: 40px;
      border-color:rgba(183, 183, 183, 0.43);
    " 
    mat-stroked-button>
           &nbsp;
        </button>
  `
})
export class DummyIconButtonComponent {}