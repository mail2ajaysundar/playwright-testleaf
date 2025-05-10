let num=[2,5,1,7,4,5,8,7]

//for loop and if condition to find duplicate values in an array

for(let i=0;i<num.length;i++){  //this is to iterate through the array
    for(let j=i+1;j<num.length;j++){ //this is to compare the elements of the array
        if(num[i]===num[j]){ //if the elements are equal, then it is a duplicate value
            console.log(num[i]) //print the duplicate value
        }
    }
}