/* javascript array */

let names = ['John', 'Mark', 'Jane']; //initialize array
console.log("initial array", names);

names[0] = 'Jon';  // change the first element
console.log("change the first element", names);

names.push('Mary');  // add an element to the end
console.log("add an element to the end", names);	

names.pop();  // remove the last element
console.log("remove the last element", names);

names.shift();  // remove the first element	
console.log("remove the first element", names)

names.unshift("Biplob");  // add an element to the beginning
console.log("add an element to the beginning", names);

// names.indexOf("Biplob"); // find the index number of an element
console.log("find the index number of an element", names.indexOf("Biplob"));

let slice_arr =  names.slice(0, 1)
console.log("slice", slice_arr);

let sort_arr = [2, 4, 1, 6, 3, 5,9,11,79,89,100,34];
let sort_arr_sorted = sort_arr.sort();
console.log("after sorting the array ", sort_arr_sorted)

let proper_sort = sort_arr.sort(function (a, b) {
    return a - b;
})

console.log(proper_sort)