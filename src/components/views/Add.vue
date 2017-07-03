<template>
  <q-layout>
    <!-- Header -->
    <div slot="header" class="toolbar">
      <q-toolbar-title :padding="1">
        TODO LIST
      </q-toolbar-title>
    </div>
    <!-- Navigation Tabs -->
    <q-tabs slot="navigation">
      <q-tab icon="search" route="/" exact replace>Show</q-tab>
      <q-tab icon="add" route="/add" exact replace>Add</q-tab>
      <q-tab icon="check" route="/done" exact replace>Done</q-tab>
    </q-tabs>
    <div class="layout-view"></div>
  </q-layout>
</template>

<script>
import { Dialog } from 'quasar'

export default {
  data () {
    return {
      task: {
        name: '',
        description: '',
        deadline: '',
        important: false
      }
    }
  },
  created () {
    Dialog.create({
      title: 'Add task',
      form: {
        name: {
          type: 'textbox',
          label: 'Name',
          model: ''
        },
        description: {
          type: 'textarea',
          label: 'Description',
          model: ''
        },
        deadline: {
          type: 'date', // not working
          label: '',
          model: ''
        },
        important: {
          type: 'checkbox',
          items: [
            { label: 'Important', value: 'important', model: false }
          ]
        }
      },
      buttons: [
        'Cancel',
        {
          label: 'Ok'
          // handler (data) { }
        }
      ]
    })
  }
}
</script>

<style lang="stylus">
  .layout-view
    padding 10px
</style>
