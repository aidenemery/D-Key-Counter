var addHit = function() {
  hits++;
  renderHits();
};
var hits = 0;
var hitElement = document.querySelector( '.hits' );
document.body.onkeyup = function(e) {
  if( e.keyCode == 68 ) {
    addHit();
  };
};

var renderHits = function() {
  hitElement.innerHTML = hits;
};

var resetHits = function() {
  hits = 0;
  renderHits();
};