using Application.Commands;
using Application.Commands.GenerateRecipe;
using Data;
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
            group.MapGet("{id:guid}", GetRecipe).WithDescription("Get a recipe by ID");
            group.MapPost("", CreateRecipe).WithDescription("Create a recipe");
            group.MapPut("{id:guid}", UpdateRecipe).WithDescription("Update a recipe");
            group.MapPost("import", ImportRecipe).WithDescription("Import a recipe from a URL");
            group.MapPost("{id:guid}/delete", DeleteRecipe).WithDescription("Delete a recipe");
        }

        public static async Task<Ok<GetRecipesResponse>> GetRecipes(
            MealPlannerDbContext dbContext,
            CancellationToken cancellationToken
        )
        {
            var recipes = await dbContext
                .Recipes.Include(e => e.Ingredients)
                .Include(e => e.Nutrition)
                .ToListAsync(cancellationToken);
            return TypedResults.Ok(
                new GetRecipesResponse
                {
                    Recipes = [.. recipes.Select(recipe => recipe.ToDataContract())],
                }
            );
        }

        public static async Task<Results<Ok<GetRecipeResponse>, NotFound>> GetRecipe(
            Guid id,
            MealPlannerDbContext dbContext,
            CancellationToken cancellationToken
        )
        {
            var recipe = await dbContext.Recipes.FirstOrDefaultAsync(
                r => r.Id == id,
                cancellationToken
            );
            if (recipe is null)
            {
                return TypedResults.NotFound();
            }
            return TypedResults.Ok(new GetRecipeResponse(recipe.ToDataContract()));
        }

        public static async Task<Ok<ImportRecipeResponse>> ImportRecipe(
            [FromBody] ImportRecipeRequest request,
            ICommandHandler<GenerateRecipeCommand, Guid> commandHandler,
            CancellationToken cancellationToken
        )
        {
            var result = await commandHandler.HandleAsync(
                new GenerateRecipeCommand(request.Url),
                cancellationToken
            );

            return TypedResults.Ok(new ImportRecipeResponse(result));
        }

        public static async Task<Ok<CreateRecipeResponse>> CreateRecipe(
            [FromBody] CreateRecipeRequest request,
            MealPlannerDbContext dbContext,
            CancellationToken cancellationToken
        )
        {
            //var result = await dbContext.AddAsync(
            //    new Recipe
            //    {
            //        Name = request.Name,
            //        Category = request.Category.MapToEnum<Course>(),
            //        EffortLevel = request.EffortLevel.MapToEnum<Difficulty>(),
            //    },
            //    cancellationToken
            //);
            //await dbContext.SaveChangesAsync(cancellationToken);
            //return TypedResults.Ok(new CreateRecipeResponse(result.Entity.Id));
            return TypedResults.Ok(new CreateRecipeResponse(Guid.NewGuid()));
        }

        public static async Task<Results<Ok, NotFound>> UpdateRecipe(
            Guid id,
            [FromBody] UpdateRecipeRequest request,
            MealPlannerDbContext dbContext,
            CancellationToken cancellationToken
        )
        {
            //var entity = dbContext.Recipes.FirstOrDefault(r => r.Id == id);

            //if (entity is null)
            //{
            //    return TypedResults.NotFound();
            //}

            //dbContext.Entry(entity).CurrentValues.SetValues(request);
            //await dbContext.SaveChangesAsync(cancellationToken);
            return TypedResults.Ok();
        }

        public static async Task<Results<Ok, NotFound>> DeleteRecipe(
            Guid id,
            MealPlannerDbContext dbContext,
            CancellationToken cancellationToken
        )
        {
            var entity = dbContext.Recipes.FirstOrDefault(r => r.Id == id);

            if (entity is null)
            {
                return TypedResults.NotFound();
            }

            dbContext.Recipes.Remove(entity);
            await dbContext.SaveChangesAsync(cancellationToken);
            return TypedResults.Ok();
        }
    }
}
