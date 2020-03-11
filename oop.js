class Movie {
  constructor(name, year, director) {
    (this.name = name), (this.year = year), (this.director = director);
  }
  getYearPast() {
    return new Date().getFullYear() - this.year;
  }
  getLengthName() {
    return this.name.length;
  }
}

class TheProposal extends Movie {
  constructor() {
    super("The Proposal", 2009, "Anne Fletcher");
  }
  getYear() {
    return super.getYearPast();
  }
  getLength() {
    return super.getLengthName();
  }
}

const proposalMovie = new TheProposal();

console.log("proposalMovie", proposalMovie.getYear());

class OnceUponATimeInHollywood extends Movie {
  constructor() {
    super("Once Upon a Time in Hollywood", 2019, "Quentin Tarantino");
  }
  getYear() {
    return super.getYearPast();
  }
  getLength() {
    return super.getLengthName();
  }
}

const onceInHollywood = new OnceUponATimeInHollywood();

console.log("onceInHollywood", onceInHollywood.getYear());
