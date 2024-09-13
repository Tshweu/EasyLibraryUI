import { Component } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private dashboard_service: DashboardService){}

  ngOnInit(): void {
    this.dashboard_service.get().subscribe({
      next: ()=>{

      },
      error: ()=>{

      }
    });
  }
}
