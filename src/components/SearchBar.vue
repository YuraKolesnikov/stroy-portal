<template>
	<div class="search-bar">
		<div class="container">
			<div class="row">
				<div class="col-2">
					<img class="search-bar__logo" src="@/assets/img/logo.png" alt="">
				</div>
				<div class="col-2">Cat</div>
				<div class="col-6">INPUT</div>
				<div class="col-1">LIST</div>
				<div class="col-1 d-flex justify-content-end">
					<div class="search-bar__profile-button">
						A
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.row div {
	border: 2px solid tomato;
}

.search-bar {
	&__logo {
		width: 100%;
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
</style>