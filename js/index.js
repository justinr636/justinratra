function populateWorldMap() {
  // Create World Map
  var map = new Datamap({
    element: document.getElementById('world-map'),
    projection: 'mercator',
    responsive: true,
    geographyConfig: {
      popupOnHover: 'true'
    },
    fills: {
      defaultFill: 'rgb(179, 187, 177)',    // All Countries' Color
      beenFill: 'rgb(34, 210, 9)'           // Visited Countries' Color
    },
    data: {
      AUT: {fillKey: 'beenFill'},
      BEL: {fillKey: 'beenFill'},
      BHS: {fillKey: 'beenFill'},
      CAN: {fillKey: 'beenFill'},
      CHN: {fillKey: 'beenFill'},
      COL: {fillKey: 'beenFill'},
      CZE: {fillKey: 'beenFill'},
      DEU: {fillKey: 'beenFill'},
      ECU: {fillKey: 'beenFill'},
      ESP: {fillKey: 'beenFill'},
      HKG: {fillKey: 'beenFill'},
      HUN: {fillKey: 'beenFill'},
      IND: {fillKey: 'beenFill'},
      JPN: {fillKey: 'beenFill'},
      MYS: {fillKey: 'beenFill'},
      NLD: {fillKey: 'beenFill'},
      PER: {fillKey: 'beenFill'},
      THA: {fillKey: 'beenFill'},
      USA: {fillKey: 'beenFill'},
      VNM: {fillKey: 'beenFill'},
    }
  });

  // Adjust world map on window resize
  $(window).on('resize', function () {
    map.resize();
  });
}

$(document).ready(function () {
  setTimeout(populateWorldMap, 1000);
});


// Auto Type/remove

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 1000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 150 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.02em solid #fff}";
  document.body.appendChild(css);
};

