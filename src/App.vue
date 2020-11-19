<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Colors</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Layout/>
      </v-container>
    </v-main>
    <v-footer app>
      2020 @ Bárbara Melero López
    </v-footer>
  </v-app>
</template>

<script>
import Layout from './layout/Layout';

export default {
  name: 'App',

  components: {
    Layout
  },

  data: () => ({
    //
  }),
};
</script>
