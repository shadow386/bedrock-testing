import { ItemComponentUseEvent, world } from "@minecraft/server";
import { NightVisionConsumeComponent } from "./NightVisionConsumeComponent";

let doneLoading = false;

world.beforeEvents.worldInitialize.subscribe((initEvent) => {
  initEvent.itemComponentRegistry.registerCustomComponent(
    "test_component:give_night_vision_on_consume",
    new NightVisionConsumeComponent()
  );

  initEvent.itemComponentRegistry.registerCustomComponent("test_component:check_done_loading", {
    onUse(arg: ItemComponentUseEvent) {
      let factions = world.getDynamicPropertyIds();
      factions.forEach((factionId) => {
        let factionName = world.getDynamicProperty(factionId);
        arg.source.sendMessage(factionId + ": " + factionName);
      });
    },
  });

  doneLoading = true;
});

world.afterEvents.worldInitialize.subscribe(() => {
  world.setDynamicProperty("Faction 1", "Red");
  world.setDynamicProperty("Faction 2", "Blue");
});
