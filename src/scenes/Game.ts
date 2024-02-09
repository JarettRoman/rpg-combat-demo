import { Scene } from 'phaser';

class TurnQueue {
  queue: Array<any>;
  place: number;
  constructor (players: Array<any>) {
    this.queue = players.sort((a, b) => {
      return b.dex - a.dex;
    });
    this.place = 0;
  }

  getCurrentPlayer () {
    return this.queue[this.place];
  }

  setNextPlayer () {
    console.log('shifting to next player in queue');
    this.place = (this.place + 1) % this.queue.length;
  }
}

export class Game extends Scene {
  constructor () {
    super('Game');
  }

  create () {
    const playerList = [
      {
        name: 'Bob',
        dex: 10
      },
      {
        name: 'Shirley',
        dex: 12
      },
      {
        name: 'Quartz',
        dex: 14
      },
      {
        name: 'Alonzo',
        dex: 8
      }
    ];

    const turnQueue = new TurnQueue(playerList);

    this.cameras.main.setBackgroundColor(0x00ff00);

    this.add.image(512, 384, 'background').setAlpha(0.5);

    this.add.text(512, 384, 'Make something fun!\nand share it with us:\nsupport@phaser.io', {
      fontFamily: 'Arial Black',
      fontSize: 38,
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 8,
      align: 'center'
    }).setOrigin(0.5);

    this.input.keyboard?.on('keydown-A', () => {
      console.log(turnQueue.getCurrentPlayer());
    });

    this.input.keyboard?.on('keydown-S', () => {
      turnQueue.setNextPlayer();
    });

    this.input.once('pointerdown', () => {
      this.scene.start('GameOver');
    });
  }
}