// Angular Modules
import { NgModule } from '@angular/core';

// Application Modules
import { SharedModule } from './shared.module';

@NgModule({
    imports: [
        SharedModule
    ],
    exports: [
        SharedModule
    ]
})
export class CoreModule { }
