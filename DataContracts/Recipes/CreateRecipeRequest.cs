using DataContracts.Common.Recipe.Enums;

namespace DataContracts.Recipes;

public sealed record CreateRecipeRequest(string Title, Course Course, Difficulty Difficulty);
