# Autoguide - automatic dungeon/trial guides for FFXIV

Autoguide is designed to present short guides for instanced content in Final
Fantasy XIV.

The 'auto' part relies on either [ACT](https://advancedcombattracker.com/) with
the [OverlayPlugin](https://github.com/OverlayPlugin/OverlayPlugin), or
[IINACT](https://www.iinact.com/). It uses these to observe the current
zone, and adjust the content appropriately.

You can view the guide here: https://csmith.github.io/autoguide/?OVERLAY_WS=ws://127.0.0.1:10501/ws.
Adjust the `OVERLAY_WS` parameter if your overlay websocket is on a different
port.

## Contributing guides

Guides are stored as HTML files under the `guides` folder. The filename should
be the numerical zone ID for the instance, e.g. content for
`The Howling Eye (Hard)` would go in `guides/294.html`. The zone ID is shown
in the autoguide header.

At some point there will be some sensible CSS and utilities for use in guides,
but not yet.
