// randomColor.js
export function getRandomColorCombination() {
  // Should return an array of two color values
  return [
    `#${Math.floor(Math.random()*16777215).toString(16)}`,
    `#${Math.floor(Math.random()*16777215).toString(16)}`
  ];
}
