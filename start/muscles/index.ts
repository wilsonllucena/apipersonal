import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
	Route.get("/", "MusclesController.index");
	Route.post("/", "MusclesController.store");
	Route.put("/:id", "MusclesController.update");
	Route.delete("/:id", "MusclesController.delete");
}).prefix("/muscles")
	.middleware("auth");
