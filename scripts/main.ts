import { world } from "@minecraft/server";
import { NightVisionConsumeComponent } from "./NightVisionConsumeComponent";

world.beforeEvents.worldInitialize.subscribe((initEvent) => {
  initEvent.itemComponentRegistry.registerCustomComponent(
    "test_component:give_night_vision_on_consume",
    new NightVisionConsumeComponent()
  );
});
