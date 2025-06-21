using DataContracts.Common.Recipe.Enums;

namespace DataContracts.Common.Recipe;

public sealed record Recipe
{
    public required Guid Id { get; init; }
    public required string Title { get; init; }
    public required string Description { get; init; }
    public required IReadOnlyCollection<Ingredient> Ingredients { get; init; }
    public required string[] Instructions { get; init; }
    public string? Cuisine { get; init; }
    public Course? Course { get; init; }
    public Difficulty? Difficulty { get; init; }
    public int? PreparationTime { get; init; }
    public int? CookingTime { get; init; }
    public string? ImageUrl { get; init; }
    public int? Servings { get; init; }
    public Nutrition? Nutrition { get; init; }
}
