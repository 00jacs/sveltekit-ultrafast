function getFormattedDate(): string {
	return new Date().toISOString();
}

export const logger = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	info(...data: any[]): void {
		console.log(`\x1b[36m%s\x1b[0m`, `[info] [${getFormattedDate()}]: `, ...data);
	},
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	success(...data: any[]): void {
		console.log(`\x1b[32m%s\x1b[0m`, `[success] [${getFormattedDate()}]:`, ...data);
	},
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	warn(...data: any[]): void {
		console.warn(`\x1b[33m%s\x1b[0m`, `[warning] [${getFormattedDate()}]:`, ...data);
	},
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	error(...data: any[]): void {
		console.error(`\x1b[31m%s\x1b[0m`, `[error] [${getFormattedDate()}]:`, ...data);
	}
};

export default logger;
