  
var todoApp = new Vue({
    el: '#todoApp',
    data: {
      message: 'Task Manager App',
      addTodoInput: '',
      lists: [],
    },
    methods:{
        addTask: function(){
            this.lists.push({
              id: this.lists.length+1,
              title: this.addTodoInput,
              isComplete: false
            });
            this.addTodoInput = '';
          },
          deleteTask: function(list){
            var index = this.lists.indexOf(list);
            this.lists.splice(index, 1);
          }
    }
  })// created a Vue instance, and pass through an object with curly braces. It is an instance to control the whole part ar some part of the whole web application. One instance can control the whole app. Or many instances are required depending on different features of app like search, friendlist and dynamic menu for we need 3 separate components or widgets for this.
