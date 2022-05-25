export class Log {
    private constructor();
    getTimeStamp(): string;
    debug(...args: any[]): void;
    info(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
    setLogLevel(logLevel: any): void;
    logLevel: any;
}
