import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
	Route.get("/", "FrequenciesController.index");
}).prefix("/frequencies")
	.middleware("auth");
