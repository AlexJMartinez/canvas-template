
function draw() {
    let canvas = document.getElementById('canvas');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (canvas.getContext) {
      let c = canvas.getContext('2d');

    for (let i = 0; i < 50; i++) {

      let x = Math.random() * window.innerWidth;
      let y = Math.random() * window.innerHeight;


      c.beginPath();
      c.quadraticCurveTo(x, y, 50, x);
      c.quadraticCurveTo(x, 100, x, 20);
      c.quadraticCurveTo(x, 80, x, x);
      
      c.strokeStyle = 'black'
      c.stroke();

      }  
    }
  }

  window.setInterval(draw, 240)

 

  