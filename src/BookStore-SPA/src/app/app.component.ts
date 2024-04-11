import { Component, NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
  declarations:[NavComponent,RouterOutlet],
  imports:[NavComponent,RouterOutlet]
})


export class AppComponent {
  title = 'BookStore-SPA';
}