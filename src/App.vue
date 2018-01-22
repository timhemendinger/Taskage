<template>

    <div class="add-control-area columns is-mobile is-multiline">

        <responsive-container>
        
            <div class="field is-grouped">
                <div class="control is-expanded">
                    <input class="input add-control-text" type="text" placeholder="New Task" v-model="newTask" v-on:keyup.enter="addTask">
                </div>
                <div class="control">
                    <a class="button is-white add-control-button" @click="addTask" :disabled="!isThereText">Add Task</a>
                </div>
            </div>

        </responsive-container>

        <responsive-container>
      
            <list-item v-for="(task, index) in tasks" :key="index" v-model="tasks[index]" :index="index" @task-completed="completeTask(index)" @task-deleted="deleteTask(index)" @task-updated="updateStorage()"></list-item>

        </responsive-container>

    </div>

</template>

<script>



export default {





  name: 'app',
  data () {
    return {
      tasks: [],
      completedTasks: [],
      newTask: ''
    }
  },
  methods: {
    addTask: function() {
      if(this.isThereText) {
        this.tasks.push(this.newTask);
        this.newTask = '';
        this.updateStorage();
      }
    },
    deleteTask: function(index) {
      this.tasks.splice(index, 1);
      this.updateStorage();
    },
    completeTask: function(index) {
      // Add to completed tasks array
      this.completedTasks.push(this.tasks[index]);
      this.deleteTask(index);
    },
    updateStorage: function() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
  },
  computed: {
    isThereText: function() {
      return this.newTask.trim().length;
    }
  },
  
  // If there's already tasks stored in localStorage,
  // populate the tasks array
  mounted: function() {
    if (localStorage.getItem("tasks")) {
      this.tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    if (localStorage.getItem("completedTasks")) {
      this.completedTasks = JSON.parse(localStorage.getItem("completedTasks"));
    }
  }
}
</script>

<style>
html {
  background: #333;
}

.add-control-area {
  margin-top: 20px;
}

.add-control-button {
  background-color: #888 !important;
  color: #fff !important;
}

.control {
  text-align: center;
}

.task-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
}

.task {
  background-color: #999;
  color: #fff;
  font-size: 16px;
  word-wrap: break-word;
  border: 0;
  border-radius: 5px 0 0 5px;
  min-width: 0;
  flex-basis: 100%;
  padding: 10px;
  resize: none;
}

.task:focus {
  outline: none;
}

.task-control {
  cursor: pointer;
  align-self: stretch;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.task-control span {
  align-self: center;
}

.complete-task {
  background: #18a40e;
  border-radius: 0 5px 5px 0;
  flex-basis: 50px;
}

.complete-task:hover {
  background: #15900c;
}

.delete-task {
  background: #a40e18;
  right: 50px;
  flex-basis: 50px;
}

.delete-task:hover {
  background: #850b13;
}
</style>
