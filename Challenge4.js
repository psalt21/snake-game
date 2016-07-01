$(document).ready(function(){
  // Canvas stuff
  var canvas = $('#canvas')[0];
  var ctx = canvas.getContext('2d');
  var w = $('#canvas').width();
  var h = $('#canvas').height();

  var cw = 40;
  var colors = ['green', 'yellow', 'red'];

  var lights_array = [];

  create_lights();
  function create_lights(){
    lights_array.push({x: 5, y: 4, color: colors[0]});
    lights_array.push({x: 5, y: 5, color: colors[1]});
    lights_array.push({x: 5, y: 6, color: colors[2]});
  }

  function paint(){
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(0, 0, w, h);

    // The movement code for the lights come here.
    var ny = lights_array[0].y;

    var lastLight = lights_array.pop();
    var firstLight = lights_array.shift();

    firstLight.y = lastLight.y;
    lastLight.y = ny;

    lights_array.unshift(lastLight);
    lights_array.push(firstLight);


    for(var i = 0; i < lights_array.length; i++){
      var c = lights_array[i];

      ctx.fillStyle = c.color;
      ctx.fillRect(c.x*cw, c.y*cw, cw, cw);
      ctx.strokeStyle = 'white';
      ctx.strokeRect(c.x*cw, c.y*cw, cw, cw);
    }
  }
  game_loop = setInterval(paint, 600);
  paint();

});
