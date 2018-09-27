let keysPressed = [];

document.addEventListener("keydown", event => {
  keysPressed[event.keyCode] = true;
});

document.addEventListener("keyup", event => {
  keysPressed[event.keyCode] = false;
});

export { keysPressed };
