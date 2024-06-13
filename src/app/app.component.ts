import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignInComponent } from "./pages/sign-in/sign-in.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SignInComponent]
})
export class AppComponent {
  title = 'pdv-frontend';
}
