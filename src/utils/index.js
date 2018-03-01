const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);
const stripWordFromArrayOfString = (word = '', array = [''], key = 0) => {
  if (array[0][key]) {
	    return array.map((a) => {
	    	a[key] = a[key].replace(word, '');
	    	return a;
	  });
  }
};

export {
  capitalizeFirstLetter,
  stripWordFromArrayOfString,
};
