function getFormattedDate(): string {
	return new Date().toISOString();
}

type LogData = unknown[];

function colorize(color: string, ...data: LogData): string {
	const colorCode = {
		blue: '\x1b[36m',
		green: '\x1b[32m',
		yellow: '\x1b[33m',
		red: '\x1b[31m',
	}[color];

	return `${colorCode}${data.join(' ')}\x1b[0m`;
}

export const logger = {
	info(...data: LogData): void {
		console.log(colorize('blue', `[info] [${getFormattedDate()}]:`, ...data));
	},
	success(...data: LogData): void {
		console.log(colorize('green', `[success] [${getFormattedDate()}]:`, ...data));
	},
	warn(...data: LogData): void {
		console.warn(colorize('yellow', `[warning] [${getFormattedDate()}]:`, ...data));
	},
	error(...data: LogData): void {
		console.error(colorize('red', `[error] [${getFormattedDate()}]:`, ...data));
	}
};

export default logger;
