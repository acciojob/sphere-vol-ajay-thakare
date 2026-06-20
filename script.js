function volume_sphere(event) {
    event.preventDefault();

    const radius = document.getElementById('radius');
    const volume = document.getElementById('volume');

    const r = Number(radius.value);

    if (!isNaN(r) && r > 0) {
        const vol = (4 / 3) * Math.PI * Math.pow(r, 3);

        volume.value = vol.toFixed(4);
    } else {
        volume.value = '';
    }
}

window.onload = function () {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};