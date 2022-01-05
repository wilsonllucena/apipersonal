import Route from "@ioc:Adonis/Core/Route";

Route.post("/users", "UsersController.create");

Route.group(() => {
	Route.get("/", "UsersController.index");
  Route.get("/:id", "UsersController.show");
	Route.put("/:id", "UsersController.update");
	Route.delete("/:id", "UsersController.delete");
}).prefix("/users")
	// .middleware("auth");
