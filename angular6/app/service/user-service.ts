import {Injectable } from '@angular/core';

export interface User {
	firstName: string,
	lastName: string
	age: number
}

@Injectable()
export class UserService {
	public user: User;
	
	constructor() {
		this.user = {
			firstName: 'Max',
			lastName: 'Min',
			age: 25
		};
	}
}