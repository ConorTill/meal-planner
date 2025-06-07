using DataContracts.Common;

namespace DataContracts.Recipes;

public record GetRecipesResponse
{
    public required Recipe[] Recipes { get; init; }
}
