using DataContracts.Common.Enums;

namespace DataContracts.Recipes;

public sealed record CreateRecipeRequest(string Name, Category Category, EffortLevel EffortLevel);
