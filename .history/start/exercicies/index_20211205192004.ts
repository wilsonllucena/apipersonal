import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
	Route.get("/", "ExerciciesController.index");
	Route.post("/", "ExerciciesController.store");
	Route.put("/:id", "ExerciciesController.update");
  Route.get("/:id", "ExerciciesController.show");
  Route.get("/muscle/:muscleId", "ExerciciesController.getExerciciesByMuscleId");
	Route.delete("/:id", "ExerciciesController.destroy");


}).prefix("/exercicies")
	.middleware("auth");
