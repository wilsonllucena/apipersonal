import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
	Route.get("/", "TenantController.index");
	Route.post("/", "TenantController.create");
	Route.put("/:id", "TenantController.update");
	Route.delete("/:id", "TenantController.delete");
}).prefix("/tenants")
	.middleware("auth");
