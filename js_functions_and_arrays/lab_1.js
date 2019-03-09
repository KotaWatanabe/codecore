// const inp = process.argv[2];
// let reversedWord = '';

// function reverse(s){
//     let reversedWord ='';
//     for(i = s.length-1; i >= 0; i -=1){
//         reversedWord += s[i];
//     }
//     return reversedWord;
// }
// console.log(reverse("Watanabe"));

// function reverse(string){
//     return string.split('').reverse().join('')
// }
// console.log



function reverse(string){
    let result ='';
    for(let i = string.length-1; i >= 0; i -= 1){
        result += string[i];
    }
    return result;
}
console.log(reverse("hello"));










