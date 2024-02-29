import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'dashboard-emendas',
    standalone: true,
    imports: [TableModule],
    templateUrl: './emendas.component.html',
    styleUrl: './emendas.component.scss'
})
export class EmendasComponent {
    title = 'dashboard';
}
