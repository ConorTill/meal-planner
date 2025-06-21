using Application.Commands;
using Application.Commands.GenerateRecipe;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Application.Extensions;

public static class HostApplicationBuilderExtensions
{
    public static void AddHandlers(this IHostApplicationBuilder builder)
    {
        builder.Services.AddScoped<
            ICommandHandler<GenerateRecipeCommand, Guid>,
            GenerateRecipeCommandHandler
        >();
    }
}
