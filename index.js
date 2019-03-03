#!/usr/bin/env node

const si = require('systeminformation');
const EOL = require('os').EOL; // Get End of Line for current OS

function log(message, count=1) {
    [...Array(count).keys()].forEach(x => process.stdout.write(message));
}

function getBatteryInfo() {
    return si.battery((info) => info);
}

(async function displayBatteryInfo() {
    const {
        percent,
        ischarging,
        timeremaining
    } = await getBatteryInfo();
    log(EOL);
    log(`🔋  Charge Remaining: ${percent}%`);
    log(EOL, 2);
    /*
        If battery is 100% charged and charger is connected, then
        this will still show charging "NO" since the laptop is now
        running on AC power and not battery power.
    */
    log(`🔌  Charging: ${ischarging ? "YES ⚡" : "NO ❌"}`);
    log(EOL, 2);
    const hours = Math.floor(timeremaining / 60);
    const minutes = timeremaining - (hrs * 60);
    log("⏲️  Time remaining: ");
    log((timeremaining != -1)
        ? `${hours}h ${minutes}m`
        : `Not available`
    );
    log(EOL, 2);
})();