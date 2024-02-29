import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { ColorPickerModule } from 'primeng/colorpicker';

@Component({
    selector: 'dashboard-main',
    standalone: true,
    imports: [
        ButtonModule,
        ColorPickerModule
    ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardMainComponent {
    title = 'dashboard'
}
