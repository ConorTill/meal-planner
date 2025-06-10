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
            Id = recipe.Id,
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

    internal static REnum MapToEnum<REnum>(this Enum inEnum)
        where REnum : struct, Enum
    {
        return Enum.Parse<REnum>(inEnum.ToString());
    }
}
