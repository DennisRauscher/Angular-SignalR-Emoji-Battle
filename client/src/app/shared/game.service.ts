import { Injectable, AfterViewInit } from '@angular/core';
import * as signalR from '@aspnet/signalr';

@Injectable()
export class GameService {
	public currentPlayersOnline = 0;
	public connection: any;

	constructor() { this.initConnection(); }

	private async initConnection() {
		this.connection = new signalR.HubConnectionBuilder().withUrl('/gamehub').build();
		this.connection.on('UpdatePlayers', (numPlayers: number) => {
			this.currentPlayersOnline = numPlayers;
		});
		await this.connection.start().catch(error => console.log(error));
	}

	public async enterSearch() {
		await this.connection.send('EnterSearch');
	}

	public async setChoice(id: number) {
		await this.connection.send('SetChoice', id);
	}
}
