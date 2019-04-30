import { Component } from '@angular/core';
import { GameService } from '../shared/game.service';

@Component({
	selector: 'app-search-view',
	templateUrl: './search-view.component.html',
	styleUrls: ['./search-view.component.scss']
})
export class SearchViewComponent {
	public searchingForOpponent = false;
	public choosen = 0;
	public opponentChoosen = 0;
	public status = 'Pick something! 🙌🏻';
	public remainingTime = 30;
	public state = 0; // 0 = befor search; 1 = match begin; 2 = match end
	public countdownInterv: any;
	public outcome = 0; // 0 = draw; 1 = win; 2 = lose
	public aiActivated = false;

	constructor(public gameService: GameService) { }

	public reset() {
		this.state = 0;
		this.remainingTime = 30;
		this.outcome = 0;
		this.choosen = 0;
		this.opponentChoosen = 0;
		this.status = 'Pick something! 🙌🏻';
		clearInterval(this.countdownInterv);
	}

	public async searchForOpponent() {
		this.searchingForOpponent = true;

		if (this.aiActivated) {
			this.startGame();
		} else {
			this.gameService.connection.on('StartGame', () => {
				console.log('Found enemy!');
				this.startGame();
			});

			this.gameService.connection.on('FinishGame', (choice: number) => {
				console.log('Game finished!');
				this.finishGame(choice);
			});

			await this.gameService.enterSearch();
		}
	}

	public async startGame() {
		this.state = 1;
		this.searchingForOpponent = false;
		this.countdownInterv = setInterval(() => {
			this.remainingTime -= 1;
			if (this.remainingTime === 0) {
				clearInterval(this.countdownInterv);
			}
		}, 1000);
	}

	public async choose(id: number) {
		if (this.choosen === 0) {
			this.choosen = id;
			this.status = 'Waiting for opponent! 😵';

			if (this.aiActivated) {
				setTimeout(() => this.finishGame(Math.floor(Math.random() * 3) + 1), 2000);
			} else {
				this.gameService.setChoice(id);
			}
		}
	}

	public getRemainingTimePrec() {
		return Math.floor(this.remainingTime / 30 * 100);
	}

	public finishGame(opponentChoosen) {
		this.state = 2;
		clearInterval(this.countdownInterv);
		this.opponentChoosen = opponentChoosen;
		this.outcome = this.getOutcome(this.choosen, opponentChoosen);
		switch (this.outcome) {
			case 0:
				this.status = 'Draw, try again.. 🤯';
				setTimeout(() => { this.reset(); this.startGame(); }, 5000);
				break;
			case 1:
				this.status = 'You won! 👑';
				setTimeout(() => { this.reset(); }, 5000);
				break;
			case 2:
				this.status = 'Your enemy won! 💀';
				setTimeout(() => { this.reset(); }, 5000);
				break;

			default:
				break;
		}
	}

	private getOutcome(myChoice, enemyChoice) {
		if (myChoice === enemyChoice) {
			return 0;
		}
		if (myChoice === 1 && enemyChoice === 2) {
			return 1;
		}
		if (enemyChoice === 1 && myChoice === 2) {
			return 2;
		}

		if (myChoice === 2 && enemyChoice === 3) {
			return 1;
		}
		if (enemyChoice === 2 && myChoice === 3) {
			return 2;
		}

		if (myChoice === 3 && enemyChoice === 1) {
			return 1;
		}
		if (enemyChoice === 3 && myChoice === 1) {
			return 2;
		}
	}
}
