import { Scene } from 'phaser';
import { Actor, createActor } from '../Actor';

class TurnQueue {
  queue: Array<Actor>;
  place: number;
  constructor(players: Array<Actor>) {
    this.queue = players.sort((a, b) => {
      return b.stats.dexterity - a.stats.dexterity;
    });
    this.place = 0;
  }

  getCurrentPlayer(): Actor {
    return this.queue[this.place];
  }

  setNextPlayer(): Actor {
    console.log('shifting to next player in queue');
    this.place = (this.place + 1) % this.queue.length;
    return this.queue[this.place];
  }
}

export class Game extends Scene {
  constructor() {
    super('Game');
  }

  createActorList(): Array<Actor> {
    return [
      createActor(
        'Cloud',
        10,
        {
          strength: 10,
          dexterity: 10,
          constitution: 10,
          intelligence: 10,
          wisdom: 10,
          charisma: 10,
        },
        [
          () => console.log('foo'),
          () => console.log('bar'),
          () => console.log('baz'),
        ]
      ),
      createActor(
        'Barret',
        12,
        {
          strength: 12,
          dexterity: 9,
          constitution: 14,
          intelligence: 11,
          wisdom: 12,
          charisma: 10,
        },
        [
          () => console.log('straw'),
          () => console.log('sticks'),
          () => console.log('bricks'),
        ]
      ),
      createActor(
        'Tifa',
        9,
        {
          strength: 10,
          dexterity: 14,
          constitution: 9,
          intelligence: 12,
          wisdom: 10,
          charisma: 11,
        },
        [
          () => console.log('one'),
          () => console.log('two'),
          () => console.log('three'),
        ]
      ),
    ];
  }

  create() {
    const combatantList = this.createActorList();

    const turnQueue = new TurnQueue(combatantList);
    let selectedActor = turnQueue.getCurrentPlayer();

    this.cameras.main.setBackgroundColor(0x00ff00);

    this.add.image(
      512, 384, 'background'
    ).setAlpha(0.5);

    this.add
      .text(
        512,
        384,
        'Make something fun!\nand share it with us:\nsupport@phaser.io',
        {
          fontFamily: 'Arial Black',
          fontSize: 38,
          color: '#ffffff',
          stroke: '#000000',
          strokeThickness: 8,
          align: 'center',
        }
      )
      .setOrigin(0.5);

    this.input.keyboard?.on('keydown-A', () => {
      console.log(selectedActor);
    });

    this.input.keyboard?.on('keydown-S', () => {
      selectedActor = turnQueue.setNextPlayer();
    });

    this.input.keyboard?.on('keydown-D', () => {
      selectedActor.commands[0]();
    });

    this.input.once('pointerdown', () => {
      this.scene.start('GameOver');
    });
  }
}
