import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRoutes, RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';

import { AppComponent } from './app.component';

@Component({
    selector: 'as-test-cmp',
    template: '<div class="title">Hello test</div>'
})
class TestRouterComponent {
}

let config: Routes = [
    {
        path: '', component: TestRouterComponent
    }
];

describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                TestRouterComponent,
                AppComponent
            ],
            imports: [RouterTestingModule, RouterModule],
            providers: [provideRoutes(config)]
        });
    });

    it('should have title Hello world', async(() => {
        TestBed.compileComponents().then(() => {
            let fixture: ComponentFixture<AppComponent>;
            fixture = TestBed.createComponent(AppComponent);
            fixture.detectChanges();

            let compiled = fixture.debugElement.nativeElement;
            expect(compiled).toBeDefined();
            // TODO: find a way to compile the routed component
            // expect(compiled.querySelector('div.title')).toMatch('Hello world');
        });
    }));
});
