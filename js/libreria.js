window.Libreria || (window.Libreria = {})

Libreria.AddColor = (function(){
  function AddColor() {}

  AddColor.prototype.paintRed = function(elem) {
    elem.css('background-color', 'red');
  };

  return AddColor;
})();

