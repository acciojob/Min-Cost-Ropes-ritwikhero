function mincost(arr)
{ 
//write your code here
// return the min cost
	    arr.sort((a, b) => a - b); // Sort the array in non-decreasing order

    let totalCost = 0;

    while (arr.length > 1) {
        // Take the two shortest ropes
        let rope1 = arr.shift();
        let rope2 = arr.shift();

        // Connect them together and add their lengths to totalCost
        let combinedLength = rope1 + rope2;
        totalCost += combinedLength;

        // Replace the two shortest ropes with their combined length
        arr.push(combinedLength);

        // Re-sort the array to maintain non-decreasing order
        arr.sort((a, b) => a - b);
    }

    return totalCost;
  
}

module.exports=mincost;
