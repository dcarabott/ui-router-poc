import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MAIN_STATES } from './app.routes';
import { UIRouterModule, UIView } from 'ui-router-ng2';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        UIRouterModule.forRoot({
            states: MAIN_STATES
        }),
    ],
    bootstrap: [UIView]
})
export class AppModule {
}
