<template>
  <q-layout>
  <div slot="header" class="toolbar">
    <q-toolbar-title :padding="1">
      TODO LIST
    </q-toolbar-title>
  </div>
  <q-tabs slot="navigation">
    <q-tab icon="search" route="/" exact replace>Show</q-tab> <!--try to add a num to icon-->
    <q-tab icon="add" route="/add" exact replace>Add</q-tab>
    <q-tab icon="check" route="/done" exact replace>Done</q-tab>
  </q-tabs>
  <div class="layout-view">
    <div v-for="task in tasks" :class="isImportant" :key="task.id" @click="showEditOptions(task.id)">
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

export default {
  data () {
    return {
      tasks: [
        {id: 1, name: 'TJ', description: 'test', deadline: '01.07.2017', important: true},
        {id: 2, name: 'Basket', description: 'test', deadline: '01.07.2017', important: false},
        {id: 3, name: 'Acheter cadeau', description: 'test', deadline: '01.07.2017', important: true}
      ]
    }
  },
  methods: {
    showEditOptions (id) {
      Dialog.create({
        title: 'Actions',
        message: 'Choose action:',
        stackButtons: true,
        buttons: [
          'Cancel',
          {
            label: 'Finish',
            handler () {
              console.log('finish ' + id)
            }
          },
          {
            label: 'Delete',
            handler () {
              console.log('delete ' + id)
            }
          }
        ]
      })
    }
  },
  computed: {
    isImportant () {
      return this.important ? 'card important' : 'card'
    }
  }
}
</script>

<style lang="stylus">
  .layout-view
    padding 10px
  .important
    color red
</style>
