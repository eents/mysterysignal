function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    // DEBUG CLOCK
    // document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;

    // UPDATE PROGRAMS


    // CHANNEL 00

    if (h >= 0) {
        document.getElementById('channel-00-content').src = "../programs/divine-geometry/divine-geometry-min.html";
    } else {
        document.getElementById('channel-00-content').src = "../programs/no-signal/no-signal-min.html";
    }



    setTimeout(startTime, 60000);
}