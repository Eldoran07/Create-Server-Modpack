ServerEvents.recipes((event) => {
  //Ingots

  //Electrum
  event.replaceOutput(
    { input: "immersiveengineering:ingot_electrum" },
    "immersiveengineering:ingot_electrum",
    "createaddition:electrum_ingot"
  );

  event.remove({
    id: "immersiveengineering:smelting/ingot_electrum_from_dust_from_blasting",
  });
  event
    .blasting(
      "createaddition:electrum_ingot",
      "immersiveengineering:dust_electrum"
    )
    .id("eldoran:createlive/unify_electrum_ingot_blasting");

  event.remove({
    id: "immersiveengineering:smelting/ingot_electrum_from_dust",
  });
  event
    .smelting(
      "createaddition:electrum_ingot",
      "immersiveengineering:dust_electrum"
    )
    .id("eldoran:createlive/unify_electrum_ingot_smelting");

  //Ingot to Storage
  event.remove({
    id: "immersiveengineering:crafting/storage_electrum_to_ingot_electrum",
  });
  event
    .shapeless("9x createaddition:electrum_ingot", [
      "immersiveengineering:storage_electrum",
    ])
    .id("eldoran:createlive/unify_electrum_ingot_storage_to_ingot");

  //Storage to Ingot
  event.remove({
    id: "immersiveengineering:crafting/ingot_electrum_to_storage_electrum",
  });
  event
    .shaped("createaddition:electrum_block", ["AAA", "AAA", "AAA"], {
      A: "immersiveengineering:ingot_electrum",
    })
    .id("eldoran:createlive/unify_electrum_ingot_to_storage");

  //Ingot to nugget
  event.remove({
    id: "immersiveengineering:crafting/nugget_electrum_to_ingot_electrum",
  });
  event
    .shapeless("9x createaddition:electrum_nugget", [
      "immersiveengineering:ingot_electrum",
    ])
    .id("eldoran:createlive/unify_electrum_ingot_to_nugget");

  //Nugget to Ingot
  event.remove({
    id: "immersiveengineering:crafting/ingot_electrum_to_nugget_electrum",
  });
  event
    .shaped("createaddition:electrum_ingot", ["AAA", "AAA", "AAA"], {
      A: "immersiveengineering:nugget_electrum",
    })
    .id("eldoran:createlive/unify_electrum_nugget_to_ingot");

  event.remove({ id: "immersiveengineering:alloysmelter/electrum" });
  event
    .custom({
      type: "immersiveengineering:alloy",
      input0: {
        tag: "c:ingots/gold",
      },
      input1: {
        tag: "c:ingots/silver",
      },
      result: {
        basePredicate: {
          item: "createaddition:electrum_ingot",
        },
        count: 2,
      },
    })
    .id("eldoran:createlive/unify_electrum_ingot_alloysmelter");

  event.remove({ id: "immersiveengineering:arcfurnace/alloy_electrum" });
  event
    .custom({
      type: "immersiveengineering:arc_furnace",
      additives: [
        {
          tag: "c:ingots/silver",
        },
      ],
      energy: 51200,
      input: {
        tag: "c:ingots/gold",
      },
      results: [
        {
          basePredicate: {
            item: "createaddition:electrum_ingot",
          },
          count: 2,
        },
      ],
      time: 100,
    })
    .id("eldoran:createlive/unify_electrum_ingot_arcfurnace");

  event.remove({ id: "immersiveengineering:arcfurnace/dust_electrum" });
  event
    .custom({
      type: "immersiveengineering:arc_furnace",
      additives: [],
      energy: 51200,
      input: {
        item: "immersiveengineering:dust_electrum",
      },
      results: [
        {
          basePredicate: {
            item: "createaddition:electrum_ingot",
          },
          count: 2,
        },
      ],
      time: 100,
    })
    .id("eldoran:createlive/unify_electrum_dust_arcfurnace");

  event.custom({
    type: "create:crushing",
    ingredients: [
      {
        tag: "c:ingots/electrum",
      },
    ],
    processing_time: 300,
    results: [
      {
        id: "immersiveengineering:dust_electrum",
      },
    ],
  });



});
