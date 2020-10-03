<template>
	<div class="text-input">
		<input type="text" class="text-input__input" :placeholder="placeholder" @input="$emit('input', $event)" :value="value">
		<button class="text-input__button" @click="clearSearchValue">
			<icon v-if="!value" icon="search" color="gray" />
			<div v-else>&times;</div>
		</button>
	</div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
	props: {
		placeholder: String,
		value: String
	},
	components: {
		Icon
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
	padding: 8px;
	font-weight: 40;
	font-size: 14px;
	display: flex;
	align-items: center;

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

		svg {
			transform: translateY(-1px);
		}

		div {
			display: block;
			font-size: 25px;
			color: $dark-gray;
			height: 100%;
			line-height: 21px;
		}
	}

	
}
</style>