export interface Device {
    id: number;
    // vendorIcon: {icon: string};
    name: string;
    vendor: string;
    ip: string;
    port: number;
    user: string;
    password: string;
    // connectionStatus: string;
    // lastBackup: string;
}

export interface Device2 {
    id: number,
    name: String,
    vendor: String,
    ip: String,
    port: number,
    user: String,
    password: String
}
