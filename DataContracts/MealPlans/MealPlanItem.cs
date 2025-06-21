using DataContracts.Common.Recipe;

namespace DataContracts.MealPlans;

public sealed record MealPlanItem
{
    public required DateOnly Date { get; init; }
    public required Recipe Recipe { get; init; }
}
