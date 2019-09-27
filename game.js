var score = 1; // Create a variable to store the score in

var title = new Title('World Builder'); // Create a title element
var button = new Button('hello', btnPress);   // Create a button element
var hidden = new Button('Boo!', btnPress);
hidden.hide();
var scr = new Text(score);                    // Create a text element
var hidden = new Button('Boo!', btnPress);
var button = new Button('hello', btnPress);   // Create a button element
changeTitle('Boring Game');

setInterval(btnPress, 800);

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 10) {
    hidden.show();
  }
  if(score > 15) {
    hidden.hide(500);
  }
}
