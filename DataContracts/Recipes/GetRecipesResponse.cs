using DataContracts.Common.Recipe;

namespace DataContracts.Recipes;

public record GetRecipesResponse
{
    public required Recipe[] Recipes { get; init; }
}
