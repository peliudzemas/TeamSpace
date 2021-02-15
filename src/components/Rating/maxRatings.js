import rest from "../../db.json";

export class Ratings {
  static numberOneRating(best, id2) {
    const restlen = Object.keys(rest.restaurants.restaurantList).length;
    if (best == null) best = 6;
    let sum = 0;
    let reviews_sum = 0;
    let current_rating;
    let max_rating = -1;
    let max_rating_sum;
    let max_rating_reviewers;
    let index;
    let index2;
    index2 = id2;

    for (let i = 0; i < restlen; i++) {
      const restaurant = rest.restaurants.restaurantList[i];
      const reviews_length = Object.keys(restaurant.reviews).length;
      reviews_sum += reviews_length;

      for (let j = 0; j < reviews_length; j++) {
        sum += restaurant.reviews[j].rating;
        current_rating = sum / reviews_length;
        if (current_rating > max_rating && current_rating < best) {
          max_rating = current_rating;
          max_rating_sum = sum;
          max_rating_reviewers = reviews_length;
          index = i;
        }
      }
      sum = 0;
    }
    // if there werent any reviews, the number cant be null and still has to be shown
    if (reviews_sum === 0) max_rating = 0;

    //if function is running 1st time, there isn't second best rating yet
    if (index2 == null) {
      //passing 1 so that this recursion would end
      index2 = this.numberOneRating(max_rating, 1)[3];
    }

    return [
      max_rating.toFixed(1),
      max_rating_sum,
      max_rating_reviewers,
      index,
      index2,
    ];
  }
  static numberTwoRating() {
    let no1_rating = Ratings.numberOneRating()[0];
    let no2_rating = Ratings.numberOneRating(no1_rating)[0];
    let max_rating_sum = Ratings.numberOneRating(no1_rating)[1];
    let max_rating_reviewers = Ratings.numberOneRating(no1_rating)[2];
    let index = Ratings.numberOneRating(no1_rating)[3];

    return [no2_rating, max_rating_sum, max_rating_reviewers, index];
  }
  static finalRating(old_sum, old_reviewers, new_value) {
    let final_rating = (old_sum + new_value) / (old_reviewers + 1);
    return final_rating.toFixed(1);
  }
  static formatHours(hours) {
    let hour_minute =
      hours.substring(0, 2) + ":00 " + hours.substring(3, 7) + ":00";
    return hour_minute;
  }

  static countRating(i) {
    let restaurantList = rest.restaurants.restaurantList;
    let index = i;
    let rating = Number(
      (
        Object.values(restaurantList[i].reviews)
          .map((x) => x.rating)
          .reduce((a, b) => a + b, 0) / restaurantList[i].reviews.length
      ).toFixed(1)
    );

    if (!rating) {
      rating = 0.0;
    }

    let ratingSum = Object.values(restaurantList[i].reviews)
      .map((x) => x.rating)
      .reduce((a, b) => a + b, 0);

    let ratingReviewers = restaurantList[i].reviews.length;

    return [rating.toFixed(1), ratingSum, ratingReviewers, index];
  }

  static showHours(i) {
    const restaurant = rest.restaurants.restaurantList[i];
    let hours = restaurant.openingHours[0].hours;
    hours = hours.substring(0, 2) + ":00 " + hours.substring(3, 7) + ":00";
    return hours;
  }

  static calculateRating(score, reviewsCount) {
    const rating = score.toFixed(1);
    const ratingSum = score * reviewsCount;
    const ratingReviewers = reviewsCount;

    return [rating, ratingSum, ratingReviewers];
  }
}
