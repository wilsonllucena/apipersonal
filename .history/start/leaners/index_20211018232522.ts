import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
	Route.get("/", "ExerciciesController.index");
	Route.post("/", "ExerciciesController.store");
	Route.put("/:id", "ExerciciesController.update");
	Route.delete("/:id", "ExerciciesController.delete");
}).prefix("/exercicies")
	.middleware("auth");
