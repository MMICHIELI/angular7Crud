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

/**
 * Module Shared by all others
 */
@NgModule({
    declarations: [],
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
        MatFormFieldModule
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
        MatFormFieldModule
    ]
})
export class SharedModule { }
