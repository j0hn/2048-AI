/*************************************************************
 * Clock Bot: Does up, right, down, left over and over again *
 *************************************************************/
function ClockBot(grid) {
  this.grid = grid;
  this.last_movement = 0;
}

ClockBot.prototype.move = function() {
  var next_movement = (this.last_movement + 1)  % 4;
  this.last_movement = next_movement;
  return next_movement;
}


/***********************************************************
 * Random Bot: what do you think it does? huh?             *
 ***********************************************************/
function RandomBot(grid) {
  this.grid = grid;
}

RandomBot.prototype.move = function() {
  var moves = [0, 1, 2, 3];
  var random_index = Math.floor(Math.random() * moves.length);
  return moves[random_index];
}


/***********************************************************
 * Hold One Side Bot: tries every move except for one side *
 ***********************************************************/
function HOSBot(grid) {
  this.grid = grid;
  this.never_do = 0; // Up
  this.oposite = (this.never_do + 2) % 4;
}

HOSBot.prototype.move = function() {
  var clone = this.grid.clone();
  if(clone.move(this.oposite).moved){
    return this.oposite;
  } else{
    var moves = [1, -1];
    var random_index = Math.floor(Math.random() * moves.length);
    var rand = moves[random_index];
    var turn = (this.oposite + rand) % 4;
    var oposite_turn = (this.oposite + rand) % 4;
    if(clone.move(turn).moved){
      return turn;
    } else if(clone.move(oposite_turn).moved){
        return oposite_turn;
    } else {
      return this.never_do;
    }
  }
}
