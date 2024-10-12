document.addEventListener('DOMContentLoaded', async () => {
    const url = new URL(window.location.href);

    async function loadZone(data) {
        document.getElementById('location').innerText = data.zoneName;
        document.getElementById('locationId').innerText = `#${data.zoneID}`;

        const res = await fetch(`guides/${data.zoneID}.json`)
            .then((r) => r.json())
            .catch(() => {
            });
        if (res && res.guide && res.guide.length > 0) {
            // TODO: Handle links nicely (put them in the footer with icons?)
            document.getElementById('location').innerText = res.name;
            document.getElementById('content').innerHTML = formatGuide(res.guide, res.style);
            document.getElementById('edit').innerHTML = `<a href="https://github.com/csmith/autoguide/edit/master/guides/${data.zoneID}.html">Suggest a change for this guide on GitHub</a>`
            maximise();
        } else {
            document.getElementById('content').innerHTML = `No guide for this zone. If you think we should have one please <a href="https://github.com/csmith/autoguide/issues/new?title=Missing%20zone:%20${data.zoneName}&body=Zone%20ID:%20${data.zoneID}">raise an issue</a>.`;
            document.getElementById('edit').innerHTML = ``
            minimise();
        }
    }

    if (url.searchParams.has('zoneID')) {
        await loadZone({
            zoneID: url.searchParams.get('zoneID'),
            zoneName: 'Unknown zone',
        });
    } else {
        if (!url.searchParams.has("OVERLAY_WS")) {
            // We don't want the value url-encoded because the library doesn't parse
            // query parameters properly (sigh), so we set a placeholder then
            // replace it with the raw string.
            url.searchParams.set("OVERLAY_WS", "WSplaceholderWS");
            document.location.href = url.href.replace("WSplaceholderWS", "ws://127.0.0.1:10501/ws");
            return;
        }

        addOverlayListener('ChangeZone', loadZone);
        startOverlayEvents()
    }
});

const prefixes = new Map([
    ['HEALERS:', 'healer-note'],
    ['DPS:', 'dps-note'],
    ['TANKS:', 'tank-note'],
    ['IMPORTANT:', 'important-note']
])

const spellRegex = new RegExp(`\\[\\[(.*?)]]`, 'g');

function formatGuide(guide, style) {
    let res = '';

    if (style && style.trim().length > 0) {
        res += `<style>${style}</style>`;
    }

    guide.forEach((encounter) => {
        res += `<h3>${encounter[0]}</h3><ul>`;

        encounter.slice(1).forEach((step) => {
            let cls = '';
            prefixes.forEach((v, k) => {
                if (step.startsWith(k)) {
                    cls = v;
                    step = step.substring(k.length);
                }
            });

            step = step.replaceAll(spellRegex, (_, s) => `<span class="spell">${s}</span>`);

            res += `<li class="${cls}">${step}</li>`;
        });

        res += `</ul>`;
    });

    return res;
}

function minimise() {
    document.body.className = 'missing';
}

function maximise() {
    document.body.className = 'found';
}