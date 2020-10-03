<template>
	<div class="search-bar">
		<div class="container">
			<div class="row align-items-center">
				<div class="logo">
					<img class="search-bar__logo" src="@/assets/img/logo.png" alt="">
				</div>
				<div class="catalogue">
					<button class="search-bar__catalogue">
						<icon icon="hamburger" />
						Каталог
					</button>
				</div>
				<div class="input">
					<text-input placeholder="Хочу найти..." :value="searchValue" @input="updateSearchValue" @clearSearchValue="clearSearchValue" />
					<transition name="fade">
						<results :search-value="searchValue" :search-results="filteredList" @selectItem="clearSearchValue" />
					</transition>
				</div>
				<div class="list">
					<button class="search-bar__list">
						Список
					</button>
				</div>
				<div class="profile">
					<div class="search-bar__profile-button">
						A
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import data from '@/assets/data/data.json'
import { dataFilter } from '@/utils/utils'
import TextInput from '@/components/TextInput'
import Icon from '@/components/Icon'
import Results from '@/components/Results'
export default {
	components: {
		TextInput,
		Icon,
		Results
	},
	data() {
		return {
			searchValue: '',
			searchResults: data
		}
	},
	methods: {
		updateSearchValue({ target }) {
			this.searchValue = target.value
		},
		clearSearchValue() {
			this.searchValue = ''
		}
	},
	computed: {
		filteredList() {
			if (!this.searchValue) return this.searchResults
			const array = this.searchResults.filter(dataFilter(this.searchValue))
			return array
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
		cursor: pointer;
		width: 100%;
		height: 100%;
		border: 0;
		height: 100%;
		border-radius: 4px;
		padding: 8px 16px;
		font-weight: 600;
		background-color: $accent-1;

		&:focus {
			outline: none;
		}
	}

	&__results {
		
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

	.catalogue {
		margin-left: 24px;
	}

	.input {
		flex: 0 0 50%;
		margin: 0 24px;
		position: relative;
	}

	.list {
		margin-right: 24px;
	}
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>