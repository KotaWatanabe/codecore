function fillRectangle(width, height, char) {
    // width will be how many elements are in an array
    // height will me the number of nested arrays
    let row = [];
    for (let i = 0; i < width; i++) {
      row.push(char);
    }
  
    let rectangle = [];
    for (let i = 0; i < height; i++) {
      rectangle.push(row);
    }
  
    return rectangle;
  }
  
  const rect = fillRectangle(5,3, '🔥');
  console.log(rect);
  
  function rectangleToString(arr) {
    let string = '';
    for (const element of arr) {
      for (const character of element) {
        string += character;
      }
      string += '\n';
    }
    return string;
  }
  
  const rect_to_string = rectangleToString(fillRectangle(5,3, '🔥'))
  console.log(rect_to_string)