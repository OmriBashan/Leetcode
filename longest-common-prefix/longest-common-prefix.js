var longestCommonPrefix = function(strs) {

    // Edge cases
    if (strs.length === 0){
         return "";
    }
    if (strs.length === 1){
         return strs[0];
    }
    
	// Declare initial variables and shift to the next element in the strs array
    let prefix = strs[0];
    let plength = strs[0].length;
    strs.shift();

	// Loop through the array of strings given
    for (const element of strs) {
	
	// if the initial prefix doesn't even have the same length nor value
        while(prefix !== element.substring(0,plength)){
		
			// Keep decrementing the prefix and length by 1
            prefix = prefix.substring(0, (plength - 1));
            plength -= 1;
			
			// If we reach 0, just return nothing
            if (plength == 0){
                return "";
            }
      }
    }
    return prefix;
};