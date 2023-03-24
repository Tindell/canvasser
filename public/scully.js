let once = true;

const canvas = document.getElementById("scully-banner");
console.log(canvas)
const ctx = canvas.getContext("2d");

function scully_banner() {
    const width = window.innerWidth;
    const height = 200;
    canvas.width = width;
    canvas.height = height;

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randomColor() {
        const h = randomInt(0, 360);
        const s = randomInt(20, 60);
        const l = randomInt(30, 70);
        return `hsl(${h}, ${s}%, ${l}%)`;
    }

    function drawRectangle(x, y, w, h, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
    }

    function drawBackground() {
        const color = randomColor();
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, width, height);
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

    drawBackground();
    createScullyStripes();
    createScullyBlocks();

}

let resizeTimer;

window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        scully_banner();
    }, 250); // Change the delay time as needed (in milliseconds)
});
once = false;

scully_banner();