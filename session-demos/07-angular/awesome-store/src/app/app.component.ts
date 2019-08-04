import { Component } from '@angular/core';
//import './xyz.css';

@Component(
    {
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }
)
export class AppComponent {
    title: string = 'Awesome Store';
    counter: number = 0;

    constructor() {
        setInterval( () => this.counter++, 1000 );
    }
}

/*
1. Components (custom HTML tags)
2. Services - Business logic shared across the app
3. Pipes - transform data
4. Routing
5. Modules
*/