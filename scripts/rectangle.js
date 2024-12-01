/**
 * Objective: get width, length of a rectangle. Calculate the area by using the provided formula and then display the area
 * step-1: get width value of the rectangle
 * step-2: added an id in the base input field
 * step-3: use getElementById to access the input field
 * step-4: get value from input field(value is string now)
 *step-5: convert the value to a number using parseFloat() 
 */



 function calculaterectangleArea(){
  // get width value of the reactangle
  const rectangleWidthInput = document.getElementById('rectangle-width')
  const rectangleWidthText = rectangleWidthInput.value;
  const width = parseFloat(rectangleWidthText);
  // console.log(width);
  // get the length value of the rectangle
  const rectangleLengthInput = document.getElementById('rectangle-length');
  const rectangleLengthText = rectangleLengthInput.value;
  const length = parseFloat(rectangleLengthText);
  // console.log(length);
  const area = width * length;
  const rectangleArea = document.getElementById('rectangle-area');
  rectangleArea.innerText = area;
  // console.log(area);
  
  
  
  
}

