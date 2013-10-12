window.Course || (window.Course = {})

Course.Resources = {}

Course.Resources.Tasks = (function(){
  function Tasks(options) {
    _this = this;
    options = options || {};
    this.taskList = options.list || $('#tasks');
    this.Handler = new Course.Utils.RequestHandler('tasks');
  }

  Tasks.prototype.index = function(){
    request = this.Handler.index();
    request.done(this.renderAll);
    request.fail(this.renderError);
  };

  Tasks.prototype.show = function(id){
    request = this.Handler.show(id);
  };

  Tasks.prototype.create = function(data){
    data = { task: { title: '123', content: '456' } }
    request = this.Handler.create(data);
  };

  Tasks.prototype.renderAll = function(tasks){
    _this.taskList.html('');
    tasks.forEach(_this.renderOne);
  };

  Tasks.prototype.renderOne = function(task, index, tasks){
    var newLi = $('<li></li>');
    _this.taskList.append(newLi);
  };

  Tasks.prototype.renderError = function(jqXHR){
    $('#error').addClass('Error')
               .html(jqXHR);
  };

  return Tasks;
})();
