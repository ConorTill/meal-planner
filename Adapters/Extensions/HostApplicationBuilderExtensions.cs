using Adapters.RecipeProcessing;
using Application.Ports;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Adapters.Extensions;

public static class HostApplicationBuilderExtensions
{
    public static void AddAdapters(this IHostApplicationBuilder builder)
    {
        builder.Services.AddScoped<IRecipeProcessor, RecipeProcessor>();
    }
}
