import Route from "@ioc:Adonis/Core/Route";
import { is } from "App/constants/roles";

Route.group(() => {
	Route.get("/", "LeanersController.index");
	Route.post("/", "LeanersController.store");
	Route.put("/:id", "LeanersController.update");
  Route.get("/:id", "LeanersController.show");
	Route.delete("/:id", "LeanersController.destroy");
}).prefix("/leaners")
	.middleware(["auth", `${is(["ADMIN", 'PERSONAL'])}`]);
