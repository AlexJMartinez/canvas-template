window.addEventListener('load', function() {


        let canvas = document.getElementById('canvas');
        let c = canvas.getContext('2d');
      
        
                
        canvas.addEventListener('mousedown', function(e) {
            
                let target = e.target;

                let rect = target.getBoundingClientRect();

                let x = e.clientX - rect.left;
                let y = e.clientY - rect.top;

                console.log(x)
                console.log(y)

                function getColor(){ 
                  return "hsl(" + 360 * Math.random() + ',' +
                             (25 + 70 * Math.random()) + '%,' + 
                             (85 + 5 * Math.random()) + '%)'
                }

                function draw() {
              
                  let radius = Math.random() * 180
                  // Math.floor(Math.random() * 180) 

                  let circle = new Path2D();
                  circle.arc(x, y, radius, 0, 2 * Math.PI);
                
                  c.fillStyle = getColor();
                  c.fill(circle)
                         
                }

                let drawInterval = null;

                function startDraw() {
                  draw();
                  drawInterval = setInterval(draw, 50);
                }

                startDraw();

                function stopDraw() {
                  clearInterval(drawInterval);
                }

                
                canvas.addEventListener('mouseup', stopDraw)

                
                
        })
     
        function clear() {
          c.clearRect(0, 0, canvas.width, canvas.height)
        
        }

        let button = document.getElementById('button')
        button.addEventListener('click', clear)

        let download = document.getElementById('download')

                download.addEventListener('click', function() {
                  let img = canvas.toDataURL("image/png", 1)
                  document.write('<img src="'+img+'"/>')
                })

        
});
        
    


  

 

 

  