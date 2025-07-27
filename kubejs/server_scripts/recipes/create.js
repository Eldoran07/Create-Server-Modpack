ServerEvents.recipes((event) => {
  // createMechanicalCrafting(event, )

  event.custom({
    type: "create:sequenced_assembly",
    ingredient: {
      tag: "c:ingots/gold",
    },
    loops: 2,
    results: [
      {
        id: "minecraft:netherite_ingot",
      }
      
    ],
    sequence: [
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "minecraft:gold_ingot",
          },
          {
            item: "minecraft:netherite_scrap",
          },
        ],
        results: [
          {
            id: "minecraft:gold_ingot",
          },
        ],
      }
    ],
    transitional_item: {
      id: "minecraft:gold_ingot",
    },
  });
});
