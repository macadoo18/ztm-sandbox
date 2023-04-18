// unsortedArr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

// const sortedResult = unsortedArr.sort((a, b) => a - b).forEach((num, i, arr) => {
// 	let multiples = [];

// 	if (num === arr[i + 1] || num === arr[i - 1]) {
// 		num.forEach()
// 	}
// });


// function findTwo(arr, sum) {
	
// }

// create permutator function with inputArr parameter
const permutator = (inputArr) => {
	// create empty array 'result'
	let result = [];
  
	// create permute function to loop thru given array argument
	// and push empty array to result array when given array is empty
	const permute = (arr, m = []) => {
		if (arr.length === 0) {
			console.log(result.push(m));
		} else {
			// for loop to iterate over given array argument
			for (let i = 0; i < arr.length; i++) {
				// track current and next variables
				// current = copy of given array
				// next = removing each element from current variable
				let curr = arr.slice();
				let next = curr.splice(i, 1);
				// recursively call permute at end of for loop
				// with copy of curr variable argument
				// and concatenating empty array argument with next variable
				// 	- (each element of given array)
				// console.log(m.concat(next));
				permute(curr.slice(), m.concat(next));
			}
		}
   }
  
   permute(inputArr);
  
   console.log(result);
  }

//   permutator([1,2,3]);







const permutatorFunc = (inputArr, sum) => {
	let permResults = [];
	let result = [];

	const permutate = (arr, perms = []) => {
		if (arr.length === 0) {
			permResults.push(perms);
		} else {
			for (let i = 0; i < arr.length; i++) {
				let curr = arr.slice();
				let next = curr.splice(i, 1);  

				permutate(curr.slice(), perms.concat(next));
			}
		}
	}

	permutate(inputArr);

	permResults.forEach(permArr => {
		if (permArr[0] + permArr[1] === sum) {
			result.push(permArr[0], permArr[1]);
		}
	});

	return result.slice(0,2);
}

console.log(permutatorFunc([1,2,3], 4));




const convertColor = (color) => {
	const hexRegEx = /^#([A-F0-9]{3}){1,2}$/igm;
	const rgbRegEx = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;

	if (color.match(hexRegEx)) {
		const r = parseInt(color.slice(1, 3), 16);
		const g = parseInt(color.slice(3, 5), 16);
		const b = parseInt(color.slice(5, 7), 16);

		console.log(`rgb(${r}, ${g}, ${b})`);
	} else if (color.match(rgbRegEx)) {
		const hex1 = Number(color.split(' ').join('').match(/(\d{1,3}),(\d{1,3}),(\d{1,3})/)[1]).toString(16);
		const hex2 = Number(color.split(' ').join('').match(/(\d{1,3}),(\d{1,3}),(\d{1,3})/)[2]).toString(16);
		const hex3 = Number(color.split(' ').join('').match(/(\d{1,3}),(\d{1,3}),(\d{1,3})/)[3]).toString(16);

		console.log(`#${hex1}${hex2}${hex3}`);
	} else {
		return 'Not a valid color format';
	}
}

convertColor('#ffffff');