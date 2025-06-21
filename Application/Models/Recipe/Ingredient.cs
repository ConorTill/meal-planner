namespace Application.Models.Recipe;

public sealed record Ingredient
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public required string Name { get; init; }
    public double? Quantity { get; init; }
    public string? Unit { get; init; }
    public string? Note { get; init; }
}
