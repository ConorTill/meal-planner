using Application.Models.Recipe;

namespace Application.Ports;

public interface IRecipeProcessor
{
    public Task<Recipe?> GenerateRecipeByUrl(string url);
}
