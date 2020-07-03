AOS.init();
var preloader = document.getElementById('loading');

function Loading() {
  preloader.style.display = 'none';
}

document.onreadystatechange = function() {
  var state = document.readyState
  if (state == 'interactive') {
    document.getElementById('contents').style.visibility = "hidden";
  } else if (state == 'complete') {
    setTimeout(function() {
      document.getElementById('interactive');
      document.getElementById('loading').style.visibility = "hidden";
      document.getElementById('LoadLater').style.visibility = "visible";
    }, 2000);
  }
}

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: "+(e.pageY-10)+"px; left: "+(e.pageX-10)+"px;")
})
