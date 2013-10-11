window.Course || (window.Course = {})

Course.Resources = {}

Course.Resources.Tasks = (function(){
  function Tasks() {
    this.Handler = new Course.Utils.DataHandler('tasks');
  }

  Tasks.prototype.index = function(){
    request = this.Handler.index();
  };

  Tasks.prototype.show = function(id){

  };

  Tasks.prototype.update = function(id, data){

  };

  Tasks.prototype.new = function(data){

  };

  Tasks.prototype.destroy = function(id){

  };

  return Tasks;
})();
