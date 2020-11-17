<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card v-if="color" :color="color.color">
        <v-card-title>
          {{ color.name}}
        </v-card-title>

        <v-card-text>
          COPIADO
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            CLOSE
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
	name: 'DialogCopy',
	data() {
		return {
			dialog: false,
			color: null
		}
	},
	methods: {
		open(color) {
			this.color = color;
			this.dialog = true;
		}
	}
}
</script>