import icon from "../assets/cisco_icon.svg";

export const headerLabels = ["DEVICE NAME", "IP ADDRESS", "VENDOR", "STATUS", "LAST BACKUP"];
export const defaultDevice = {
    id: '111',
    vendorIcon: {icon},
    deviceName: 'defaultDevice',
    ipAddress: '111.111.111.111',
    vendor: 'defaultVendor',
    connectionStatus: 'connected',
    lastBackup: 'never',
}