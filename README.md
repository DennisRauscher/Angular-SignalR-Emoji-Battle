# Emoji Battle | Angular 7 + SignalR (Asp.NET Core)

Emoji Battle is a Webbased realtime "Rock Paper Scissors" game where you can play versus a random opponent or versus a random AI.

## Rules Of The Game

The rules are simple:
👻 beats 👽
👽 beats 🤖
🤖 beats 👻

If both players choose the same the game will be replayed.

[You can try it here. :)](http://www.dropwizard.io/1.0.2/docs/)

## What was used?

Angular 7 and [Nebular](https://github.com/akveo/nebular) for the frontend & Asp.NET Core and SignalR for the backend.

### Prerequisites
```
- Angular CLI
- Dotnet Core 2.1
- Editor
```

### Getting Started

To install this project on your own maschine for further development you can simply clone this repository and follow these steps:

Run the Server:

```
> cd backend
> dotnet run
```

Run the Client:

```
> cd frontend
> ng build --watch
```

The client will automaticaly build to the **/wwwroot** folder of the backend which is served by the Asp.NET Core Server usualy under the port 5000


## Authors

* **Dennis Rauscher** - *Initial work* - [GitHub](https://github.com/DennisRauscher)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details