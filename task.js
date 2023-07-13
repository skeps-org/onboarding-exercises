var isValid = function(s) {
    let map = {'(' : ')', '[': ']', '{':'}'};
    let stack = [];
    for(let ch of s){
        if(map[ch]){
            stack.push(map[ch]);
        }
        else if(stack.length > 0 && stack[stack.length-1] == ch){
            stack.pop();
        }
        else return false;
    }
    return stack.length == 0;
};

var str1 = "()()((())){}{()}";
var str2 = "()()((()))(]{}{()}";
var str3 = "()()((())]){}{()}";

console.log(str1, isValid(str1));
console.log(str2, isValid(str2));
console.log(str3, isValid(str3));