import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserService } from './service/user-service';
import { AnimalService } from './service/animal-service';
import { LionService } from './service/lion-service';


const randomFactory = () => { return Math.random(); };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    LionService,
    { provide: UserService, useClass: UserService },
    { provide: 'Random', useFactory: randomFactory },
    { provide: AnimalService, useClass: LionService } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
