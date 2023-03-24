
function pipes(canvas, title) {
    const gl = canvas.getContext("webgl");
  
    // Set up vertex and fragment shaders
    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;
    const fragmentShaderSource = `
      precision mediump float;
      uniform vec3 color;
      void main() {
        gl_FragColor = vec4(color, 1.0);
      }
    `;
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);

  // Create program and attach shaders
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.useProgram(program);

  // Set up buffer for vertex positions
  const vertices = [
    -0.9, -0.9,
    -0.9, 0.9,
    0.9, -0.9,
    0.9, 0.9,
  ];
  const vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  const positionAttribute = gl.getAttribLocation(program, "position");
  gl.enableVertexAttribArray(positionAttribute);
  gl.vertexAttribPointer(positionAttribute, 2, gl.FLOAT, false, 0, 0);

  // Set up color uniform
  const colorLocation = gl.getUniformLocation(program, "color");

  // Set up animation loop
  let time = 0;
  function animate() {
    time += 0.01;
    const r = Math.sin(time) * 0.5 + 0.5;
    const g = Math.sin(time + 2) * 0.5 + 0.5;
    const b = Math.sin(time + 4) * 0.5 + 0.5;
    gl.uniform3f(colorLocation, r, g, b);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertices.length / 2);
    requestAnimationFrame(animate);
  }
  animate();
}