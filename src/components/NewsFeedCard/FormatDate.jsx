const FormatDate = function (date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  //find the st/nd/rd/th for the date
  const nth = (d) => {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const formattedDate = new Date(date);
  //fformat date in MMM DD format
  return `${months[formattedDate.getMonth()]} ${formattedDate.getDate()}${nth(
    formattedDate.getDate()
  )}`;
};

export default FormatDate;
