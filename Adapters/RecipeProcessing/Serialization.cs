using System.Text.Json;
using System.Text.Json.Serialization;

namespace Adapters.RecipeProcessing;

internal static class Serialization
{
    internal static JsonSerializerOptions JsonSerializerOptions =>
        new JsonSerializerOptions().Configure();

    internal static JsonSerializerOptions Configure(this JsonSerializerOptions options)
    {
        options.PropertyNameCaseInsensitive = true;
        options.Converters.Add(new JsonStringEnumConverter());
        return options;
    }
}
