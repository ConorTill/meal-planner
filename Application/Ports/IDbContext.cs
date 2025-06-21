using Application.Models.Recipe;
using Microsoft.EntityFrameworkCore;

namespace Application.Ports;

public interface IDbContext
{
    DbSet<Recipe> Recipes { get; }
    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}
