var score = 1;

postToPage(score); // Print to the page

createButton('J', btnPress); // Make a button
changeTitle('Boring Game');

setInterval(btnPress, 800);

function btnPress() {
  score++;
  postToPage(score);
}
createButton('J', btnPress); // Make a button
