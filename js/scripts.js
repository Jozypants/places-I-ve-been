// Business Logic


function Place(location, landmarks, when, notes, activity) {
  this.location = location;
  this.landmarks = landmarks;
  this.when = when;
  this.notes = notes;
  this.activity = activity;
}

Place.prototype.bestTime = function () {
  return "The best time to visit " + this.location + " is during the " + this.when
}

var portland = new Place("Portland", "Rose Garden", "Summer", "be sure to check out Powell's Books", "Hiking");

var alaska = new Place("St.Petersberge", "docks", "summer", "Check out their yearly viking festival", "shopping")



//UI logic
$(document).ready(function(){
  $('#portland').click(function (event) {
    event.preventDefault();
    $("#portland").text(portland.location + " is beautiful in the " + portland.when + ". Stop by the " + portland.landmarks + " and  " + portland.notes + " after going " + portland.activity + ".");
  });
  $('#PNW').click(function(event) {
    event.preventDefault();
    $("#PNW").text(alaska.bestTime() + "they have beautiful " + alaska.landmarks);
  });

});



