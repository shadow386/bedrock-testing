import { ItemComponentConsumeEvent, ItemCustomComponent } from "@minecraft/server";

export class NightVisionConsumeComponent implements ItemCustomComponent {
  onConsume(arg: ItemComponentConsumeEvent): void {
    arg.source.addEffect("minecraft:night_vision", 600);
  }
}
