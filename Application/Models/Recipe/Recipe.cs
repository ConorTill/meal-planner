using Application.Models.Recipe.Enums;

namespace Application.Models.Recipe;

public sealed record Recipe
{
    public Guid Id { get; init; } = Guid.NewGuid();
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
