// tiger.js
function tiger(canvas, title) {
    title.textContent += ' (Given GPT-4 unicorn as an example, then prompted to add stripes)';

    const ctx = canvas.getContext("2d");
    
    // Body
    ctx.beginPath();
    ctx.fillStyle = "#FFC107";
    ctx.fillRect(100, 100, 100, 50);
    ctx.strokeRect(100, 100, 100, 50);
    
    // Head
    ctx.beginPath();
    ctx.fillStyle = "#FFC107";
    ctx.fillRect(190, 80, 30, 30);
    ctx.strokeRect(190, 80, 30, 30);
    
    // Ears
    ctx.beginPath();
    ctx.fillStyle = "#FFC107";
    ctx.moveTo(220, 80);
    ctx.lineTo(210, 70);
    ctx.lineTo(200, 80);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(220, 110);
    ctx.lineTo(210, 120);
    ctx.lineTo(200, 110);
    ctx.fill();
    ctx.stroke();
    
    // Eyes
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.arc(200, 90, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(210, 90, 5, 0, 2 * Math.PI);
    ctx.fill();
    
    // Nose
    ctx.beginPath();
    ctx.moveTo(215, 100);
    ctx.lineTo(220, 105);
    ctx.lineTo(215, 110);
    ctx.stroke();
    
    // Mouth
    ctx.beginPath();
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.arc(205, 115, 5, Math.PI, 2 * Math.PI);
    ctx.stroke();
    
    // Legs
    ctx.beginPath();
    ctx.fillStyle = "#FFC107";
    ctx.moveTo(100, 150);
    ctx.lineTo(110, 140);
    ctx.lineTo(110, 170);
    ctx.lineTo(100, 160);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(200, 150);
    ctx.lineTo(210, 140);
    ctx.lineTo(210, 170);
    ctx.lineTo(200, 160);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Tail
    ctx.beginPath();
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.moveTo(100, 125);
    ctx.quadraticCurveTo(60, 110, 80, 70);
    ctx.stroke();
    
    // Stripes
ctx.fillStyle = "#000";
ctx.fillRect(105, 100, 20, 50);
ctx.fillRect(130, 100, 20, 50);
ctx.fillRect(155, 100, 20, 50);

    }