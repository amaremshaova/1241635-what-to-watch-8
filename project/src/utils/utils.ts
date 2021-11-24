

export function convertTime(timeInMinutes : number):string {
  const COUNT_MINUTES_IN_HOUR = 60;
  const hours = Math.trunc(timeInMinutes / COUNT_MINUTES_IN_HOUR);
  const minutes = timeInMinutes - hours * COUNT_MINUTES_IN_HOUR;

  return (`${hours}h ${minutes}m`);
}

export function convertTimeElapsed(timeInSeconds: number):string {
  const TIME_CONST = 60;
  const hours = Math.floor(timeInSeconds / TIME_CONST / TIME_CONST);
  const minutes = Math.floor(timeInSeconds / TIME_CONST) - (hours * TIME_CONST);
  const seconds = timeInSeconds % TIME_CONST;
  let hoursString = String(hours), secondsString = String(seconds), minutesString = String(minutes);

  if (hours >=0 && hours <=9){
    hoursString = `0${hours}`;
  }
  if (minutes>=0 && minutes <=9){
    minutesString = `0${hours}`;
  }
  if (minutes >=0 && minutes <=9){
    secondsString = `0${hours}`;
  }

  if (hours === 0){
    return `-${minutes}:${seconds}`;
  }
  return `-${hoursString}:${minutesString}:${secondsString}`;
}

export function getLevel(rating: number): string {

  if (rating === 10){
    return 'Awesome';
  }

  if (rating < 10 && rating >= 8){
    return 'Very good';
  }

  if (rating < 8 && rating >= 5){
    return 'Good';
  }

  if (rating <5 && rating >= 3){
    return 'Normal';
  }

  return 'Bad';
}
