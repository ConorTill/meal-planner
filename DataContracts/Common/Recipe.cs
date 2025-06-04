using DataContracts.Common.Enums;

namespace DataContracts.Common;

public sealed record Recipe
{
    public required string Name { get; set; }
    public required Category Category { get; set; }
    public required EffortLevel EffortLevel { get; set; }
}
