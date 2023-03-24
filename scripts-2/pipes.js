function pipes(canvas, title) {
    const gl = canvas.getContext("webgl");

    function createShader(type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        return shader;
    }

    const vertexShaderSource = `
      attribute vec4 a_position;
      void main() {
        gl_Position = a_position;
      }
    `;

    const fragmentShaderSource = `
      precision mediump float;
      void main() {
        gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
      }
    `;

    const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    const positionAttributeLocation = gl.getAttribLocation(program, "a_position");

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    const numPipes = 5;
    const pipeSegments = [];

    for (let i = 0; i < numPipes; i++) {
        const x1 = Math.random() * 2 - 1;
        const y1 = Math.random() * 2 - 1;
        const x2 = x1 + Math.random() * 0.8 - 0.4;
        const y2 = y1 + Math.random() * 0.8 - 0.4;
        pipeSegments.push(x1, y1, x2, y1, x1, y2, x1, y2, x2, y1, x2, y2);
    }

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(pipeSegments), gl.STATIC_DRAW);

    gl.viewport(0, 0, canvas.width, canvas.height);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(program);

    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLES, 0, numPipes * 6);
}


