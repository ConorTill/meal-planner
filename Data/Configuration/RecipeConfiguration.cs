using Application.Models.Recipe;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Configuration;

internal sealed class RecipeConfiguration : IEntityTypeConfiguration<Recipe>
{
    public void Configure(EntityTypeBuilder<Recipe> builder)
    {
        builder.HasMany(e => e.Ingredients).WithOne().IsRequired();
        builder.HasOne(e => e.Nutrition).WithOne().HasForeignKey<Nutrition>();
    }
}
