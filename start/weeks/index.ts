import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
	Route.get("/", "WeeksController.index");
}).prefix("/weeks")
	.middleware("auth");
