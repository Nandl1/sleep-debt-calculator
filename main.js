const getSleepHours = (day) => {
    switch(day) {
      case 'monday':
        return 8;
      case 'tuesday': 
        return 9;
      case 'hump-day':
        return 8;
      case 'thursday':
        return 7;
      case 'friday':
        return 2; 
      case 'saturday':
        return 10;
      case 'sunday':
        return 12;
      default:
        return 'Invalid day';
    }
  };
  
  const getActualSleepHours = () => 
    getSleepHours(8)
  +
    getSleepHours ('tuesday')
  +
    getSleepHours('hump-day') 
  +
    getSleepHours('thursday') 
  +
    getSleepHours('friday') 
  +
    getSleepHours('saturday') 
  +
    getSleepHours('sunday');
  
  console.log(getActualSleepHours());
  
  const getIdealSleepHours = () => {
    let idealHours = 9;
    return idealHours * 7;
  }
  console.log(getIdealSleepHours());
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got ' + (actualSleepHours - idealSleepHours) + 'hour(s) more sleep than needed.');
    } else {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + 'hour(s) less sleep than you needed this week. Get some rest.');
    }
  };
  calculateSleepDebt();
