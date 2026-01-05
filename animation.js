const canvas = document.getElementById("pipelineCanvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = canvas.parentElement.offsetWidth;
  canvas.height = canvas.parentElement.offsetHeight;
}

window.addEventListener("resize", resize);
resize();

let packets = [];

function spawnPacket() {
  packets.push({ x: 180, y: 130, vx: 1.6 });
}

setInterval(spawnPacket, 700);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw lines
  ctx.strokeStyle = "#1e293b";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(160, 130);
  ctx.lineTo(canvas.width - 160, 130);
  ctx.stroke();

  packets.forEach(p => {
    p.x += p.vx;
    ctx.fillStyle = "#38bdf8";
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fill();
  });

  packets = packets.filter(p => p.x < canvas.width - 160);

  requestAnimationFrame(draw);
}

draw();
