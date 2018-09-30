let keysPressed = [];
let mouseMoved = {
  x: 0,
  y: 0
};

document.addEventListener("keydown", event => {
  keysPressed[event.keyCode] = true;
});

document.addEventListener("keyup", event => {
  keysPressed[event.keyCode] = false;
});

document.addEventListener("mousemove", event => {
  mouseMoved.x = event.clientX;
  mouseMoved.y = event.clientY;
});

export { keysPressed, mouseMoved };
