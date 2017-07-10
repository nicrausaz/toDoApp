<template>
  <q-layout>
    <div slot="header" class="toolbar">
      <q-toolbar-title :padding="1">
        TODO LIST
      </q-toolbar-title>
    </div>
    <q-tabs slot="navigation">
      <q-tab icon="search" route="/" exact replace>Show</q-tab>
      <q-tab icon="add" route="/add" exact replace>Add</q-tab>
      <q-tab icon="check" route="/done" exact replace>Done</q-tab>
    </q-tabs>
    <div class="layout-view">
      <button v-back-to-top.animate="{offset: 0, duration: 200}" class="primary circular fixed-bottom-right animate-pop" style="margin: 0 15px 15px 0">
        <i>keyboard_arrow_up</i>
      </button>
      <search :tasks="tasks" @sort="setFilteredTasks"></search>
      <div class="card" v-for="task in filteredTasks" :key="task.id">
        <div class="card-title">
          {{ task.name }}
        </div>
        <div class="card-content">
          {{ task.description }}{{ task.deadline }}{{ task.important }}
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
import Search from '../shared/Search'
import Tasks from '../../assets/data/tasks.json'

export default {
  data () {
    return {
      searchModel: '',
      tasks: Tasks.tasks,
      filteredTasks: []
    }
  },
  methods: {
    setFilteredTasks (filteredTasks) {
      this.filteredTasks = filteredTasks
    }
  },
  components: {
    Search
  }
}
</script>

<style lang="stylus">
  .layout-view
    padding 10px
</style>
