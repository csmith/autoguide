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

Guides are stored as JSON files under the `guides` folder. The filename should
be the numerical zone ID for the instance, e.g. content for
`The Howling Eye (Hard)` would go in `guides/294.json`. The zone ID is shown
in the autoguide header.

The `guides` element is interpreted as follows:

- Each encounter (boss fight or trash) is a top-level array
- The first item in the array is the title of the encounter
- Everything else is a single step in the guide
- To add callouts, prefix the line with one of:
  - `HEALERS:` for healer callouts
  - `DPS:` for DPS callouts
  - `TANKS:` for tank callouts
  - `IMPORTANT:` for general critical info (use sparingly!)
- To highlight names of spells or other at-a-glance-info, wrap them in `[[double square brackets]]`

Guides can contain arbitrary HTML, and a `style` entry can be included to add
custom CSS if required (see `944.json` for an example).

## Disclaimer

FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.
Screenshots, game text, etc © SQUARE ENIX.

Use of third-party software is at your own risk. Software mentioned here is
not recommended or endorsed by the authors of autoguide.
