function  find_chars(string1, string2){
	// split both strings
	var str1 = string1.split("");
	var str2 = string2.split("");
	
	var result = '';
	var found; 
	
	for(var j=0; j < str1.length; ++j){
		found = false;
		for(var k=0; k < str2.length; ++k){
			if (str2[k].toLowerCase() === str1[j].toLowerCase()){
				found = true;
			}
		}
		if (found) { result += str1[j]; }
	}
	
	//console.log(result);
	return result;
	
}

// function to rotate an array
function rotate(data, len){
	console.log(data);
	
	var result = [];
	
	for(var k=data.length - len; k < data.length; ++k){
			result.push(data[k]);
        }
	for(var j=0; j < data.length - len; ++j){
		result.push(data[j]);
	}
	
	//console.log(result);
	return result;
}

// Function to compute LCM
function lcm(data){
	var max = getMaxValue(data);		// get max value
	
	//console.log(max);
	var status;
	while(!status)                       /* Always true. */
	  {
		status = true
		for(var k=0; k < data.length; ++k){
			
			if (max % data[k] !== 0){
				status = false;
				//console.log(status);
			}
		}
		if (status){
			break;
			
			return false;
		}
		++max;
	  }
	  console.log(max);
	  
	  
}

// Function to get the maximum value from array
function getMaxValue(data){
	if (data.length < 1){
		return false;
	}
	
	max = data[0];		// assign max to element 1
	
	// loop over the array
	for(var k=1; k <= data.length; ++k){
		if (data[k] > max){
			max = data[k];
		}
	}
	
	return max;
	
}

// Function to remove duplicates from array
function compact(data){
	var result, i, j, current, found;
    result = [];
    for (i = 0; i < data.length; i++) {
        current = data[i];
        found = false;
        for (j = 0; !found && (j < data.length); j++) {
            if (current === data[j]) {
                if (i === j) {
                    result.push(current);
                }
                found = true;
            }
        }
    }
	//console.log(result);
    return result;
}