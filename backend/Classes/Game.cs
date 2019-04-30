
using System;
using System.Linq;
using System.Threading.Tasks;
using System.Timers;
using Microsoft.AspNetCore.SignalR;

namespace emojidefender
{
	public class Game
	{
		public Player playerA;
		public Player playerB;
		public int choiceA = 0;
		public int choiceB = 0;
		private string groupId;
		private Timer timer; 

		public Game(Player playerA, Player playerB)
		{
			Random rand = new Random();
			this.groupId = "grp_" + (rand.Next(99999) + 100000);
			this.playerA = playerA;
			this.playerB = playerB;
		}

		public async Task StartGame(GameHub hub)
		{
			await hub.Groups.AddToGroupAsync(this.playerA.ConnectionId, this.groupId);
			await hub.Groups.AddToGroupAsync(this.playerB.ConnectionId, this.groupId);
			await hub.Clients.Group(this.groupId).SendAsync("StartGame");
		}

		public void SetChoice(GameHub hub, Player p, int choice)
		{
			if (p.ConnectionId == this.playerA.ConnectionId && this.choiceA == 0)
			{
				this.choiceA = choice;
			}
			if (p.ConnectionId == this.playerB.ConnectionId && this.choiceB == 0)
			{
				this.choiceB = choice;
			}

			//Early finished game
			if (this.choiceA != 0 && this.choiceB != 0)
			{
				this.FinishGameAsync(hub);
			}
		}

		public void FinishGameAsync(GameHub hub)
		{
			hub.Clients.Client(this.playerA.ConnectionId).SendAsync("FinishGame", this.choiceB);
			hub.Clients.Client(this.playerB.ConnectionId).SendAsync("FinishGame", this.choiceA);

			if(this.choiceA != this.choiceB)
			{
				//Remove group
				hub._pr.games = hub._pr.games.Where(g => g.groupId != this.groupId).ToList();

			}
			else
			{
				//Draw - Restart
				this.choiceA = 0;
				this.choiceB = 0;
			}
		}

		public void RestartGame()
		{

		}
	}
}