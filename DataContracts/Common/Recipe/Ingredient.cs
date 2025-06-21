namespace DataContracts.Common.Recipe;

public sealed record Ingredient
{
    public required Guid Id { get; init; }
    public required string Name { get; init; }
    public double? Quantity { get; init; }
    public string? Unit { get; init; }
    public string? Note { get; init; }
    public Guid? RecipeId { get; init; }
}
