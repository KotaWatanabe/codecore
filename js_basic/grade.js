let number = parseInt(process.argv[2]);

if(number < 0 || number >100){
    console.log("Ivalid grade");
}
else if(number <= 49){
    console.log("I , F");
}
else if(number <= 59){
    console.log("C-");
}
else if(number <= 66){
   console.log("C");
}
else if(number <= 72){
    console.log("C+");
}
else if(number <= 85){
    console.log("B");
}
else{
    console.log("A");
}