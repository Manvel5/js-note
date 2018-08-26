import { Component, Inject, InjectionToken } from '@angular/core';
import { UserService, User } from './service/user-service';
import { AnimalService } from './service/animal-service';
export const BackendUrl = new InjectionToken<string>('Hello!');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{provide: BackendUrl, useValue: 'myQAserver.com'}]
})
export class AppComponent {
  user: User;
  constructor(private userService: UserService, 
              @Inject(BackendUrl) private url: string,
              @Inject('Random') private random: string,
              private animalService: AnimalService) {
    this.user = userService.user;
    console.log('url', url);
    console.log('useFactory', random);
    console.log('useClass', animalService);
  }
}
