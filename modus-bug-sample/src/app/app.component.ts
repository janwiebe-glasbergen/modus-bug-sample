import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModusTableErrorComponent } from "./modus-table-error/modus-table-error.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModusTableErrorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppComponent {
  title = 'modus-bug-sample';
}
