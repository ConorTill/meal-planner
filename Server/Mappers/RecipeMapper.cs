using DataContracts.Common.Recipe;
using DataContracts.Common.Recipe.Enums;
using ApplicationCourse = Application.Models.Recipe.Enums.Course;
using ApplicationDifficulty = Application.Models.Recipe.Enums.Difficulty;
using ApplicationIngredient = Application.Models.Recipe.Ingredient;
using ApplicationNutrition = Application.Models.Recipe.Nutrition;
using ApplicationRecipe = Application.Models.Recipe.Recipe;

namespace Server.Mappers;

internal static class RecipeMapper
{
    internal static Recipe ToDataContract(this ApplicationRecipe recipe) =>
        new()
        {
            Id = recipe.Id,
            Title = recipe.Title,
            Description = recipe.Description,
            Ingredients = [.. recipe.Ingredients.Select(ingredient => ingredient.ToDataContract())],
            Instructions = recipe.Instructions,
            Cuisine = recipe.Cuisine,
            Course = recipe.Course.MapToEnum<Course>(),
            Difficulty = recipe.Difficulty.MapToEnum<Difficulty>(),
            PreparationTime = recipe.PreparationTime,
            CookingTime = recipe.CookingTime,
            ImageUrl = recipe.ImageUrl,
            Servings = recipe.Servings,
            Nutrition = recipe.Nutrition?.ToDataContract(),
        };

    private static Ingredient ToDataContract(this ApplicationIngredient ingredient) =>
        new()
        {
            Id = ingredient.Id,
            Name = ingredient.Name,
            Quantity = ingredient.Quantity,
            Unit = ingredient.Unit,
            Note = ingredient.Note,
        };

    private static Nutrition? ToDataContract(this ApplicationNutrition? nutrition) =>
        nutrition == null
            ? null
            : new()
            {
                Id = nutrition.Id,
                Calories = nutrition.Calories,
                CaloriesUnit = nutrition.CaloriesUnit,
                Fat = nutrition.Fat,
                FatUnit = nutrition.FatUnit,
                SaturatedFat = nutrition.SaturatedFat,
                SaturatedFatUnit = nutrition.SaturatedFatUnit,
                Carbohydrates = nutrition.Carbohydrates,
                CarbohydratesUnit = nutrition.CarbohydratesUnit,
                Sugars = nutrition.Sugars,
                SugarsUnit = nutrition.SugarsUnit,
                Fibre = nutrition.Fibre,
                FibreUnit = nutrition.FibreUnit,
                Protein = nutrition.Protein,
                ProteinUnit = nutrition.ProteinUnit,
                Salt = nutrition.Salt,
                SaltUnit = nutrition.SaltUnit,
            };

    internal static ApplicationRecipe ToApplication(this Recipe recipe) =>
        new()
        {
            Id = recipe.Id,
            Title = recipe.Title,
            Description = recipe.Description,
            Ingredients = [.. recipe.Ingredients.Select(ingredient => ingredient.ToApplication())],
            Instructions = recipe.Instructions,
            Cuisine = recipe.Cuisine,
            Course = recipe.Course.MapToEnum<ApplicationCourse>(),
            Difficulty = recipe.Difficulty.MapToEnum<ApplicationDifficulty>(),
            PreparationTime = recipe.PreparationTime,
            CookingTime = recipe.CookingTime,
            ImageUrl = recipe.ImageUrl,
            Servings = recipe.Servings,
            Nutrition = recipe.Nutrition?.ToApplication(),
        };

    private static ApplicationIngredient ToApplication(this Ingredient ingredient) =>
        new()
        {
            Name = ingredient.Name,
            Quantity = ingredient.Quantity,
            Unit = ingredient.Unit,
            Note = ingredient.Note,
        };

    private static ApplicationNutrition? ToApplication(this Nutrition? nutrition) =>
        nutrition == null
            ? null
            : new()
            {
                Id = nutrition.Id,
                Calories = nutrition.Calories,
                CaloriesUnit = nutrition.CaloriesUnit,
                Fat = nutrition.Fat,
                FatUnit = nutrition.FatUnit,
                SaturatedFat = nutrition.SaturatedFat,
                SaturatedFatUnit = nutrition.SaturatedFatUnit,
                Carbohydrates = nutrition.Carbohydrates,
                CarbohydratesUnit = nutrition.CarbohydratesUnit,
                Sugars = nutrition.Sugars,
                SugarsUnit = nutrition.SugarsUnit,
                Fibre = nutrition.Fibre,
                FibreUnit = nutrition.FibreUnit,
                Protein = nutrition.Protein,
                ProteinUnit = nutrition.ProteinUnit,
                Salt = nutrition.Salt,
                SaltUnit = nutrition.SaltUnit,
            };

    internal static REnum? MapToEnum<REnum>(this Enum? inEnum)
        where REnum : struct, Enum
    {
        return inEnum == null ? null : Enum.Parse<REnum>(inEnum.ToString());
    }
}
