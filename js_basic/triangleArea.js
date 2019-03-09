let side1 = process.argv[2];
let side2 = process.argv[3];
let side3 = process.argv[4];

if(side1 === 0 || side2 ===0 || side3 === 0){
    console.log("impossible Triangle!");
}
else{
    let perimeter = side1 + side2 + side3;
    let temp = (side1 + side2 + side3)/2;
    let area = Math.sqrt(temp*((temp-side1)*(temp-side2)*(temp-side3)));
    console.log("Perimeter:" + perimeter);
    console.log("Area:" + area);
}



// let perimeter =(side1 + side2 + side3)/2;
// console.log(`Perimeter:${perimeter}`);

// let area = Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
// console.log(`Area:${area}`);

// let side4 = 10;
// let side5 = 0;
// let side6 = 0;

// let perimeter2 =(side4 + side5 + side6)/2;
// console.log(`Perimeter:${perimeter2}`);

// let area2 = Math.sqrt(perimeter2*((perimeter2-side4)*(perimeter2-side5)*(perimeter2-side6)));
// console.log(`Area:${area2}`);