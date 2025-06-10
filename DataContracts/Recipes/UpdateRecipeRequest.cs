using DataContracts.Common.Enums;

namespace DataContracts.Recipes;

public sealed record UpdateRecipeRequest(string Name, Category Category, EffortLevel EffortLevel);
