<template>
	<v-row>
		<v-overlay :value="loading" color="rgba(236, 240, 245, 1)" absolute>
			<v-progress-circular color="#409EFF" indeterminate size="64"></v-progress-circular>
		</v-overlay>
		<v-col>
			<v-row>
				<v-col>
					<v-row>
						<v-col cols="6" md="4" v-for="(color, index) in colors" :key="index">
							<ColorCard :color="color" @click="copyClipboard"/>
						</v-col>
					</v-row>
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<v-container class="max-width">
						<v-pagination
							v-model="page"
							class="my-4"
							:length="totalPages"
						></v-pagination>
					</v-container>
				</v-col>
			</v-row>
			<DialogCopy ref="dialogCopy"/>
			<ErrorBar v-model="snackbar" :text="text" />
		</v-col>
	</v-row>
</template>

<script>
import ColorService from '../services/ColorService.js';
import ColorCard from './ColorCard';
import DialogCopy from './DialogCopy';

export default {
	name: 'ColorGrid',
	components: { ColorCard, DialogCopy },
	data() {
		return {
			colors: [],
			page: 1,
			totalPages: 1,
			loading: true,
			snackbar: false,
			text: 'Ha ocurrido un error'
		}
	},
	mounted() {
		this.loadColors();
	},
	watch: {
		page(v) {
			this.loadColors(v);
		}
	},
	methods: {
		async loadColors(page = 1) {
			this.loading = true;
			this.snackbar = false;
			try {
				let data = await new ColorService().load(page);
				this.colors = data.data;
				this.totalPages = data.total_pages;
			} catch (error) {
				this.snackbar = true;
			} finally {
				this.loading = false;
			}
		},
		copyClipboard(color) {
			this.$copyText(color.color).then(() => {
				this.$refs.dialogCopy.open(color);
			}, function (e) {
				alert('Can not copy')
				console.log(e)
			})
		}
	}
}
</script>