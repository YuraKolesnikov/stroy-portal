<template>
	<div class="navbar">
		<div class="container">
			<div class="row justify-content-between">
				<div class="col-4">
					<div class="navbar__location">
						<icon icon="location" color="gray" />
						Волгоградская область
					</div>
				</div>
				<div class="col-5">
					<ul class="navbar__nav">
						<li class="navbar__item">
							<router-link to="/" class="navbar__link">Тендеры</router-link>
						</li>
						<li class="navbar__item">
							<router-link to="/" class="navbar__link">База подрядчиков</router-link>
						</li>
						<li class="navbar__item">
							<router-link to="/" class="navbar__link">
								Другие сервисы
								<icon icon="chevron-down" color="gray" />
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
	components: {
		Icon
	}
}
</script>

<style lang="scss" scoped>
.navbar {
	background-color: $gray;
	padding: 6px 0;
	font-size: 12px;
	font-weight: 400;

	&__location {
		color: $dark-gray;
		cursor: pointer;

		svg {
			max-height: 15px;
		}
	}

	&__nav {
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	&__item {
		margin-left: 24px;
	}

	&__link {
		color: $dark-gray;

		&:hover {
			color: lighten($dark-gray, 10%);
		}
	}
}
</style>