// Setup canvas context and radius
var canvas = document.getElementById("clockCanvas");
var ctx = canvas.getContext("2d");
var radius = Math.min(canvas.width, canvas.height) / 2;
ctx.translate(radius, radius); // Move the origin to the center of the canvas

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();

  // Draw the edge circle with gradient
  grad = ctx.createRadialGradient(0, 0, radius * 0.9, 0, 0, radius);
  grad.addColorStop(0, "#f9f9f9");
  grad.addColorStop(1, "#e0e0e0");
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius * 0.1;
  ctx.stroke();

  // Center circle
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = "black";
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius * 0.15 + "px Arial";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#333";
  ctx.textAlign = "center";

  for (num = 1; num <= 12; num++) {
    ang = (num * Math.PI) / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius) {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  // Hour hand
  hour = hour % 12;
  var hourAng = (hour * Math.PI) / 6 + (minute * Math.PI) / 360; // Adding minute contribution
  drawHand(ctx, hourAng, radius * 0.5, radius * 0.07);

  // Minute hand
  var minuteAng = (minute * Math.PI) / 30 + (second * Math.PI) / 1800; // Adding second contribution
  drawHand(ctx, minuteAng, radius * 0.8, radius * 0.07);

  // Second hand
  var secondAng = (second * Math.PI) / 30;
  drawHand(ctx, secondAng, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}

// Call drawClock every second to update the time
setInterval(drawClock, 1000);
drawClock(); // Initial call to draw the clock immediately
