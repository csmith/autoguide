document.addEventListener('DOMContentLoaded', () => {
    addOverlayListener('ChangeZone', async (data) => {
        console.log(`Change zone`, data);

        document.getElementById('location').innerText = data.zoneName;
        document.getElementById('locationId').innerText = `#${data.zoneID}`;

        const res = await fetch(`guides/${data.zoneID}.html`)
        if (res.ok) {
            document.getElementById('content').innerHTML = await res.text();
        } else {
            document.getElementById('content').innerHTML = "No guide for here yet :(";
        }
    });

    startOverlayEvents()
});
