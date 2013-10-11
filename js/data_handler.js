window.Utils || (window.Utils = {})

Utils.DataHandler = (function(){
  function DataHandler() {}

  DataHandler.prototype.index = function() {
    var _this_ = this;
    var request = $.ajax('http://api.dev/tasks.json', { dataType: 'jsonp' })

  };

  return DataHandler;
})();

