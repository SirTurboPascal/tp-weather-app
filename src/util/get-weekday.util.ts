export function getWeekday(timestamp: string): string {
	const date = new Date(timestamp);

	return date.toLocaleDateString('en-US', {
		weekday: 'short',
	});
}
