

export function convertTime(timeInMinutes : number):string {
  const COUNT_MINUTES_IN_HOUR = 60;
  const hours = Math.trunc(timeInMinutes / COUNT_MINUTES_IN_HOUR);
  const minutes = timeInMinutes - hours * COUNT_MINUTES_IN_HOUR;

  return (`${hours}h ${minutes}m`);
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
