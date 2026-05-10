export function formatDate(timestamp: string): string {
	const date = new Date(timestamp);

	return date.toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'short',
		weekday: 'long',
		year: 'numeric',
	});
}
