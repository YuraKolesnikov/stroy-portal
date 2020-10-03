<template>
	<div class="search-bar">
		<div class="container">
			<div class="row align-items-center">
				<div class="w-20">
					<img class="search-bar__logo" src="@/assets/img/logo.png" alt="">
				</div>
				<div class="w-10">
					<button class="search-bar__catalogue">
						Каталог
					</button>
				</div>
				<div class="w-50">
					<text-input placeholder="Хочу найти..." :value="searchValue" @input="updateSearchValue" @clearSearchValue="clearSearchValue" />
				</div>
				<div class="w-10">
					<button class="search-bar__list">
						Список
					</button>
				</div>
				<div class="w-5">
					<div class="search-bar__profile-button">
						A
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import TextInput from '@/components/TextInput'
export default {
	components: {
		TextInput
	},
	data() {
		return {
			searchValue: ''
		}
	},
	methods: {
		updateSearchValue({ target }) {
			this.searchValue = target.value
		},
		clearSearchValue() {
			this.searchValue = ''
		}
	}
}
</script>

<style lang="scss" scoped>
.search-bar {
	padding: 18px 0;

	&__logo {
		max-width: 221px;
	}

	&__catalogue {
		width: 100%;
		height: 100%;
		border: 0;
		height: 100%;
		border-radius: 4px;
		padding: 8px 16px;
		font-weight: 600;
		background-color: $accent-1;
	}

	&__list {
		width: 100%;
		border: 1px solid #ECEFF1;
		border-radius: 4px;
		height: 100%;
		border-radius: 4px;
		padding: 8px 16px;
		font-weight: 600;
		background-color: $light-gray;
	}

	&__profile-button {
		height: 40px;
		width: 40px;
		border-radius: 50%;
		color: #FFF;
		background-color: $accent-2;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}

.w-5,
.w-10,
.w-20,
.w-50 {
	max-height: 40px;
}

.w-5:not(:last-child),
.w-10:not(:last-child),
.w-20:not(:last-child),
.w-50:not(:last-child) {
	margin-right: 24px;
}

.w-5 { flex: 0 0 calc(5% - 12px); }
.w-10 { flex: 0 0 calc(10% - 12px); }
.w-20 { flex: 0 0 calc(20% - 12px); }
.w-50 { flex: 0 0 calc(50% - 12px); }
</style>