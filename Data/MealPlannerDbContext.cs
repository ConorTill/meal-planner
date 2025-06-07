using Data.Configuration;
using Data.Entities;
using Data.Entities.Enums;
using Microsoft.EntityFrameworkCore;

namespace Data;

public sealed class MealPlannerDbContext(DbContextOptions<MealPlannerDbContext> options)
    : DbContext(options)
{
    public DbSet<Recipe> Recipes { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(RecipeConfiguration).Assembly);
    }
}
