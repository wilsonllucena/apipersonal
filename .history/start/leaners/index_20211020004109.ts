import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
	Route.get("/", "LeanersController.index");
	Route.post("/", "LeanersController.store");
	Route.put("/:id", "LeanersController.update");
	Route.delete("/:id", "LeanersController.delete");
}).prefix("/leaners")
	.middleware(["auth", 'is:admin, super-admin']);
