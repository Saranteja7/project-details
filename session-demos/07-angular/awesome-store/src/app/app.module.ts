import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProductsModule } from './products/products.module';

@NgModule(
    {
        declarations: [
            AppComponent,
            AboutComponent /* components, pipes */
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            ProductsModule
        ],
        providers: [], /* services */
        bootstrap: [AppComponent]
    }
)
export class AppModule { }
