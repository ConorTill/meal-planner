using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Mvc;
using Server.Endpoints;

namespace Server;

internal static class ProgramConfiguration
{
    internal static void RegisterServices(this WebApplicationBuilder builder)
    {
        builder.Services.AddHttpLogging();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        builder.Services.ConfigureHttpJsonOptions(options =>
        {
            options.SerializerOptions.Converters.Add(new JsonStringEnumConverter());
            options.SerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
        });
        builder.Services.Configure<JsonOptions>(options =>
            options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter())
        );
    }

    internal static void RegisterMiddleware(this WebApplication app)
    {
        app.UseDefaultFiles();
        app.UseStaticFiles(
            new StaticFileOptions
            {
                OnPrepareResponse = context =>
                {
                    if (
                        context.File.PhysicalPath?.Contains(
                            Path.Combine("wwwroot", "assets"),
                            StringComparison.OrdinalIgnoreCase
                        ) == true
                    )
                    {
                        context.Context.Response.Headers.CacheControl =
                            "public, max-age-31536000, immutable";
                    }
                },
            }
        );

        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpLogging();
        app.UseHttpsRedirection();
        app.UseStatusCodePages();

        app.MapMealPlanEndpoints();

        //app.UseAuthentication();
        //app.UseAuthorization();

        app.MapFallbackToFile(
            "index.html",
            new StaticFileOptions
            {
                OnPrepareResponse = context =>
                {
                    context.Context.Response.Headers.CacheControl = "no-store";
                    context.Context.Response.Headers.Expires = "0";
                },
            }
        );
    }
}
