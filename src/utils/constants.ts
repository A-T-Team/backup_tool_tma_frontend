import cisco from "../assets/cisco_icon.svg";
import arista from "../assets/arista_icon.svg";
import dell from "../assets/dell_icon.svg";
import hp from "../assets/hp_icon.svg";

export const headerLabels = ["DEVICE NAME", "IP ADDRESS", "VENDOR", "STATUS", "LAST BACKUP"];
export const defaultDevice = {
    id: '111',
    vendorIcon: {cisco},
    deviceName: 'defaultDevice',
    ipAddress: '111.111.111.111',
    vendor: 'defaultVendor',
    connectionStatus: 'connected',
    lastBackup: 'never',
}

export const ip = "127.0.0.1";
export const port = "8080";

export const vendorIconSet = new Map([
    ["arista", arista],
    ["cisco", cisco],
    ["dell", dell],
    ["hp", hp]
]);

export const vendorsLabels =["Arista", "Cisco", "Dell", "HP"];
