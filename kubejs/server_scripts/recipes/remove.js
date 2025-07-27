const removebytag = ["allthemodium:teleport_pad"];

ServerEvents.recipes((event) => {
  removebytag.forEach((item) => {
    event.remove({ id: item });
  });
});
