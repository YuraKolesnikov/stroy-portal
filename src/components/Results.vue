<template>
	<div class="results" v-if="!!searchValue">
		<ul class="results__list">
			<li
				@click="$emit('selectItem')"
				v-for="item in searchResults"
				:key="`item_${item.vin}`" 
				class="results__item">
				<p><strong>Manufacturer: </strong>{{ item.manufacturer }}</p>
				<p><strong>Model: </strong>{{ item.model }}</p>
				<p><strong>VIN: </strong>{{ item.vin }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		searchValue: String,
		searchResults: Array
	}
}
</script>

<style lang="scss" scoped>
.results {
	width: 100%;
	position: absolute;
	height: 400px;
	overflow-y: auto;
	border: 1px solid $gray;
	border-top-width: 0px;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	z-index: 10;
	background-color: #FFF;

	&__list {
		padding: 0;
		cursor: pointer;
	}

	&__item {
		padding: 10px 15px;
		border-bottom: 1px solid $gray;

		&:hover {
			background-color: $light-gray;
		}

		p {
			margin: 0;
		}
	}
}
</style>