<template>
	<div class="text-input">
		<input type="text" class="text-input__input" :placeholder="placeholder" @input="$emit('input', $event)" :value="value">
		<button class="text-input__button" @click="clearSearchValue">
			{{ value ? 'C' : 'S' }}
		</button>
	</div>
</template>

<script>
export default {
	props: {
		placeholder: String,
		value: String
	},
	methods: {
		clearSearchValue() {
			if (!this.value) return
			this.$emit('clearSearchValue')
		}
	}
}
</script>

<style lang="scss" scoped>
.text-input {
	color: $dark;
	border: 1px solid #ECEFF1;
	box-sizing: border-box;
	border-radius: 4px;
	width: 100%;
	padding: 7px;
	font-weight: 40;
	font-size: 14px;

	&__input {
		width: calc(100% - 20px);
		border: 0;
		appearance: none;

		&::placeholder {
			color: inherit;
			color: $dark-gray;
		}
		&:focus {
			outline: none;
		}
	}

	&__button {
		border: 0;
		width: 20px;
		height: 20px;
		padding: 0;
		
		&:focus, &:active {
			outline: none;
		}
	}
}
</style>