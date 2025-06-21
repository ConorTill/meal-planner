namespace DataContracts.Common.Recipe;

public sealed record Nutrition
{
    public required Guid Id { get; init; }

    public double? Calories { get; init; }
    public string? CaloriesUnit { get; init; }

    public double? Fat { get; init; }
    public string? FatUnit { get; init; }

    public double? SaturatedFat { get; init; }
    public string? SaturatedFatUnit { get; init; }

    public double? Carbohydrates { get; init; }
    public string? CarbohydratesUnit { get; init; }

    public double? Sugars { get; init; }
    public string? SugarsUnit { get; init; }

    public double? Fibre { get; init; }
    public string? FibreUnit { get; init; }

    public double? Protein { get; init; }
    public string? ProteinUnit { get; init; }

    public double? Salt { get; init; }
    public string? SaltUnit { get; init; }
}
