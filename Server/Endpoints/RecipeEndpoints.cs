namespace Server.Endpoints
{
    internal static class RecipeEndpoints
    {
        internal static void MapRecipeEndpoints(this WebApplication app)
        {
            var group = app.MapGroup("api/recipes").WithTags("Recipes");
        }
    }
}
