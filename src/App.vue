<template>
  <v-app>
    <v-main>
      <ColorGrid/>
    </v-main>
  </v-app>
</template>

<script>
import ColorGrid from './components/ColorGrid';

export default {
  name: 'App',

  components: {
    ColorGrid
  },

  data: () => ({
    //
  }),
};
</script>
