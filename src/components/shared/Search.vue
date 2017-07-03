<template>
  <div id="search">
    <q-search v-model="searchModel" id="searchBar"></q-search>
    {{filter}}
  </div>
</template>

<script>
export default {
  name: 'search',
  props: ['tasks'],
  data () {
    return {
      searchModel: ''
    }
  },
  computed: {
    filter () {
      let searchText = this.searchModel
      let tasks = this.tasks

      if (searchText === '') {
        this.$emit('sort', tasks)
      }
      searchText = searchText.trim().toLowerCase()
      tasks = tasks.filter((item) => {
        if (item.name.toLowerCase().indexOf(searchText) !== -1) {
          return item
        }
      })
      this.$emit('sort', tasks)
    }
  }
}
</script>

<style lang="stylus">
  #searchBar
    padding-bottom 20px
</style>
