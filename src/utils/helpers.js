export const range = (start, stop, step = 1) => {
	return Array.from(
		{ length: (stop - start) / step + 1 },
		(value, i) => start + i * step
	);
};
