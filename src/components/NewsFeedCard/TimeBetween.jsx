const TimeBetween = (date1, date2) => {
  const oneDay = 1000 * 60 * 60 * 24;
  const oneHour = 1000 * 60 * 60;
  const oneMinute = 1000 * 60;
  const postTime = new Date(date2).getTime();
  const difference = date1 - postTime;
  const daysBetween = Math.round(difference / oneDay);
  const hoursBetween = Math.round(difference / oneHour);
  const minutesBetween = Math.round(difference / oneMinute);
  if (daysBetween > 1) {
    return daysBetween + "d";
  } else if (hoursBetween > 1) {
    return hoursBetween + "h";
  } else if (minutesBetween >= 0) {
    return minutesBetween + "min";
  }
};

export default TimeBetween;
