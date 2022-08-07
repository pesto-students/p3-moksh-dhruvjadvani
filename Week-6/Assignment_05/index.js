const pair = function findPair(arr, size, diff) {
    arr.sort();
    let i = 0;
    let j = 1;

    while(i < arr.length && j < arr.length) {
        if (arr[j] - arr[i] == diff) {
            return 1;
        }
        else if(arr[j] - arr[i] < diff) {
            j++;
        }
        else {
            i++;
        }
    }

    return 0;
}

let arr = [1, 8, 30, 40, 100];
let size = arr.length;
let n = 60;
pair(arr, size, n);
