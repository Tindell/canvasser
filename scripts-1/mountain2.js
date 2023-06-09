function mountain2(canvas) {
  const ctx = canvas.getContext("2d");

  // Set up the canvas size and background color
  canvas.width = 400;
  canvas.height = 300;
  ctx.fillStyle = "#87cefa"; // sky blue
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Define the mountain shape
  const mountainWidth = 300;
  const mountainHeight = 150;
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
  ctx.lineTo(mountainX + mountainWidth / 2 + 25, mountainY - mountainHeight / 2 + 25);
  ctx.lineTo(mountainX + mountainWidth / 2 - 25, mountainY - mountainHeight / 2 + 25);
  ctx.closePath();
  ctx.fill();

  // Add some trees to the mountain
  const treeHeight = 75;
  const treeWidth = 25;
  const treeXPositions = [mountainX + 25, mountainX + 75, mountainX + 125, mountainX + 175, mountainX + 225, mountainX + 275];
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
