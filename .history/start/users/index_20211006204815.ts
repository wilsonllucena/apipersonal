import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
	Route.get("/", "UsersController.index");
	Route.post("/", "UsersController.create");
	Route.put("/:id", "UsersController.update");
	Route.delete("/:id", "UsersController.delete");
}).prefix("/users")
	.middleware("auth");
