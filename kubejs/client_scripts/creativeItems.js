//28.07.2025 Eldoran

const creativeItems = [
  "create:creative_motor",
  "create:creative_fluid_tank",
  "create:creative_crate",
  "create:creative_blaze_cake",
  "create_sa:creative_filling_tank",
  "createcasing:creative_cogwheel",
  "create_connected:creative_fluid_vessel",
  "createaddition:creative_energy",
  "immersiveengineering:capacitor_creative",
]; 

ItemEvents.modifyTooltips(event => {
    event.add(creativeItems, Text.red("Diese Item wurde von einem Admin entfernt!"))
})
