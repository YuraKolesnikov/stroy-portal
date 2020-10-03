import faker from 'faker'

const myFaker = {
	load() {
		console.log('Faker loaded')
	},
	generateData: function() {
		const data = []
		
		for (let i = 0; i < 100; i++) {
			const obj = {
				vehicle: faker.vehicle.vehicle(),
				manufacturer: faker.vehicle.manufacturer(),
				model: faker.vehicle.model(),
				type: faker.vehicle.type(),
				vin: faker.vehicle.vin(),
				color: faker.vehicle.color()
			}

			data.push(obj)
		}

		return data
	}
}

export default myFaker