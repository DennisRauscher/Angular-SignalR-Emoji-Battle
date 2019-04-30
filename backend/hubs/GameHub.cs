using System;
using System.Linq;
using System.Threading.Tasks;
using emojidefender;
using Microsoft.AspNetCore.SignalR;

public class GameHub : Hub
{
	public static int MAX_PLAYER_NUM = 100;
	public PlayerRepository _pr;
	public GameHub(PlayerRepository pr)
	{
		this._pr = pr;
	}

	public override Task OnConnectedAsync()
	{
		if (this._pr.players.Count < MAX_PLAYER_NUM)
		{
			Random rand = new Random();

			Player p = new Player();
			p.ConnectionId = Context.ConnectionId;
			p.Name = "Player" + (this._pr.players.Count + 1);
			p.Color = rand.Next() * 0xffffff;
			this._pr.players.Add(p);
			Clients.Caller.SendAsync("SetPlayer", p);
			this.UpdatePlayers();
		}

		return base.OnConnectedAsync();
	}

	public override Task OnDisconnectedAsync(Exception exception)
	{
		Player p = this._pr.players.Where(_p => _p.ConnectionId == Context.ConnectionId).First();
		this._pr.players = this._pr.players.Where(_p => _p.ConnectionId != Context.ConnectionId).ToList();
		this.QuitSearch(p);
		this.UpdatePlayers();

		return base.OnDisconnectedAsync(exception);
	}

	public async Task EnterSearch()
	{
		Player p = this._pr.players.Where(_p => _p.ConnectionId == Context.ConnectionId).First();

		if (this._pr.searchingPlayers.Count > 0)
		{
			Player enemy = this._pr.searchingPlayers.First();
			this._pr.searchingPlayers = this._pr.searchingPlayers.Where(_p => _p.ConnectionId != enemy.ConnectionId).ToList();
			//Start a match
			Game game = new Game(enemy, p);
			this._pr.games.Add(game);
			await game.StartGame(this);
			return;
		}

		if (this._pr.searchingPlayers.IndexOf(p) == -1)
		{
			this._pr.searchingPlayers.Add(p);
		}
	}

	public void SetChoice(int choice) // 0, 1 or 2
	{
		Player p = this._pr.players.Where(_p => _p.ConnectionId == Context.ConnectionId).First();
		Game g = this.GetGameByPlayer(p);
		g.SetChoice(this, p, choice);
	}

	private void QuitSearch(Player p)
	{
		if (this._pr.searchingPlayers.IndexOf(p) != -1)
		{
			this._pr.searchingPlayers = this._pr.searchingPlayers.Where(_p => _p.ConnectionId != p.ConnectionId).ToList();
		}
	}

	private void UpdatePlayers()
	{
		Clients.All.SendAsync("UpdatePlayers", this._pr.players.Count);
	}

	private Game GetGameByPlayer(Player p)
	{
		return this._pr.games.Where(g => g.playerA.ConnectionId == p.ConnectionId || g.playerB.ConnectionId == p.ConnectionId).FirstOrDefault();
	}
}
