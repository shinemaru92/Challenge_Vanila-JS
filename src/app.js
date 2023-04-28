const title = document.querySelector("div.hello:first-child h1");

const superEventHandler = {
  handleMouseEnter: function () {
    title.innerText = "Mouse is here!";
    title.style.color = "red";
  },

  handleMouseOut: function () {
    title.innerText = "Mouse is Gone!";
    title.style.color = "blue";
  },

  handleWindowResize: function () {
    title.innerText = "You just resized!";
    title.style.color = "brown";
  },

  handleContextMenu: function () {
    title.innerText = "That was a right click!";
    title.style.color = "green";
  }
};

title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseout", superEventHandler.handleMouseOut);

window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("contextmenu", superEventHandler.handleContextMenu);
