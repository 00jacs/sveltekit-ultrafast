function getFormattedDate(): string {
	return new Date().toISOString();
}

type LogData = unknown[];

export const logger = {
	info(...data: LogData): void {
		console.log(`\x1b[36m%s\x1b[0m`, `[info] [${getFormattedDate()}]: `, ...data);
	},
	success(...data: LogData): void {
		console.log(`\x1b[32m%s\x1b[0m`, `[success] [${getFormattedDate()}]:`, ...data);
	},
	warn(...data: LogData): void {
		console.warn(`\x1b[33m%s\x1b[0m`, `[warning] [${getFormattedDate()}]:`, ...data);
	},
	error(...data: LogData): void {
		console.error(`\x1b[31m%s\x1b[0m`, `[error] [${getFormattedDate()}]:`, ...data);
	}
};

export default logger;
