// let n = 4;
let arr = [1, 3, 2, 4];

//let nge = [n];
let nge = [arr.length];
nge = solve(arr);
console.log(nge);

function solve(arr){   
    nge = [arr.length];
    let st = [];
    
    st.push(arr[arr.length - 1]);
    nge[arr.length - 1] = - 1;
    for(let i = arr.length - 2; i >= 0; i--) {
        while(st.length > 0 && arr[i] >= st[st.length - 1]) {
            st.pop();
        }
        
        if(st.length == 0) {
            nge[i] = -1;
        } else {
            nge[i] = st[st.length - 1];
        }
        
        st.push(arr[i]);
    }
    
    
   return nge;
};





