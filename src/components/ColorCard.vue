<template>
  <v-card
    class="mx-auto"
    :color="color.color"
    max-width="344"
    outlined
    @click="$emit('click', color)"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          {{ color.year }}
        </div>
        <v-list-item-title class="headline mb-1">
          {{ color.name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ color.color }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      {{ color.pantone_value }}
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
	name: 'ColorCard',
	props: {
		color: {
			type: Object,
			required: true
		}
	}
}
</script>