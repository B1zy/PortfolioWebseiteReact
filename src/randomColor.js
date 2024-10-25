// randomColor.js
export const getRandomColorCombination = () => {
    const colors = [
      ['#ff7e5f', '#feb47b'], // Example: Sunset colors
      ['#6a11cb', '#2575fc'], // Example: Purple and blue
      ['#12c2e9', '#c471ed', '#f64f59'], // Example: Pink, purple, blue
      ['#43cea2', '#185a9d'], // Example: Green and blue
      ['#fc00ff', '#00dbde'], // Example: Pink and teal
    ];
    
    // Return a random color combination
    return colors[Math.floor(Math.random() * colors.length)];
  };
  