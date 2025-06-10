using DataContracts.Common.Enums;

namespace DataContracts.Common;

public sealed record Recipe
{
    public required Guid Id { get; init; }
    public required string Name { get; init; }
    public required Category Category { get; init; }
    public required EffortLevel EffortLevel { get; init; }
}
