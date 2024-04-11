import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

@NgModule({
  declarations:[RouterOutlet],
  imports:[RouterOutlet]
})

export class NavComponent {

}
