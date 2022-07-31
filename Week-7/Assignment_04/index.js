let str = '{[()]}';
let st = [];

for(let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    if(ch == '(' || ch == '{' || ch == '[') {
        st.push(ch);
    } else if(ch == ')') {
        let val =  handleClosing(st, '(');
        if(val == false) {
            console.log(val);
            return;
        }
    } else if(ch == '}') {
        let val = handleClosing(st, '{');
        if(val == false) {
            console.log(val);
            return;
        }
    } else if(ch == ']') {
        let val = handleClosing(st, '[');
        if(val == false) {
            console.log(val);
            return;
        }
    }
}

if(st.length == 0) {
    console.log(true);
} else {
    console.log(false);
}

function handleClosing(st, corresoch) { 
    if(st.length == 0) {
        return false;
    } else if(st[st.length - 1] != corresoch) {
        return false;
    } else {
        st.pop();
        return true;
    }
};
