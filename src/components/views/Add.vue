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
import { Dialog, Toast } from 'quasar'

export default {
  data () {
    return {
      task: {
        name: '',
        description: '',
        deadline: new Date(),
        important: false
      }
    }
  },
  methods: {
    toastInfo () {
      Toast.create.warning({
        html: 'Task name must be filled',
        timeout: 2500
      })
    },
    checkData (data) {
      return data.name === ''
    },
    addTask (data) {
      this.$http.post('http://localhost:3000/add', {
        name: data.name,
        description: data.description,
        deadline: new Date(), // data.deadline
        important: data.important
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  },
  created () {
    let self = this
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
          label: 'Limit date',
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
          label: 'Ok',
          handler (data) {
            if (!self.checkData(data)) {
              self.addTask()
            }
            else {
              self.toastInfo()
            }
          }
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
