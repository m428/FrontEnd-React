//
// This contains all of the mock data
//


module.exports = {}

module.exports.categories = ["Furniture", "Artwork", "Jewelry", "Cabinetry"];

module.exports.featuredProjects = [{
									title: "Pebble Cutting Board",
									description: "Use any hardwood to build your own custom engraved cutting board. Cutting and finishing take roughly 45 minutes. Have fun!",
									posterImage: "/public/images/pebbleCuttingBoard",
									likes: 25
								}, {
									title: "Soapbox Derby Car",
									description: "Make your own soapbox derby car! The project requires a kit for the wheels and hardware. Cutting and assembly takes roughly 6 hours. Stay safe and have fun!",
									posterImage: "/public/images/soapboxDerbyCar",
									likes: 38
								}, {
									title: "Skateboard",
									description: "Have fun cruising on your custom skateboard. We recommend using maple ply. Cutting time takes approximately 30 minutes.",
									posterImage: "/public/images/skateboard",
									likes: 42
								}];

var projects = [{
				title: "Walnut Radio",
				posterImage: "/public/images/walnutRatio",
				likes: 29
			}, {
				title: "Tilt Chair",
				posterImage: "/public/images/tiltChair",
				likes: 41
			}, {
				title: "Carbon Fiber Drone",
				posterImage: "/public/images/carbonFiberDrone",
				likes: 22
			}, {
				title: "Mona Lisa Engraving",
				posterImage: "/public/images/monaLisaEngraving",
				likes: 17
			}, {
				title: "Ring Bowl",
				posterImage: "/public/images/ringBowl",
				likes: 23
			}, {
				title: "Baby Boxcar",
				posterImage: "/public/images/babyBoxcar",
				likes: 22
			}, {
				title: "Peg Hop Game",
				posterImage: "/public/images/pegHopGame",
				likes: 54
			}, {
				title: "Brass Pendant",
				posterImage: "/public/images/brassPendant",
				likes: 74
			}, {
				title: "Heart Shaped Box",
				posterImage: "/public/images/heartShapedBox",
				likes: 16
			}, {
				title: "Pour Over Coffee Stand",
				posterImage: "/public/images/pourOverCoffeeStand",
				likes: 28
			}, {
				title: "Rocking Horse",
				posterImage: "/public/images/rockingHorse",
				likes: 24
			}, {
				title: "Apple Box",
				posterImage: "/public/images/appleBox",
				likes: 18
			}, {
				title: "Handplane",
				posterImage: "/public/images/handplane",
				likes: 33
			}, {
				title: "Cardboard Box Car",
				posterImage: "/public/images/cardboardBoxCar",
				likes: 46
			}, {
				title: "Copper Bracelets",
				posterImage: "/public/images/copperBracelets",
				likes: 12
			}, {
				title: "Opendesk Studio Desk",
				posterImage: "/public/images/opendeskStudioDesk",
				likes: 19
			}, {
				title: "Ukulele",
				posterImage: "/public/images/ukulele",
				likes: 19
			}, {
				title: "Brass Dog Tag",
				posterImage: "/public/images/brassDogTag",
				likes: 11
			}, {
				title: "Opendesk Edie Stool",
				posterImage: "/public/images/openDeskEdieStool",
				likes: 23
			}, {
				title: "Elm Coffee Table",
				posterImage: "/public/images/elmCoffeeTable",
				likes: 26
			}, {
				title: "Linoleum Block",
				posterImage: "/public/images/linoleumBlock",
				likes: 21
			}, {
				title: "Screwdriver Cleat Project",
				posterImage: "/public/images/screwdriverCleatProject",
				likes: 32
			}, {
				title: "Cleat Light",
				posterImage: "/public/images/cleatLight",
				likes: 25
			}]

function randomIntIncludeUpper(low, high) {
	return Math.ceil(Math.random * (high - low) + low);
}

module.exports.getRandomNumberOfProjects = function () {
	return projects.slice(0, randomIntIncludeUpper(6, projects.length));
};

module.exports.getProjectsForCategory = function () {
	var categories = projects.slice(0, randomIntIncludeUpper(6, projects.length));
};
