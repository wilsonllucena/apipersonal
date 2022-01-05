import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
	Route.get("/", "PlansController.index");
}).prefix("/plans")
	.middleware("auth");
