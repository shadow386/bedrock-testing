import { world, ItemComponentConsumeEvent } from "@minecraft/server";

world.beforeEvents.worldInitialize.subscribe((initEvent) => {
  initEvent.itemComponentRegistry.registerCustomComponent("custom_component:add_night_vision_on_consume", {
    onConsume(arg: ItemComponentConsumeEvent) {
      arg.source.addEffect("minecraft:night_vision", 600);
    },
  });
});
