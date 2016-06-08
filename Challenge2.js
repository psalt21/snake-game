$(document).ready(function(){
  // Canvas stuff
  var canvas = $('#canvas')[0];
  var ctx = canvas.getContext('2d');
  var w = $('#canvas').width();
  var h = $('#canvas').height();
  var checker = [];

  // Lets save the cell width in a variable for easy control
  var cellWidth = 56.25;

  // Lets paint the canvas now
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(0, 0, w, h);

  function makeChecker(){
    for(var i = 0; i < w/cellWidth; i++){
      if(i % 2 === 0){
        for(var j = 0; j < h/cellWidth; j += 2){
          checker.push({x:i, y:j});
        }
      }else{
        for(var j = 1; j < h/cellWidth; j += 2){
          checker.push({x:i, y:j});
        }
      }
    }
  }
  makeChecker();

  function paint(){
    for(var i = 0; i < checker.length; i++){
      var c = checker[i];
      ctx.fillStyle = 'black';
      ctx.fillRect(c.x*cellWidth, c.y*cellWidth, cellWidth, cellWidth)
      ctx.strokeStyle = 'white';
      ctx.strokeRect(c.x*cellWidth, c.y*cellWidth, cellWidth, cellWidth)
    }
  }
  // Start code here
  paint();
});
