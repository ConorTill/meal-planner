namespace Server.Endpoints;

internal static class MealPlanEndpoints
{
    internal static void MapMealPlanEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("api/meal-plans").WithTags("Meal Plans").WithOpenApi();

        //group.MapGet("", GetMealPlans).WithSummary("Get a meal plan");
    }

    //private static Ok<GetMealPlanResponse> GetMealPlans()
    //{
    //    return TypedResults.Ok(
    //        new GetMealPlanResponse
    //        {
    //            MealPlanItems =
    //            [
    //                new MealPlanItem
    //                {
    //                    Date = DateOnly.FromDateTime(DateTime.UtcNow),
    //                    Recipe = new Recipe
    //                    {
    //                        Id = Guid.NewGuid(),
    //                        Name = "Cheese and Bean Toastie",
    //                        Category = Category.Main,
    //                        EffortLevel = EffortLevel.Low,
    //                    },
    //                },
    //                new MealPlanItem
    //                {
    //                    Date = DateOnly.FromDateTime(DateTime.UtcNow.AddDays(1)),
    //                    Recipe = new Recipe
    //                    {
    //                        Id = Guid.NewGuid(),
    //                        Name = "Chicken Rice Bowl",
    //                        Category = Category.Main,
    //                        EffortLevel = EffortLevel.Medium,
    //                    },
    //                },
    //                new MealPlanItem
    //                {
    //                    Date = DateOnly.FromDateTime(DateTime.UtcNow.AddDays(2)),
    //                    Recipe = new Recipe
    //                    {
    //                        Id = Guid.NewGuid(),
    //                        Name = "Chickpea Fish",
    //                        Category = Category.Main,
    //                        EffortLevel = EffortLevel.Medium,
    //                    },
    //                },
    //                new MealPlanItem
    //                {
    //                    Date = DateOnly.FromDateTime(DateTime.UtcNow.AddDays(3)),
    //                    Recipe = new Recipe
    //                    {
    //                        Id = Guid.NewGuid(),
    //                        Name = "Chinese Tofu",
    //                        Category = Category.Main,
    //                        EffortLevel = EffortLevel.High,
    //                    },
    //                },
    //                new MealPlanItem
    //                {
    //                    Date = DateOnly.FromDateTime(DateTime.UtcNow.AddDays(4)),
    //                    Recipe = new Recipe
    //                    {
    //                        Id = Guid.NewGuid(),
    //                        Name = "Crispy Shicken",
    //                        Category = Category.Main,
    //                        EffortLevel = EffortLevel.High,
    //                    },
    //                },
    //            ],
    //        }
    //    );
    //}
}
