<template>
  <div>
    <form @submit="submitTodo">
      <input type="text" placeholder="Write a task" v-model="taskToAdd">
      <button type="submit">Add</button>
      <ul class="todos">
        <todo-list-task v-for="(task, index) in tasks" :key="index" :name="task"></todo-list-task>
      </ul>
    </form>
  </div>
</template>

<script>
import TodoListTask from '@/components/TodoListTask.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TodoList',
  components: {
    TodoListTask
  },
  data () {
    return {
      taskToAdd: ''
    }
  },
  methods: {
    ...mapActions({
      addTodo: 'todo/addTask'
    }),
    submitTodo (event) {
      event.preventDefault()
      this.addTodo(this.taskToAdd)
      this.taskToAdd = ''
    }
  },
  computed: {
    ...mapGetters({
      tasks: 'todo/tasks'
    })
  }
}
</script>

<style lang="scss">
.todos {
  list-style: none;
  padding-left: 0;
}
</style>
