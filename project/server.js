//
// This is the main mock server file
//

var express		= require("express");				// Main server framework
var multipart	= require("connect-multiparty");	// Express middleware for parsing multipart/form-data
var path		= require("path");

// Local files
var data = require("./data.js");

// Set up the Express Application
expressApp = express();
expressApp.use(multipart({ uploadDir: "./uploads"}));
expressApp.use(express.static(path.join(__dirname, "/public"))); // serve up static resources

// Render the Community Projects page
expressApp.get("/", function (request, response) {
	response.sendFile(path.join(__dirname, "./views/communityProjects.html"));
});

// Render the New Project page
expressApp.get("/newProject", function (request, response) {
	response.sendFile(path.join(__dirname, "./views/newProject.html"));
});

expressApp.post("/newProject", function (request, response) {
	request.files.image.path
});

expressApp.get("/categories", function (request, response) {
	response.send(data.categories);
});

expressApp.get("/featuredProjects", function (request, response) {
	response.send(data.featuredProjects);
});

expressApp.get("/projects", function (request, response) {
	response.send(data.getRandomNumberOfProjects());
});

expressApp.get("/projects/:category", function (request, response) {
	response.send(data.getProjectsForCategory(request.params.category));
});

// Start the server
var port = process.argv[2] || 8080;
expressApp.listen(port, function () {
	console.log("You can specify which port to use by running `node server.js [port #]`");
	console.log("Server running on %d", port);
});
