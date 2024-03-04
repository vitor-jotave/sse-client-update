import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'dashboard-emendas',
    standalone: true,
    imports: [CommonModule, TableModule],
    templateUrl: './emendas.component.html',
    styleUrl: './emendas.component.scss'
})
export class EmendasComponent {
    emendas: any;

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.apiService.getEmendas().subscribe(itens => {
            this.emendas = itens;
        });
    }
    title = 'dashboard';
}
