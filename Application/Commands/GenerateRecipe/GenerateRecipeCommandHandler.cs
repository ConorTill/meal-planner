using Application.Ports;

namespace Application.Commands.GenerateRecipe;

public sealed class GenerateRecipeCommandHandler(
    IRecipeProcessor recipeProcessor,
    IDbContext dbContext
) : ICommandHandler<GenerateRecipeCommand, Guid>
{
    public async Task<Guid> HandleAsync(
        GenerateRecipeCommand command,
        CancellationToken cancellationToken
    )
    {
        var recipe = await recipeProcessor.GenerateRecipeByUrl(command.Url);
        if (recipe is null)
        {
            throw new InvalidOperationException("Recipe generation failed.");
        }

        await dbContext.Recipes.AddAsync(recipe, cancellationToken);
        await dbContext.SaveChangesAsync(cancellationToken);
        return recipe.Id;
    }
}
