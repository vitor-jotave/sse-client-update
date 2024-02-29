import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { DashboardMainComponent } from './dashboard/dashboard.component';

@Component({
    selector: 'dashboard-root',
    standalone: true,
    imports: [RouterOutlet, RouterLink, RouterLinkActive, DashboardMainComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'sse-client-update';
}
