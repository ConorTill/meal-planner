namespace Application.Commands.GenerateRecipe;

public sealed record GenerateRecipeCommand(string Url) : ICommand<Guid>;
