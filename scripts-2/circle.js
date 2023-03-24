// circle.js
function circle(canvas, title) {
  const ctx = canvas.getContext('2d');

  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = Math.min(centerX, centerY) * 0.8;

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.closePath();
}

