import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardMainComponent } from './dashboard/dashboard.component';

@Component({
    selector: 'dashboard-root',
    standalone: true,
    imports: [RouterOutlet, DashboardMainComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'sse-client-update';
}
