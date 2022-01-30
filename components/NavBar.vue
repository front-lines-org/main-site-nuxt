<template>
  <v-toolbar color="elevation-0">
    <v-toolbar-title>
      <img src="/logo_transparent.png" width="200px" />
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
    <avatar />
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </v-toolbar>
</template>
<script>
export default {
  props: {
    title: {
      type: Boolean,
      default: false,
    },
    onOpenMenu: {
      type: String,
      default: 'primary',
    },
  },
  computed: {
    user() {
      return this.$auth.state.user
    },
  },
}
</script>

SearchBar
