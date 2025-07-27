ServerEvents.recipes((event) => {
  event.custom({
    type: "create:mechanical_crafting",
    accept_mirrored: false,
    category: "misc",
    key: {
      A: {
        tag: "c:plates/gold",
      },
      B: {
        item: "immersiveengineering:light_engineering",
      },
      C: {
        item: "minecraft:ender_pearl",
      },
      D: {
        item: "create:precision_mechanism",
      },
    },
    pattern: ["AAAAA", "ABCBA", "ACDCA", "ABCBA", "AAAAA"],
    result: {
      count: 1,
      id: "allthemodium:teleport_pad",
    },
    show_notification: false,
  });
});
