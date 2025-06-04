using DataContracts.Common;

namespace DataContracts.MealPlans;

public sealed record GetMealPlanResponse
{
    public required IReadOnlyList<MealPlanItem> MealPlanItems { get; set; }
}
