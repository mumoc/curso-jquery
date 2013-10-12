window.Course || (window.Course = {})

Course.Utils = {}

Course.Utils.RequestHandler = (function(){
  function RequestHandler(resource) {
    this.resourceUrl = resource;
  }

  RequestHandler.prototype.baseUrl = false ? 'http://curso-api.herokuapp.com/' : 'http://api.dev/';

  RequestHandler.prototype.resourceUrl = null;

  RequestHandler.prototype.ajaxConfig = { dataType: 'jsonp' };

  RequestHandler.prototype.index = function() {
    var request = $.ajax(this.baseUrl + this.resourceUrl + '.json', this.ajaxConfig);
    this.addCallbacks(request);
    return request;
  };

  RequestHandler.prototype.show = function(id) {
    var request = $.ajax(this.baseUrl + this.resourceUrl + '/' + id + '.json', this.ajaxConfig);
    this.addCallbacks(request);
    return request;
  };

  RequestHandler.prototype.create = function(data) {
    var request = $.post(this.baseUrl + this.resourceUrl + '.json', data);
    this.addCallbacks(request);
    return request;
  };

  RequestHandler.prototype.addCallbacks = function(request) {
    request.done(this.successCallback);
    request.fail(this.errorCallback);
  };

  RequestHandler.prototype.successCallback = function(data, status, jqXHR) {
    window.data = jqXHR;
    console.log('Response was successfull');
    window.successResponseData = data;
  };

  RequestHandler.prototype.errorCallback = function(jqXHR, status, error) {
    console.log('Response thrown an error');
    window.errorResponseData = data;
  };

  return RequestHandler;
})();

