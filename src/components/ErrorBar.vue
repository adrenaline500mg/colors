<template>
	<v-snackbar v-model="snackbar">
		{{ text }}

		<template v-slot:action="{ attrs }">
		<v-btn color="pink" text  v-bind="attrs" @click="snackbar = false">
			Cerrar
		</v-btn>
		</template>
    </v-snackbar>
</template>

<script>
export default {
	name: 'ErrorBar',
	props: {
		text: {
			type: String,
			default: ''
		},
		value: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			snackbar: this.value
		};
	}
}
</script>