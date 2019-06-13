// Angular Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Material Design
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule
} from '@angular/material';

// PrimeNG
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';

// Components
import { PanelComponent } from './components/primeng/panel/panel.component';
import { CardComponent } from './components/primeng/card/card.component';

/**
 * Module Shared by all others
 */
@NgModule({
  declarations: [
    PanelComponent,
    CardComponent
  ],
  imports: [
    // Angular's Modules
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    // Material
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    // PrimeNG
    PanelModule,
    CardModule,
    TooltipModule
  ],
  exports: [
    // Modules to export
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    // Material
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    // PrimeNG Exports cases
    TooltipModule,
    // Components
    PanelComponent,
    CardComponent
  ]
})
export class SharedModule { }
