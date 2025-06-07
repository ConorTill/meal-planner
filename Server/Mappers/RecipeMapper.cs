using DataContracts.Common;
using DataContracts.Common.Enums;
using EntityCategory = Data.Entities.Enums.Category;
using EntityEffortLevel = Data.Entities.Enums.EffortLevel;
using EntityRecipe = Data.Entities.Recipe;

namespace Server.Mappers;

internal static class RecipeMapper
{
    internal static Recipe ToDataContract(this EntityRecipe recipe)
    {
        return new Recipe
        {
            Name = recipe.Name,
            Category = recipe.Category.MapToEnum<Category>(),
            EffortLevel = recipe.EffortLevel.MapToEnum<EffortLevel>(),
        };
    }

    internal static EntityRecipe ToApplication(this Recipe recipe) =>
        new EntityRecipe
        {
            Name = recipe.Name,
            Category = recipe.Category.MapToEnum<EntityCategory>(),
            EffortLevel = recipe.EffortLevel.MapToEnum<EntityEffortLevel>(),
        };

    //private static Category ToDataContract(this EntityCategory category) => category switch
    //{
    //    EntityCategory.Starter => Category.Starter,
    //    EntityCategory.Beverage => Category.Beverage,
    //    EntityCategory.Main => Category.Main,
    //    EntityCategory.Lunch => Category.Lunch,
    //    EntityCategory.Salad => Category.Salad,
    //    EntityCategory.Side => Category.Side,
    //    EntityCategory.Dessert => Category.Dessert,
    //    _ => throw new ArgumentException(nameof(category))
    //};

    //private static EffortLevel ToDataContract(this EntityEffortLevel effortLevel) => effortLevel switch
    //{
    //    EntityEffortLevel.Low => EffortLevel.Low,
    //    EntityEffortLevel.Medium => EffortLevel.Medium,
    //    EntityEffortLevel.High => EffortLevel.High,
    //    _ => throw new ArgumentException(nameof(effortLevel))
    //};

    internal static REnum MapToEnum<REnum>(this Enum inEnum)
        where REnum : struct, Enum
    {
        return Enum.Parse<REnum>(inEnum.ToString());
    }
}
