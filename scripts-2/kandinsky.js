function kandinsky(canvas, title) {
    const ctx = canvas.getContext("2d");

    const colors = [
        '#0D1B2A',
        '#1B263B',
        '#415A77',
        '#778DA9',
        '#E0E1DD',
        '#BF1A2F',
        '#D97925',
        '#F1C40F',
        '#3498DB',
    ];

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function drawCircle(x, y, radius, color) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }

    function drawRectangle(x, y, width, height, color) {
        ctx.beginPath();
        ctx.rect(x, y, width, height);
        ctx.fillStyle = color;
        ctx.fill();
    }

    function drawLine(x1, y1, x2, y2, color, lineWidth) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
    }

    function drawRandomShapes(numShapes) {
        for (let i = 0; i < numShapes; i++) {
            const shapeType = getRandomInt(1, 3);
            const color = getRandomColor();
            const x = getRandomInt(0, canvas.width);
            const y = getRandomInt(0, canvas.height);
            switch (shapeType) {
                case 1:
                    const radius = getRandomInt(10, 50);
                    drawCircle(x, y, radius, color);
                    break;
                case 2:
                    const width = getRandomInt(10, 100);
                    const height = getRandomInt(10, 100);
                    drawRectangle(x, y, width, height, color);
                    break;
                case 3:
                    const x2 = getRandomInt(0, canvas.width);
                    const y2 = getRandomInt(0, canvas.height);
                    const lineWidth = getRandomInt(1, 10);
                    drawLine(x, y, x2, y2, color, lineWidth);
                    break;
            }
        }
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawRandomShapes(30);
}
