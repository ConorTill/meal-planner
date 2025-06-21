using System;
using Application.Models.Recipe.Enums;
using Data.Entities.Enums;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    /// <inheritdoc />
    public partial class RecipeGeneration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(name: "Category", table: "Recipes");

            migrationBuilder.DropColumn(name: "EffortLevel", table: "Recipes");

            migrationBuilder.RenameColumn(name: "Name", table: "Recipes", newName: "Title");

            migrationBuilder
                .AlterDatabase()
                .Annotation("Npgsql:Enum:course", "appetizer,beverage,dessert,main,snack")
                .Annotation("Npgsql:Enum:difficulty", "easy,hard,medium")
                .OldAnnotation(
                    "Npgsql:Enum:category",
                    "beverage,dessert,lunch,main,salad,side,starter"
                )
                .OldAnnotation("Npgsql:Enum:effortLevel", "high,low,medium");

            migrationBuilder.AddColumn<int>(
                name: "CookingTime",
                table: "Recipes",
                type: "integer",
                nullable: true
            );

            migrationBuilder.AddColumn<Course>(
                name: "Course",
                table: "Recipes",
                type: "course",
                nullable: true
            );

            migrationBuilder.AddColumn<string>(
                name: "Cuisine",
                table: "Recipes",
                type: "text",
                nullable: true
            );

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Recipes",
                type: "text",
                nullable: false,
                defaultValue: ""
            );

            migrationBuilder.AddColumn<Difficulty>(
                name: "Difficulty",
                table: "Recipes",
                type: "difficulty",
                nullable: true
            );

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "Recipes",
                type: "text",
                nullable: true
            );

            migrationBuilder.AddColumn<string[]>(
                name: "Instructions",
                table: "Recipes",
                type: "text[]",
                nullable: false,
                defaultValue: new string[0]
            );

            migrationBuilder.AddColumn<int>(
                name: "PreparationTime",
                table: "Recipes",
                type: "integer",
                nullable: true
            );

            migrationBuilder.AddColumn<int>(
                name: "Servings",
                table: "Recipes",
                type: "integer",
                nullable: true
            );

            migrationBuilder.CreateTable(
                name: "Ingredient",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Quantity = table.Column<double>(type: "double precision", nullable: true),
                    Unit = table.Column<string>(type: "text", nullable: true),
                    Note = table.Column<string>(type: "text", nullable: true),
                    RecipeId = table.Column<Guid>(type: "uuid", nullable: false),
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ingredient", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Ingredient_Recipes_RecipeId",
                        column: x => x.RecipeId,
                        principalTable: "Recipes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                }
            );

            migrationBuilder.CreateTable(
                name: "Nutrition",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Calories = table.Column<double>(type: "double precision", nullable: true),
                    CaloriesUnit = table.Column<string>(type: "text", nullable: true),
                    Fat = table.Column<double>(type: "double precision", nullable: true),
                    FatUnit = table.Column<string>(type: "text", nullable: true),
                    SaturatedFat = table.Column<double>(type: "double precision", nullable: true),
                    SaturatedFatUnit = table.Column<string>(type: "text", nullable: true),
                    Carbohydrates = table.Column<double>(type: "double precision", nullable: true),
                    CarbohydratesUnit = table.Column<string>(type: "text", nullable: true),
                    Sugars = table.Column<double>(type: "double precision", nullable: true),
                    SugarsUnit = table.Column<string>(type: "text", nullable: true),
                    Fibre = table.Column<double>(type: "double precision", nullable: true),
                    FibreUnit = table.Column<string>(type: "text", nullable: true),
                    Protein = table.Column<double>(type: "double precision", nullable: true),
                    ProteinUnit = table.Column<string>(type: "text", nullable: true),
                    Salt = table.Column<double>(type: "double precision", nullable: true),
                    SaltUnit = table.Column<string>(type: "text", nullable: true),
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Nutrition", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Nutrition_Recipes_Id",
                        column: x => x.Id,
                        principalTable: "Recipes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                }
            );

            migrationBuilder.CreateIndex(
                name: "IX_Ingredient_RecipeId",
                table: "Ingredient",
                column: "RecipeId"
            );
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(name: "Ingredient");

            migrationBuilder.DropTable(name: "Nutrition");

            migrationBuilder.DropColumn(name: "CookingTime", table: "Recipes");

            migrationBuilder.DropColumn(name: "Course", table: "Recipes");

            migrationBuilder.DropColumn(name: "Cuisine", table: "Recipes");

            migrationBuilder.DropColumn(name: "Description", table: "Recipes");

            migrationBuilder.DropColumn(name: "Difficulty", table: "Recipes");

            migrationBuilder.DropColumn(name: "ImageUrl", table: "Recipes");

            migrationBuilder.DropColumn(name: "Instructions", table: "Recipes");

            migrationBuilder.DropColumn(name: "PreparationTime", table: "Recipes");

            migrationBuilder.DropColumn(name: "Servings", table: "Recipes");

            migrationBuilder.RenameColumn(name: "Title", table: "Recipes", newName: "Name");

            migrationBuilder
                .AlterDatabase()
                .Annotation(
                    "Npgsql:Enum:category",
                    "beverage,dessert,lunch,main,salad,side,starter"
                )
                .Annotation("Npgsql:Enum:effortLevel", "high,low,medium")
                .OldAnnotation("Npgsql:Enum:course", "appetizer,beverage,dessert,main,snack")
                .OldAnnotation("Npgsql:Enum:difficulty", "easy,hard,medium");

            migrationBuilder.AddColumn<Category>(
                name: "Category",
                table: "Recipes",
                type: "category",
                nullable: true,
                defaultValue: "dessert"
            );

            migrationBuilder.AddColumn<EffortLevel>(
                name: "EffortLevel",
                table: "Recipes",
                type: "\"effortLevel\"",
                nullable: true,
                defaultValue: "low"
            );
        }
    }
}
