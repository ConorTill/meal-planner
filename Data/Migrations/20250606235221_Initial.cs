using System;
using Application.Models.Recipe.Enums;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder
                .AlterDatabase()
                .Annotation(
                    "Npgsql:Enum:category",
                    "beverage,dessert,lunch,main,salad,side,starter"
                )
                .Annotation("Npgsql:Enum:effortLevel", "high,low,medium");

            migrationBuilder.CreateTable(
                name: "Recipes",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Category = table.Column<Course>(type: "category", nullable: false),
                    EffortLevel = table.Column<Difficulty>(
                        type: "\"effortLevel\"",
                        nullable: false
                    ),
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Recipes", x => x.Id);
                }
            );
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(name: "Recipes");
        }
    }
}
