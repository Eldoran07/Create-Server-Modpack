ItemEvents.modifyTooltips(event => {
    event.add(['allthemodium:allthemodium_ingot', 'allthemodium:vibranium_ingot', 'allthemodium:unobtainium_ingot'], Text.red("Kann mit der Create Mod hergestellt werden!"));
    event.add(["minecraft:netherite_ingot"], Text.red("Kann mit der Create Mod günstiger hergestellt werden!"));
    event.add(['allthemodium:teleport_pad'], Text.green("Shift-Rechtsklick zum Teleportieren in die Mining Dimension!"));
})