function snake(canvas) {
    const ctx = canvas.getContext("2d");
  
    // Set up the snake's body
    ctx.fillStyle = "green";
    ctx.fillRect(40, 40, 20, 20);
    ctx.fillRect(20, 40, 20, 20);
    ctx.fillRect(0, 40, 20, 20);
  
    // Draw the snake's head
    ctx.fillStyle = "darkgreen";
    ctx.fillRect(60, 40, 20, 20);
    ctx.fillStyle = "black";
    ctx.fillRect(70, 45, 5, 5);
  
    // Draw the snake's eyes
    ctx.fillStyle = "white";
    ctx.fillRect(75, 45, 2, 2);
    ctx.fillRect(78, 45, 2, 2);
  
    // Draw the snake's tongue
    ctx.fillStyle = "red";
    ctx.fillRect(77, 50, 2, 5);
  }