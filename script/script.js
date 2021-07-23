const Emblem = {
  init: function (el, str) {
    const element = document.querySelector(el);
    const text = str ? str : element.innerHTML;
    element.innerHTML = '';
    for (let i = 0; i < text.length; i++) {
      let letter = text[i];
      const span = document.createElement('span');
      let node = document.createTextNode(letter);
      let r = (360 / text.length) * (i);
      let x = (Math.PI / text.length).toFixed(0) * (i);
      let y = (Math.PI / text.length).toFixed(0) * (i);
      span.appendChild(node);
      span.style.webkitTransform = 'rotateZ(' + r + 'deg) translate3d(' + x + 'px,' + y + 'px,0)';
      span.style.transform = 'rotateZ(' + r + 'deg) translate3d(' + x + 'px,' + y + 'px,0)';
      element.appendChild(span);
    }
  }
};

Emblem.init('.emblem');

const button = document.querySelector(".btn");

button.addEventListener("mousemove", function (e) {
  const position = button.getBoundingClientRect();
  const x = e.pageX - position.left - position.width;
  const y = e.pageY - position.top - position.height;
  button.children[0].style.transform = "translate(" + x * 0.1 + "px," + y * 0.2 + "px)";
});
button.addEventListener("mouseout", function (e) {
  button.children[0].style.transform = "translate(0px , 0px)";
});
