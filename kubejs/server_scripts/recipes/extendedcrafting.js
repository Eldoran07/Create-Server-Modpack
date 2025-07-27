ServerEvents.recipes((event) => {
  //Ender Ingot
  event
    .custom({
      type: "create:mixing",
      heat_requirement: "heated",
      ingredients: [
        {
          item: "minecraft:ender_pearl",
        },
        {
          item: "minecraft:iron_ingot",
        },
      ],
      results: [
        {
          id: "extendedcrafting:ender_ingot",
        },
      ],
    })
    .id("eldoran:ender_ingot");
});
