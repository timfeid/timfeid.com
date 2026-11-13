const format = new Intl.DateTimeFormat('en-US', {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	timeZone: 'America/New_York',
});

export function postDate(unixTimestamp: number): string {
	return format.format(new Date(unixTimestamp * 1000));
}

export function postDateTime(unixTimestamp: number): string {
	return new Date(unixTimestamp * 1000).toISOString();
}
