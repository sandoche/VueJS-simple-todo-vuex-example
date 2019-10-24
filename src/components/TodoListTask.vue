<template>
  <li @click="removeTask(name)">
    <input type="checkbox" />
    {{ name }}
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TodoListTask',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapActions({
      removeTask: 'todo/removeTask'
    })
  }
}
</script>

<style lang="scss">
</style>
