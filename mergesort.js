var merge=function(array1,array2){
	var mergedResult=[];
	var valToPush;
	while((array1.length > 0) || (array2.length > 0)){
		if ((array1[0] < array2[0]) || (array2.length === 0)){
			valToPush=array1.shift();
		}else if ((array1[0] > array2[0]) ||(array1.length === 0)){
			valToPush=array2.shift();
		}
		mergedResult.push(valToPush) 
	}
return mergedResult;
} 	

function split(wholeArray) {
var firstHalf=wholeArray;
    /* your code here to define the firstHalf and secondHalf arrays */
var secondHalf=firstHalf.splice(Math.round(firstHalf.length/2),firstHalf.length);
    return [firstHalf, secondHalf];
}

function mergeSort(array) {
if(array.length <= 1){return array};
	var arrays = split(array); 
	
		var array1=mergeSort(arrays[0]);
		var array2=mergeSort(arrays[1]);
		return merge(array1, array2); 
}