// The constructor function
function Book(title, author, numPages) {
  // The properties of this object
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.currentPage = 0;
}

// A method on the object
Book.prototype.read = function() {
  this.currentPage = this.numPages;
  console.log("You read " + this.numPages + " pages!");
}
