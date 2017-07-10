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
      {{getTasks}}
      <search :tasks="tasks" @sort="setFilteredTasks"></search>
      <div v-for="task in filteredTasks" :key="task.id" :class="isImportant" @click="showEditOptions(task.id)">
        <div class="card-title">
          {{ task.name }}
        </div>
        <div class="card-content">
          {{ task.description }}{{ task.deadline }}{{ task.important }}
        </div>
      </div>
      <q-modal ref="modal">
        <h4>Basic Modal</h4>
        <button class="primary" @click="$refs.basicModal.close()">Close</button>
      </q-modal>
    </div>
  </q-layout>
</template>

<script>
import { Dialog } from 'quasar'
import Search from '../shared/Search'

export default {
  data () {
    return {
      tasks: [],
      filteredTasks: []
    }
  },
  methods: {
    showEditOptions (id) {
      let self = this
      Dialog.create({
        title: 'Actions',
        message: 'Choose action:',
        stackButtons: true,
        buttons: [
          'Cancel',
          {
            label: 'Finish',
            handler () {
              // console.log(self.tasks[id].id - 1)
            }
          },
          {
            label: 'Delete',
            handler () {
              // delete self.tasks[id].id - 1
            }
          }
        ]
      })
    },
    setFilteredTasks (filteredTasks) {
      this.filteredTasks = filteredTasks
    }
  },
  computed: {
    isImportant () {
      return this.important ? 'card important' : 'card'
    },
    getTasks () {
      let self = this
      this.$http.get('http://localhost:3000/tasks')
      .then(function (response) {
        self.tasks = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
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
  .important
    color red
</style>
