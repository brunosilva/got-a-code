export function barCodeValidator(value: string, type: string) {
	if (value.length !== 13) return false;

	const fullArray = value.split("");
	const array = value.split("", 12);
	const totalOdd = array.reduce((acc: number, current: string, index: number) => {
		let accumulator = acc;
		if (index % 2 === 0) accumulator = acc + Number(current);
		return accumulator;
	}, 0);

	const totalPairs = array.reduce((acc: number, current: string, index: number) => {
		let accumulator = acc;
		if (index % 2 !== 0) accumulator = acc + Number(current);
		return accumulator;
	}, 0);

	const isValid =
		Number(10 - ((totalPairs * 3 + totalOdd) % 10)) === Number(fullArray[12]);
	return isValid;
}
