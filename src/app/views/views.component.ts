import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule} from '@angular/material/menu';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-views',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    RouterModule
  ],
  templateUrl: './views.component.html',
  styleUrl: './views.component.scss'
})
export class ViewsComponent {

}
