﻿using Data;
using Data.Entities;
using Data.Entities.Enums;
using DataContracts.Recipes;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Mappers;

namespace Server.Endpoints
{
    internal static class RecipeEndpoints
    {
        internal static void MapRecipeEndpoints(this WebApplication app)
        {
            var group = app.MapGroup("api/recipes").WithTags("Recipes");
            group.MapGet("", GetRecipes).WithDescription("Get all recipes");
            group.MapPost("", CreateRecipe).WithDescription("Create a recipe");
        }

        public static async Task<Ok<GetRecipesResponse>> GetRecipes(
            MealPlannerDbContext dbContext,
            CancellationToken cancellationToken
        )
        {
            var recipes = await dbContext.Recipes.ToListAsync(cancellationToken);
            return TypedResults.Ok(
                new GetRecipesResponse
                {
                    Recipes = [.. recipes.Select(recipe => recipe.ToDataContract())],
                }
            );
        }

        public static async Task<Ok<CreateRecipeResponse>> CreateRecipe(
            [FromBody] CreateRecipeRequest request,
            MealPlannerDbContext dbContext,
            CancellationToken cancellationToken
        )
        {
            var result = await dbContext.AddAsync(
                new Recipe
                {
                    Name = request.Name,
                    Category = request.Category.MapToEnum<Category>(),
                    EffortLevel = request.EffortLevel.MapToEnum<EffortLevel>(),
                },
                cancellationToken
            );
            await dbContext.SaveChangesAsync(cancellationToken);
            return TypedResults.Ok(new CreateRecipeResponse(result.Entity.Id));
        }
    }
}
