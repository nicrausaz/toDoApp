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
    <q-tab icon="search" route="/layout" exact replace>Show</q-tab>
    <q-tab icon="edit" route="/layout/alarm" exact replace>Edit</q-tab>
    <q-tab icon="check" route="/layout/help" exact replace>Done</q-tab>
  </q-tabs>
  <div class="layout-view">
    <div class="card" v-for="i in 10" :key="i">
      <div class="card-content">
        Card Content
      </div>
    </div>
  </div>
</q-layout>
</template>

<script>

import { Utils, Platform } from 'quasar'

export default {

}
</script>

<style lang="stylus">
  .layout-view
    padding 10px
</style>
