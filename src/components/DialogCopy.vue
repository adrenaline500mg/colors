<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <v-card v-if="color" :color="color.color">
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">
              {{ color.year }}
            </div>
            <v-list-item-title class="headline mb-1">
              COPIADO
            </v-list-item-title>
            <v-list-item-subtitle>{{ color.color }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
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