function toArray(objects){
    const result =[];
    for(let key in objects){
        result.push([key,objects[key]])
    }
    return result
}

const obj = {a:1, b:2,c:3,d:4}
console.log(toArray(obj));