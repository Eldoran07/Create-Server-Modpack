RecipeViewerEvents.removeEntries("item", (event) => {
  item_remove.forEach((item) => {
    event.remove(item);
  });
});

ItemEvents.modifyTooltips((event) => {
    event.add(
      item_remove,
      Text.red("Dieses Item wurde von Modpack entfernt! Es ist wertlos.")
    );
});
