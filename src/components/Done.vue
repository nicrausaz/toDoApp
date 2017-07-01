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
  <div class="layout-view">
    <q-search v-model="searchModel"></q-search>
    {{ searchModel }}
  </div>
</q-layout>
</template>

<script>
export default {
  data () {
    return {
      searchModel: ''
    }
  }
}
</script>

<style lang="stylus">
  .layout-view
    padding 10px
</style>
