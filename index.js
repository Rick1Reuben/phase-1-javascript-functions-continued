// coded my solution here

// Function to return a string specifying an activity for Saturday
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function expression to return a string specifying an activity for Monday
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // Function to wrap an adjective in a highlight
  function wrapAdjective(symbol = "*") {
    return function(adjective) {
      return `You are ${symbol}${adjective}${symbol}!`;
    };
  }
  
  // Exporting the functions if needed
  module.exports = { saturdayFun, mondayWork, wrapAdjective };
  