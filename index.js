const saturdayFun = (activity = "roller-skate") => {
    console.log(`This Saturday, I want to ${activity}!`);
    return `This Saturday, I want to ${activity}!`;
  };

  const mondayWork = (activity = "go to the office") => {
    console.log(`This Monday, I will ${activity}.`);
    return `This Monday, I will ${activity}.`;
  };

  function wrapAdjective(star = "*") {
    return function(adjective = "special") {
      return `You are ${star}${adjective}${star}!`
    }
  }

const nicely = wrapAdjective();
console.log(nicely());