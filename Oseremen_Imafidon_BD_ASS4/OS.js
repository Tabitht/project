const os = require('os');
const fs = require('fs')

const file = fs.createWriteStream('./public/os_result.md');

const arch = os.arch();
const uptime = os.uptime();
const FormattedUptime = formatUptime(uptime)
const homedir = os.homedir();

file.write(arch);
file.write(FormattedUptime);
file.write(homedir);

function formatUptime(uptime) {
    const days = Math.floor(uptime / (3600 * 24));
    const hours = Math.floor(uptime % (3600 * 24) / 3600);
    const minutes = Math.floor(uptime % 36000 / 60);
    const seconds = Math.floor(uptime % 60);

    return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}
