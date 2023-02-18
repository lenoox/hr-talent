import { Component } from '@angular/core';
import {Store} from "@ngxs/store";
import {GetDirectory} from "./core/state/directory/directory.action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hr-talent';
  constructor(private store:Store) { }
  ngOnInit(): void {
    this.store.dispatch(new GetDirectory())
  }
}
