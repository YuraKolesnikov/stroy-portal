<template>
	<div class="navbar">
		<div class="container">
			<div class="row">
				<div class="col-4">
					<div class="navbar__location"></div>
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
							<router-link to="/" class="navbar__link">Другие сервисы</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.navbar {
	background-color: $gray;
}
</style>