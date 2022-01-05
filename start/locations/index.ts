import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
	Route.get("/", "LocationsController.index");
}).prefix("/locations")
	.middleware("auth");
