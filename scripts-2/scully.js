function scully(canvas, title) {
    const ctx = canvas.getContext("2d");
    const width = 400;
    const height = 300;
    canvas.width = width;
    canvas.height = height;

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randomColor() {
        const r = randomInt(0, 255);
        const g = randomInt(0, 255);
        const b = randomInt(0, 255);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function drawRectangle(x, y, w, h, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
    }

    function createScullyStripes() {
        const stripeCount = randomInt(4, 10);
        let xOffset = 0;

        for (let i = 0; i < stripeCount; i++) {
            const stripeWidth = randomInt(20, Math.floor(width / stripeCount));
            const color = randomColor();
            for (let j = 0; j < height; j += randomInt(20, 50)) {
                const rectHeight = randomInt(20, 50);
                drawRectangle(xOffset, j, stripeWidth, rectHeight, color);
            }
            xOffset += stripeWidth;
        }
    }

    function createScullyBlocks() {
    const blockCount = randomInt(4, 8);
    for (let i = 0; i < blockCount; i++) {
        const blockWidth = randomInt(20, Math.floor(width / blockCount));
        const blockHeight = randomInt(20, Math.floor(height / blockCount));
        const x = randomInt(0, width - blockWidth);
        const y = randomInt(0, height - blockHeight);
        const color = randomColor();
      
        drawRectangle(x, y, blockWidth, blockHeight, color);
      }
    }

    createScullyStripes();
    createScullyBlocks();
}      