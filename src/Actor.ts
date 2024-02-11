export interface IActor {
  name: string;
  health: number;
  commands: Array<() => void>;
  stats: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
}

export class Actor {
  name: string;
  health: number;
  commands: Array<() => void>;
  stats: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };

  constructor(options: IActor) {
    this.name = options.name;
    this.health = options.health;
    this.stats = options.stats;
    this.commands = options.commands;
  }
}

export function createActor(
  name: string,
  health: number,
  stats: IActor['stats'],
  commands: IActor['commands']
): Actor {
  return new Actor({ name, health, stats, commands });
}
