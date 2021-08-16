export function randomColor(text: string): string {
	var hash = 0;
	if (text.length === 0) return "0";
	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
		hash = hash & hash;
	}
	var rgb = [0, 0, 0];
	for (let i = 0; i < 3; i++) {
		var value = (hash >> (i * 8)) & 255;
		rgb[i] = value;
	}
	return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}
