function mountain2(canvas) {
    const ctx = canvas.getContext("2d");
  
    // Set up the canvas size and background color
    canvas.width = 800;
    canvas.height = 600;
    ctx.fillStyle = "#87cefa"; // sky blue
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    // Define the mountain shape
    const mountainWidth = 600;
    const mountainHeight = 300;
    const mountainX = canvas.width / 2 - mountainWidth / 2;
    const mountainY = canvas.height - mountainHeight;
  
    // Draw the mountain
    const mountainGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    mountainGradient.addColorStop(0, "#a9a9a9"); // dark gray
    mountainGradient.addColorStop(1, "#696969"); // light gray
    ctx.fillStyle = mountainGradient;
    ctx.beginPath();
    ctx.moveTo(mountainX, mountainY);
    ctx.lineTo(mountainX + mountainWidth / 2, mountainY - mountainHeight / 2);
    ctx.lineTo(mountainX + mountainWidth, mountainY);
    ctx.closePath();
    ctx.fill();
  
    // Add some snow to the mountain
    const snowGradient = ctx.createLinearGradient(0, mountainY, 0, mountainY + mountainHeight / 2);
    snowGradient.addColorStop(0, "#ffffff"); // white
    snowGradient.addColorStop(1, "#d3d3d3"); // light gray
    ctx.fillStyle = snowGradient;
    ctx.beginPath();
    ctx.moveTo(mountainX + mountainWidth / 2, mountainY - mountainHeight / 2);
    ctx.lineTo(mountainX + mountainWidth / 2 + 50, mountainY - mountainHeight / 2 + 50);
    ctx.lineTo(mountainX + mountainWidth / 2 - 50, mountainY - mountainHeight / 2 + 50);
    ctx.closePath();
    ctx.fill();
  
    // Add some trees to the mountain
    const treeHeight = 150;
    const treeWidth = 50;
    const treeXPositions = [mountainX + 50, mountainX + 150, mountainX + 250, mountainX + 350, mountainX + 450, mountainX + 550];
    const treeYPosition = mountainY + mountainHeight - treeHeight;
    for (let i = 0; i < treeXPositions.length; i++) {
      ctx.fillStyle = "#8b4513"; // brown
      ctx.fillRect(treeXPositions[i] + treeWidth / 4, treeYPosition + treeHeight / 2, treeWidth / 2, treeHeight / 2);
      ctx.fillStyle = "#008000"; // green
      ctx.beginPath();
      ctx.moveTo(treeXPositions[i], treeYPosition + treeHeight / 2);
      ctx.lineTo(treeXPositions[i] + treeWidth / 2, treeYPosition);
      ctx.lineTo(treeXPositions[i] + treeWidth, treeYPosition + treeHeight / 2);
      ctx.closePath();
      ctx.fill();
    }
  }
  