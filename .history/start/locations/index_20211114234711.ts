import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
	Route.get("/", "IntensitiesController.index");
}).prefix("/intensities")
	.middleware("auth");
