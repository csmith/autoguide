# Autoguide - automatic dungeon/trial guides for FFXIV

Autoguide is designed to present short guides for instanced content in Final
Fantasy XIV.

The 'auto' part relies on either [ACT](https://advancedcombattracker.com/) with
the [OverlayPlugin](https://github.com/OverlayPlugin/OverlayPlugin), or
[IINACT](https://www.iinact.com/). It uses these to observe the current
zone, and adjust the content appropriately.

You can view the guide here: https://csmith.github.io/autoguide/. If your
overlay plugin is listening on a different port you can specify the `OVERLAY_WS`
parameter explicitly like so: https://csmith.github.io/autoguide/?OVERLAY_WS=ws://127.0.0.1:10501/ws

If you're testing, or not using the automatic functionality, you can set the
displayed zone using a `zoneID` query parameter:
https://csmith.github.io/autoguide/?zoneID=294. This will disable the websocket
functionality.

## Contributing guides

Guides are stored as HTML files under the `guides` folder. The filename should
be the numerical zone ID for the instance, e.g. content for
`The Howling Eye (Hard)` would go in `guides/294.html`. The zone ID is shown
in the autoguide header.

Guides should follow these rules:

- Sections (bosses, phases) should use `<h3>` headings
- Instructions should generally be in an `<ul>`
- Spell names or other information that needs to be easily scannable should be
  wrapped in a `<span class="spell">`
- Callouts can be made by applying the `healer-note`, `tank-note` or
  `important-note` class to a container. This will add a border and icon.

## Disclaimer

FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.
Screenshots, game text, etc © SQUARE ENIX.

Use of third-party software is at your own risk. Software mentioned here is
not recommended or endorsed by the authors of autoguide.
