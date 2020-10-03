<template>
	<svg class="icon" :class="`icon--${color}`">
		<use :xlink:href="`assets/icons.svg#${icon}`"></use>
	</svg>
</template>
<script>
export default {
	props: {
		icon: String,
		color: {
			type: String,
			default: 'black'
		}
	}
}
</script>
<style lang="scss" scoped>
.icon {
	max-height: 20px;
	max-width: 20px;

	&--gray {
		stroke: $dark-gray;
	}	

	&--black {
		stroke: $dark;
	}
}
</style>