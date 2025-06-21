using System.Text.Json;
using Application.Models.Recipe;
using Application.Ports;
using OpenAI.Chat;

namespace Adapters.RecipeProcessing;

public class RecipeProcessor : IRecipeProcessor
{
    public async Task<Recipe?> GenerateRecipeByUrl(string url)
    {
        const string model = "gpt-4o-mini-search-preview";
        var client = new ChatClient(model, Environment.GetEnvironmentVariable("OPENAI_API_KEY"));

        var responseFormat = ChatResponseFormat.CreateJsonSchemaFormat(
            "recipe_schema",
            BinaryData.FromBytes(
                File.ReadAllBytes(Path.Combine(AppContext.BaseDirectory, "recipe_schema.json"))
            ),
            jsonSchemaIsStrict: true
        );
        var response = await client.CompleteChatAsync(
            [
                $"Extract data from the recipe at this URL: ${url}. For ingredients, put the name of the ingredient in the name field, the unit of measurement in the unit field. If an appropriate value cannot be found for an ingredient field, leave it blank. Do not treat food items (like 'onion' or 'pork sausages') as units. For example, 1 onion finely chopped should be: quantity: 1, unit: null, name: onion, note: finely chopped. Get prep and cook times in minutes.",
            ],
            new ChatCompletionOptions { ResponseFormat = responseFormat }
        );

        Console.Write(response.Value.Content[0].Text);

        return JsonSerializer.Deserialize<Recipe>(
            response.Value.Content[0].Text,
            Serialization.JsonSerializerOptions
        );
    }
}
