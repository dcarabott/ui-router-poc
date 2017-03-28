import { AppComponent } from './app.component';
import { Ng2StateDeclaration } from 'ui-router-ng2';

/** The top level state(s) */
export let MAIN_STATES: Ng2StateDeclaration[] = [
    // The top-level app state.
    // This state fills the root <ui-view></ui-view> (defined in index.html) with the AppComponent
    {
        name: 'app', url: '/',
        views: {
            $default: {component: AppComponent}
        },
        resolve: [
            {
                token: 'test',
                resolveFn: testResolver
            },
        ]
    }
];


export function testResolver() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 4000);
    });
}
