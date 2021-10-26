import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
	Route.get("/", "TrainingsController.index");
	Route.post("/", "TrainingsController.store");
	Route.put("/:id", "TrainingsController.update");
	Route.delete("/:id", "TrainingsController.delete");
}).prefix("/trainings")
	.middleware("auth");
