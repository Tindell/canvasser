function mountain(canvas, title) {
  const ctx = canvas.getContext("2d");
  // Set up canvas and title
  canvas.width = 800;
  canvas.height = 600;
  ctx.font = "30px Arial";
  ctx.fillText(title, 10, 40);

  // Draw sky
  const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  skyGradient.addColorStop(0, "#87CEEB");
  skyGradient.addColorStop(1, "#ffffff");
  ctx.fillStyle = skyGradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw sun
  const sunX = canvas.width * 0.85;
  const sunY = canvas.height * 0.15;
  ctx.beginPath();
  ctx.arc(sunX, sunY, 50, 0, 2 * Math.PI);
  ctx.fillStyle = "#FFD700";
  ctx.fill();

  // Draw mountain
  ctx.beginPath();
  ctx.moveTo(100, 600);
  ctx.lineTo(400, 150);
  ctx.lineTo(700, 600);
  ctx.closePath();

  // Add mountain texture and color
  const mountainGradient = ctx.createLinearGradient(0, 150, 0, 600);
  mountainGradient.addColorStop(0, "#8B4513");
  mountainGradient.addColorStop(0.5, "#A0522D");
  mountainGradient.addColorStop(1, "#CD853F");
  ctx.fillStyle = mountainGradient;
  ctx.fill();
  ctx.strokeStyle = "#8B4513";
  ctx.lineWidth = 5;
  ctx.stroke();

  // Draw trees
  function drawTree(x, y, width, height) {
    ctx.fillStyle = "#8B4513";
    ctx.fillRect(x, y, width, height);

    ctx.beginPath();
    ctx.moveTo(x - width, y);
    ctx.lineTo(x + width * 1.5, y);
    ctx.lineTo(x + width / 2, y - height);
    ctx.closePath();

    const treeGradient = ctx.createLinearGradient(0, y - height, 0, y);
    treeGradient.addColorStop(0, "#228B22");
    treeGradient.addColorStop(1, "#006400");
    ctx.fillStyle = treeGradient;
    ctx.fill();
  }


for (let i = 0; i < 50; i++) {
    const x = Math.random() * canvas.width;
    const y = canvas.height - Math.random() * 200;
    const width = 10 + Math.random() * 10;
    const height = 50 + Math.random() * 50;
    // Only draw trees on the lower part of the mountain
    if (y > 350) {
        drawTree(x, y, width, height);
    }
}
    
// Draw snow on the mountain
ctx.beginPath();
ctx.moveTo(400, 150);
ctx.lineTo(350, 300);
ctx.lineTo(450, 300);
ctx.closePath();
ctx.fillStyle = "#ffffff";
ctx.fill();

// Add cloud to the sky
function drawCloud(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.arc(x + radius, y, radius, 0, 2 * Math.PI);
    ctx.arc(x + radius * 1.5, y + radius * 0.5, radius, 0, 2 * Math.PI);
    ctx.arc(x + radius, y + radius, radius, 0, 2 * Math.PI);
    ctx.arc(x, y + radius, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
}
// Draw multiple clouds
for (let i = 0; i < 7; i++) {
    const x = Math.random() * canvas.width;
    const y = 50 + Math.random() * 200;
    const radius = 20 + Math.random() * 20;

    drawCloud(x, y, radius);
}

// Draw a river
ctx.beginPath();
ctx.moveTo(400, 600);
ctx.quadraticCurveTo(350, 450, 400, 300);
ctx.quadraticCurveTo(450, 450, 400, 600);
const riverGradient = ctx.createLinearGradient(0, 300, 0, 600);
riverGradient.addColorStop(0, "#1E90FF");
riverGradient.addColorStop(1, "#00BFFF");
ctx.fillStyle = riverGradient;
ctx.fill();
}
