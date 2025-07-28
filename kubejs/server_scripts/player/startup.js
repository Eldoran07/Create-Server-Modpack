PlayerEvents.loggedIn((event) => {
  if (!event.player.stages.has("first_login")) {
    event.player.stages.add("first_login");
    event.player.tell(
      Text.blue("Willkommen auf dem Create Server von Eldoran!")
    );
    event.player.tell(Text.red("Bitte beachte die Regeln auf dem Server!"));
    event.player.tell(
      Text.red(
        "Bei Fragen schreibe in den Discord oder kontaktiere mich direkt."
      )
    );
    event.player.tell(Text.gold("Viel Spaß"));

    event.player.give("16x cooked_beef");
  }
});
