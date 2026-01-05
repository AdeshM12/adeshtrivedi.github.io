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
  packets.push({ x: 170, y: 130 });
}

setInterval(spawnPacket, 800);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#1e293b";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(160, 130);
  ctx.lineTo(canvas.width - 160, 130);
  ctx.stroke();

  packets.forEach(p => {
    p.x += 1.4;
    ctx.fillStyle = "#38bdf8";
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fill();
  });

  packets = packets.filter(p => p.x < canvas.width - 160);
  requestAnimationFrame(animate);
}

animate();
