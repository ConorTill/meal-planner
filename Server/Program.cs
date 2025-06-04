using Server;

var builder = WebApplication.CreateBuilder(args);

builder.RegisterServices();

var app = builder.Build();

app.RegisterMiddleware();

app.Run();
