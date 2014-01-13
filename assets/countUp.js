// Generated by CoffeeScript 1.6.3
/*
# Example:
# var numAnim = new countUp("SomeElementYouWantToAnimate", 99.99, 2, 1.5)
# numAnim.start()
*/


(function() {
  var countUp;

  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  countUp = function(target, endVal, decimals, duration) {
    this.doc = document.getElementById(target);
    this.dec = decimals * 10 || 0;
    this.duration = duration * 1000 || 2000;
    this.startTime = null;
    this.frameVal = 0;
    this.easeOutExpo = function(t, b, c, d) {
      return c * (-Math.pow(2, -10 * t / d) + 1) + b;
    };
    this.stepUp = function(timestamp) {
      var progress;
      if (this.startTime === null) {
        this.startTime = timestamp;
      }
      progress = timestamp - this.startTime;
      this.frameVal = this.easeOutExpo(progress, 0, endVal, this.duration);
      if (this.dec > 0) {
        this.frameVal = Math.round(this.frameVal * this.dec) / this.dec;
        this.frameVal = this.frameVal > endVal ? endVal : this.frameVal;
      }
      this.d.innerHTML = this.addCommas(this.frameVal.toFixed(decimals));
      return requestAnimationFrame(this.stepUp(progress < this.duration ? void 0 : this.d.innerHTML = this.addCommas(endVal.toFixed(decimals))));
    };
    this.start = function() {
      requestAnimationFrame(this.stepUp(!(isNaN(endVal) && endVal !== null) ? void 0 : (console.log('countUp error: endVal is not a number'), this.d.innerHTML = '--')));
      return false;
    };
    this.reset = function() {
      return this.d.innerHTML = 0;
    };
    return this.addCommas = function(nStr) {
      var rgx, x, x1, x2;
      nStr += '';
      x = nStr.split('.');
      x1 = x[0];
      x2 = x.length > 1 ? "." + x[1] : "";
      rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
      }
      return x1 + x2;
    };
  };

}).call(this);
