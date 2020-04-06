function Place(location, landmarks, when, notes, activity) {
  this.location = location;
  this.landmarks = landmarks;
  this.when = when;
  this.notes = notes;
  this.activity = activity;
}

Place.prototype.bestTime = function () {
  return this.location + "during the" + this.when
}