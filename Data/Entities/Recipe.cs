using Data.Entities.Enums;

namespace Data.Entities;

public sealed record Recipe
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public required string Name { get; set; }
    public required Category Category { get; set; }
    public required EffortLevel EffortLevel { get; set; }
}
