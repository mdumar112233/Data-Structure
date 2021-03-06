let numbers = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];
// const target = 37;

function binarySearch(numbers, target){
    let start = 0;
    let end = numbers.length -1;

    while(start <= end){
        let mid = Math.floor((start + end)/2);
        if(numbers[mid] === target){
            return mid;
        }
        if(numbers[mid] < target){
            start = mid + 1;
        }
        if(numbers[mid] > target){
            end = mid -1;
        }
    }
    return -1;
}

const index = binarySearch(numbers, 37);
console.log(index);


