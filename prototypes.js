const Movie = function(name, year, director) {
  (this.name = name), (this.year = year), (this.director = director);
};

Movie.prototype.getYearPast = function() {
  return new Date().getFullYear() - this.year;
};

Movie.prototype.getLengthName = function() {
  return this.name.length;
};

const theProposal = new Movie("The Proposal", 2009, "Anne Fletcher");
console.log("1.1", theProposal.getYearPast());
console.log("1.2", theProposal.getLengthName());

const onceUponATimeInHollywood = new Movie(
  "Once Upon a Time in Hollywood",
  2019,
  "Quentin Tarantino"
);

console.log("2.1", onceUponATimeInHollywood.getYearPast());
console.log("2.2", onceUponATimeInHollywood.getLengthName());
