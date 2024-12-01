function getInputFieldById(inputFieldId){
  const inputField = document.getElementById(inputFieldId);
  const inputFieldText = inputField.value;
  const input = parseFloat(inputFieldText);
  return input;
}

function setTextElementById(elementId, area){
  const element = document.getElementById(elementId);
  element.innerText = area;
}

// Triangle Area
function calculateTriangleArea(){
  const base = getInputFieldById('triangle-base');
  const height = getInputFieldById('triangle-height');
  const area = 0.5 * base * height;
  setTextElementById('triangle-area', area);
}

// rectangle area
function calculaterectangleArea(){
  const width = getInputFieldById('rectangle-width');
  const length = getInputFieldById('rectangle-length');
  const area = width * length;
  setTextElementById('rectangle-area', area);
}

// parallelogram area
function calculateParallelogramArea(){
  const base = getInputFieldById('parallelogram-base');
  const height = getInputFieldById('parallelogram-height');
  const area = base * height;
  setTextElementById('parallelogram-area', area);
}

// rhombus area
function calculateRhombusArea(){
  const diameter1 = getInputFieldById('rhombus-diameter-1');
  const diameter2 = getInputFieldById('rhombus-diameter-2');
  const area = 0.5 * diameter1 * diameter2;
  // console.log(area);
  setTextElementById('rhombus-area', area);
}
// pentagon area 
function calculatePentagonArea(){
  const perimeter = getInputFieldById('pentagon-perimeter');
  const apothem = getInputFieldById('pentagon-apothem');
  const area = 0.5 * perimeter * apothem;
  setTextElementById('pentagon-area', area);
}

// ellipse area
function calculateEllipseArea(){
  const largerRadius = getInputFieldById('ellipse-larger-radius');
  const smallerRadius = getInputFieldById('ellipse-smaller-radius');
  const area = 3.14 * largerRadius * smallerRadius;
  setTextElementById('ellipse-area', area);
}