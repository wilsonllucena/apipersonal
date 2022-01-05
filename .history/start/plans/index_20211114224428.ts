import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
	Route.get("/", "GendersController.index");
	Route.post("/", "GendersController.create");
	Route.put("/:id", "GendersController.update");
	Route.delete("/:id", "GendersController.delete");
}).prefix("/genders")
	.middleware("auth");
