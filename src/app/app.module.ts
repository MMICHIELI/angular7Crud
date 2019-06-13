// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Application Modules
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { StateManagementModule } from './state-management.module';

// Root Component
import { AppComponent } from './app.component';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StateManagementModule,
    CoreModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
