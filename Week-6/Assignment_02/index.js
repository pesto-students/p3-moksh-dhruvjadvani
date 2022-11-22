/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    
    let output = new Array(n).fill(0).map(() => new Array(n).fill(0))
    
    let count = 0;
    let size = n * n;
    

    let minCol = 0; // left
    let maxCol = n - 1; // right
    let minRow = 0; // top
    let maxRow = n - 1; //bottom
    
    while(count < size){
        
        //going left
        for(let i = minCol; i <= maxCol; i++){
            count++;
            output[minRow][i] = count;
        }
        minRow++;
                
        // going down
        for(let i = minRow; i <= maxRow; i++){
            count++;
            output[i][maxCol] = count;
        }
        maxCol--;
        
        //going left
        for(let i = maxCol; i >= minCol; i--){
            count++;
            output[maxRow][i] = count;
        }
        maxRow--;
        
        //going up
        for(let i = maxRow; i >= minRow; i--){
            count++;
            output[i][minCol] = count;
        }
        minCol++;
    }
    
    return output;
    
};
    
