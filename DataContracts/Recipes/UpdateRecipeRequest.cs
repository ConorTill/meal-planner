using DataContracts.Common.Recipe.Enums;

namespace DataContracts.Recipes;

public sealed record UpdateRecipeRequest(string Title, Course Course, Difficulty Difficulty);
