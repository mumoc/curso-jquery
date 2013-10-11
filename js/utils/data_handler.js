window.Course || (window.Course = {})

Course.Utils = {}

Course.Utils.DataHandler = (function(){
  function DataHandler(resource, options) {
    options = options || {};
    this.setCallbacks(options);
    this.resourceUrl = resource;
  }

  DataHandler.prototype.baseUrl = 'http://curso-api.herokuapp.com/';

  DataHandler.prototype.resourceUrl = null;

  DataHandler.prototype.ajaxConfig = { dataType: 'jsonp' };

  DataHandler.prototype.index = function() {
    console.log(this.baseUrl + resources + '.json', this.ajaxConfig);
    var request = $.ajax(this.baseUrl + this.resourceUrl + '.json', this.ajaxConfig);
    request.success(this.successCallback);
    request.error(this.errorCallback);
  };

  DataHandler.prototype.setCallbacks = function(options) {
    this.successCallback = options.success || this.successCallback;
    this.errorCallback = options.error || this.errorCallback;
  };

  DataHandler.prototype.successCallback = function(data) {
    console.log('Response was successfull');
    window.successResponseData = data;
  };

  DataHandler.prototype.errorCallback = function(data) {
    console.log('Response thrown an error');
    window.errorResponseData = data;
  };

  return DataHandler;
})();

