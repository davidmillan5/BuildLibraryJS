class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  set isCheckedOut2(newCheckedOut) {
    this._isCheckedOut2 = newCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  getAverageRating() {
    let ratingsSum = this.ratings.reduce(
      (currentSum, rating) => currentSum + rating,
      0
    );
    const lengthOfArray = this.ratings.length;
    return ratingsSum / lengthOfArray;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  addRating(newRating) {
    this._ratings.push(newRating);
  }
}
