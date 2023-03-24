// polarbear.js
function polarbear(canvas, title) {
    title.textContent += ' (Given GPT-4 unicorn as an example, in the context of the tiger conversation)';

    const ctx = canvas.getContext("2d");
  
    // Body
    ctx.beginPath();
    ctx.fillStyle = "#FFF";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.ellipse(100, 100, 50, 25, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  
    // Head
    ctx.beginPath();
    ctx.fillStyle = "#FFF";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.arc(150, 75, 25, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  
    // Ears
    ctx.beginPath();
    ctx.fillStyle = "#FFF";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.moveTo(170, 75);
    ctx.lineTo(180, 65);
    ctx.lineTo(190, 75);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(170, 90);
    ctx.lineTo(180, 100);
    ctx.lineTo(190, 90);
    ctx.fill();
    ctx.stroke();
  
    // Eyes
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.arc(160, 70, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(170, 70, 3, 0, 2 * Math.PI);
    ctx.fill();
  
    // Nose
    ctx.beginPath();
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;
    ctx.moveTo(147, 85);
    ctx.lineTo(157, 85);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(152, 85, 2, 0, 2 * Math.PI);
    ctx.fill();
    
    // Legs
    ctx.beginPath();
    ctx.fillStyle = "#FFF";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.moveTo(75, 100);
    ctx.lineTo(75, 150);
    ctx.moveTo(100, 100);
    ctx.lineTo(100, 150);
    ctx.moveTo(125, 100);
    ctx.lineTo(125, 150);
    ctx.moveTo(150, 100);
    ctx.lineTo(150, 150);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(75, 150);
    ctx.lineTo(90, 160);
    ctx.lineTo(105, 150);
    ctx.lineTo(75, 150);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(100, 150);
    ctx.lineTo(115, 160);
    ctx.lineTo(130, 150);
    ctx.lineTo(100, 150);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(125, 150);
    ctx.lineTo(140, 160);
    ctx.lineTo(155, 150);
    ctx.lineTo(125, 150);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(165, 160);
    ctx.lineTo(180, 150);
    ctx.lineTo(150, 150);
    ctx.fill();
    ctx.stroke();
  
    // Tail
    ctx.beginPath();
    ctx.fillStyle = "#FFF";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.moveTo(50, 100);
    ctx.quadraticCurveTo(20, 90, 50, 70);
    ctx.fill();
    ctx.stroke();
    
    // Claws
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.arc(90, 150, 3, 0, 2 * Math.PI);
    ctx.arc(115, 150, 3, 0, 2 * Math.PI);
    ctx.arc(140, 150, 3, 0, 2 * Math.PI);
    ctx.arc(165, 150, 3, 0, 2 * Math.PI);
    ctx.fill();
}