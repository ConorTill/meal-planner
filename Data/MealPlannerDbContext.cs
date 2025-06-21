using Application.Models.Recipe;
using Application.Ports;
using Data.Configuration;
using Microsoft.EntityFrameworkCore;

namespace Data;

public sealed class MealPlannerDbContext(DbContextOptions<MealPlannerDbContext> options)
    : DbContext(options),
        IDbContext
{
    public DbSet<Recipe> Recipes { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(RecipeConfiguration).Assembly);
    }
}
