var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../../Phaser/gameobjects/Tilemap.ts" />
/// <reference path="../../Phaser/Game.ts" />
var Actor = (function (_super) {
    __extends(Actor, _super);
    function Actor(game) {
        _super.call(this, game);
        this.speed = 50;
        this.attackPower = 1;
        this.acceleration.y = 980;
        this.velocity.x = 50;
        this.x = game.rnd.integerInRange(1, 600);
        this.y = game.rnd.integerInRange(1, 200);
        this.health = 100;
    }
    Actor.prototype.update = function () {
        if(this.x > 620) {
            this.sendRight();
        }
        if(this.x < 0) {
            this.sendLeft();
        }
        //if (this.y > 620) this.reset(this.x, 0);
        if(this.y > 620) {
            this.kill();
        }
        if(this.isTouching(Phaser.Collision.LEFT)) {
            this.sendLeft();
        }
        if(this.isTouching(Phaser.Collision.RIGHT)) {
            this.sendRight();
        }
        if(this._game.motion.distanceToMouse(this) < 20 && this._game.input.mouse.isDown) {
            //console.log(' clicked ' + this.constructor.name);
                    }
    };
    Actor.prototype.sendLeft = function () {
        this.velocity.x = this.speed;
        this.flipped = false;
    };
    Actor.prototype.sendRight = function () {
        this.velocity.x = this.speed * -1;
        this.flipped = true;
    };
    return Actor;
})(Phaser.Sprite);
var Marksman = (function (_super) {
    __extends(Marksman, _super);
    function Marksman(game) {
        _super.call(this, game);
        this.loadGraphic('marksman_ss_31x24');
        this.animations.add('run', [
            0, 
            1, 
            2, 
            3, 
            4, 
            5, 
            6, 
            7, 
            8, 
            9
        ], 12, true);
        this.animations.add('attack', [
            10, 
            11, 
            12, 
            13, 
            14, 
            15, 
            16, 
            17, 
            18, 
            19
        ], 12, true);
        this.animations.play('run');
        this.speed = 50;
        this.attackPower = 4;
    }
    return Marksman;
})(Actor);
var Succubus = (function (_super) {
    __extends(Succubus, _super);
    function Succubus(game) {
        _super.call(this, game);
        this.speed = 50;
        this.attackPower = 5;
        this.loadGraphic('succubus_ss_35x30');
        this.animations.add('run', [
            7, 
            8, 
            9, 
            10, 
            11, 
            12, 
            13, 
            14, 
            15, 
            16
        ], 12, true);
        this.animations.add('attack', [
            0, 
            1, 
            2, 
            3, 
            4, 
            5, 
            6
        ], 24, true);
        this.animations.play('run');
        this.velocity.x = this.speed * -1;
        this.flipped = true;
    }
    return Succubus;
})(Actor);
var Mistress = (function (_super) {
    __extends(Mistress, _super);
    function Mistress(game) {
        _super.call(this, game);
        this.speed = 60;
        this.attackPower = 8;
        this.loadGraphic('mistress_ss_35x30');
        this.animations.add('run', [
            7, 
            8, 
            9, 
            10, 
            11, 
            12, 
            13, 
            14, 
            15, 
            16
        ], 12, true);
        this.animations.add('attack', [
            0, 
            1, 
            2, 
            3, 
            4, 
            5, 
            6
        ], 24, true);
        this.animations.play('run');
        this.velocity.x = this.speed;
        this.flipped = false;
    }
    return Mistress;
})(Actor);
var Medusa = (function (_super) {
    __extends(Medusa, _super);
    function Medusa(game) {
        _super.call(this, game);
        this.speed = 60;
        this.attackPower = 6;
        this.loadGraphic('medusa_ss_35x30');
        this.animations.add('run', [
            7, 
            8, 
            9, 
            10, 
            11, 
            12, 
            13, 
            14, 
            15, 
            16
        ], 12, true);
        this.animations.add('attack', [
            0, 
            1, 
            2, 
            3, 
            4, 
            5, 
            6
        ], 24, true);
        this.animations.play('run');
        this.velocity.x = this.speed;
        this.flipped = false;
    }
    return Medusa;
})(Actor);
var Warlock = (function (_super) {
    __extends(Warlock, _super);
    function Warlock(game) {
        _super.call(this, game);
        this.speed = 20;
        this.attackPower = 2;
        this.loadGraphic('warlock_ss_22x29');
        this.animations.add('run', [
            5, 
            6, 
            7, 
            8, 
            9
        ], 12, true);
        this.animations.add('idle', [
            0, 
            1, 
            2, 
            3
        ], 12, true);
        this.animations.add('attack', [
            11, 
            12
        ], 6, true);
        this.animations.play('run');
        this.velocity.x = this.speed * -1;
        this.flipped = true;
    }
    return Warlock;
})(Actor);
var Automaton = (function (_super) {
    __extends(Automaton, _super);
    function Automaton(game) {
        _super.call(this, game);
        this.speed = 25;
        this.attackPower = 1;
        this.loadGraphic('automaton_ss_11x24');
        this.animations.add('run', [
            0, 
            1, 
            2, 
            3, 
            4, 
            5, 
            6, 
            7
        ], 12, true);
        this.animations.add('idle', [
            0
        ], 12, true);
        this.animations.add('attack', [
            2, 
            4
        ], 18, true);
        this.animations.play('run');
        this.velocity.x = this.speed * -1;
        this.flipped = true;
    }
    return Automaton;
})(Actor);
var Corsair = (function (_super) {
    __extends(Corsair, _super);
    function Corsair(game) {
        _super.call(this, game);
        this.speed = 60;
        this.attackPower = 12;
        this.loadGraphic('corsair_18x21');
        this.animations.add('run', [
            0, 
            1, 
            2, 
            3, 
            4, 
            5
        ], 12, true);
        this.animations.add('idle', [
            0
        ], 12, true);
        this.animations.add('attack', [
            0, 
            1, 
            2
        ], 12, true);
        this.animations.play('run');
        this.velocity.x = this.speed * -1;
        this.flipped = true;
    }
    return Corsair;
})(Actor);
var Executor = (function (_super) {
    __extends(Executor, _super);
    function Executor(game) {
        _super.call(this, game);
        this.speed = 40;
        this.attackPower = 20;
        this.loadGraphic('executor_ss_17x21');
        this.animations.add('run', [
            0, 
            1, 
            2, 
            3, 
            4, 
            5, 
            6, 
            7
        ], 12, true);
        this.animations.add('idle', [
            0
        ], 12, true);
        this.animations.add('attack', [
            0, 
            1, 
            2
        ], 12, true);
        this.animations.play('run');
        this.velocity.x = this.speed * -1;
        this.flipped = true;
    }
    return Executor;
})(Actor);
var Harvester = (function (_super) {
    __extends(Harvester, _super);
    function Harvester(game) {
        _super.call(this, game);
        this.multiplier = 1;
        this.speed = 90;
        this.attackPower = 100;
        this.loadGraphic('harvester_ss_14x27');
        this.animations.add('run', [
            2, 
            3, 
            4, 
            5, 
            6, 
            7
        ], 12, true);
        this.animations.add('idle', [
            0
        ], 12, true);
        this.animations.add('attack', [
            0, 
            1, 
            2
        ], 12, true);
        this.animations.play('run');
        this.velocity.x = this.speed;
        this.flipped = false;
        this.width = 5;
        // this.onRenderCallback = showKills;
        //this.renderDebug = true;
            }
    return Harvester;
})(Actor);
var Gloom = (function (_super) {
    __extends(Gloom, _super);
    function Gloom(game) {
        _super.call(this, game);
        this.speed = 60;
        this.attackPower = 35;
        this.loadGraphic('gloom_spritesheet');
        this.animations.add('run', [
            0, 
            1, 
            2, 
            3, 
            4, 
            5, 
            6, 
            7
        ], 12, true);
        this.animations.add('idle', [
            0
        ], 12, true);
        this.animations.add('attack', [
            0, 
            1, 
            2
        ], 12, true);
        this.animations.play('run');
        this.velocity.x = this.speed;
        this.flipped = false;
    }
    return Gloom;
})(Actor);
var Unicorn = (function (_super) {
    __extends(Unicorn, _super);
    function Unicorn(game) {
        _super.call(this, game);
        this.speed = 60;
        this.attackPower = 22;
        this.loadGraphic('unicorn_ss_20x25');
        this.animations.add('run', [
            2, 
            3, 
            4, 
            5, 
            6, 
            7, 
            8, 
            9
        ], 12, true);
        this.animations.add('idle', [
            0
        ], 12, true);
        this.animations.add('attack', [
            0
        ], 12, true);
        this.animations.play('run');
        this.velocity.x = this.speed;
        this.flipped = false;
    }
    return Unicorn;
})(Actor);
var Vampire = (function (_super) {
    __extends(Vampire, _super);
    function Vampire(game) {
        _super.call(this, game);
        this.speed = 60;
        this.attackPower = 12;
        this.loadGraphic('vampire_ss_14x19');
        this.animations.add('run', [
            0, 
            1, 
            2, 
            3, 
            4, 
            5, 
            6
        ], 12, true);
        this.animations.add('idle', [
            0
        ], 12, true);
        this.animations.add('attack', [
            0, 
            1, 
            2
        ], 12, true);
        this.animations.play('run');
        this.velocity.x = this.speed;
        this.flipped = false;
    }
    return Vampire;
})(Actor);
var Zombie = (function (_super) {
    __extends(Zombie, _super);
    function Zombie(game) {
        _super.call(this, game);
        this.speed = 60;
        this.attackPower = 35;
        this.loadGraphic('zombie_ss_13x19');
        this.animations.add('run', [
            0, 
            1, 
            2, 
            3, 
            4, 
            5, 
            6, 
            7, 
            8, 
            9
        ], 12, true);
        this.animations.add('idle', [
            0
        ], 12, true);
        this.animations.add('attack', [
            0, 
            1, 
            2
        ], 12, true);
        this.animations.play('run');
        this.velocity.x = this.speed;
        this.flipped = false;
    }
    return Zombie;
})(Actor);
var Mummy = (function (_super) {
    __extends(Mummy, _super);
    function Mummy(game) {
        _super.call(this, game);
        this.speed = 60;
        this.attackPower = 13;
        this.loadGraphic('mummy_ss_13x19');
        this.animations.add('run', [
            0, 
            1, 
            2, 
            3, 
            4, 
            5, 
            6, 
            7, 
            8, 
            9
        ], 12, true);
        this.animations.add('idle', [
            0
        ], 12, true);
        this.animations.add('attack', [
            0, 
            1, 
            2
        ], 12, true);
        this.animations.play('run');
        this.velocity.x = this.speed;
        this.flipped = false;
    }
    return Mummy;
})(Actor);
var Paladin = (function (_super) {
    __extends(Paladin, _super);
    function Paladin(game) {
        _super.call(this, game);
        this.speed = 25;
        this.attackPower = 14;
        this.loadGraphic('paladin_ss_16x26');
        this.animations.add('run', [
            0, 
            1, 
            2, 
            3, 
            4, 
            5, 
            6, 
            7
        ], 18, true);
        this.animations.add('idle', [
            0
        ], 12, true);
        this.animations.add('attack', [
            0, 
            1, 
            2
        ], 12, true);
        this.animations.play('run');
        this.velocity.x = this.speed;
        this.flipped = false;
    }
    return Paladin;
})(Actor);
var Tormentor = (function (_super) {
    __extends(Tormentor, _super);
    function Tormentor(game) {
        _super.call(this, game);
        this.speed = 60;
        this.attackPower = 17;
        this.loadGraphic('tormentor_ss_13x24');
        this.animations.add('run', [
            6, 
            7, 
            8
        ], 12, true);
        this.animations.add('idle', [
            0
        ], 12, true);
        this.animations.add('attack', [
            0, 
            1, 
            2
        ], 12, true);
        this.animations.play('run');
        this.velocity.x = this.speed;
        this.flipped = false;
    }
    return Tormentor;
})(Actor);
var Prism = (function (_super) {
    __extends(Prism, _super);
    function Prism(game) {
        _super.call(this, game);
        this.gameOver = false;
        this.loadGraphic('prism_ss_14x20');
        this.animations.add('run', [
            10, 
            11, 
            12, 
            13, 
            14, 
            15, 
            14, 
            13, 
            12, 
            11
        ], game.rnd.integerInRange(6, 18), true);
        this.animations.play('run');
    }
    Prism.prototype.update = function () {
        if(this.gameOver) {
            //this.scale.x += 0.1;
            //this.scale.y += 0.1;
            this.acceleration.y = -100;
        }
        //if (this.animations.currentAnim.frame == 5) {
        //    //console.log('ok frame on prism ' + this.animations.currentAnim.frame);
        //    //this._game.sound.play('bing', 0.1);
        //    this.scale.setTo(1.1, 1.1);
        //}
        //else {
        //    this.scale.setTo(1,1);
        //}
            };
    return Prism;
})(Phaser.Sprite);
var Seraphine = (function (_super) {
    __extends(Seraphine, _super);
    function Seraphine(game) {
        _super.call(this, game);
        this.loadGraphic('seraphine_ss_24x30');
        this.animations.add('run', [
            0, 
            1, 
            2, 
            3, 
            4, 
            5, 
            6, 
            7, 
            8, 
            9
        ], 12, true);
        this.animations.add('idle', [
            0
        ], 12, true);
        this.animations.add('attack', [
            0, 
            1, 
            2
        ], game.rnd.integerInRange(6, 12), true);
        this.animations.play('run');
        this.flipped = false;
    }
    return Seraphine;
})(Phaser.Particle);
var Bat = (function (_super) {
    __extends(Bat, _super);
    function Bat(game) {
        _super.call(this, game);
        this.loadGraphic('batParticles_12x12');
        this.animations.add('run', [
            0, 
            1, 
            2
        ], game.rnd.integerInRange(6, 12), true);
        this.animations.play('run');
        this.flipped = false;
    }
    return Bat;
})(Phaser.Particle);
(function () {
    var myGame = new Phaser.Game(this, 'game', 640, 640, init, create, update);
    function init() {
        myGame.loader.addImageFile('bg', 'haunting/assets/bg.png');
        myGame.loader.addImageFile('ImgBlock', 'haunting/assets/block.png');
        myGame.loader.addSpriteSheet('marksman_ss_31x24', 'haunting/assets/marksman_ss_31x24.png', 31, 24, 60);
        myGame.loader.addSpriteSheet('succubus_ss_35x30', 'haunting/assets/succubus_ss_35x30.png', 35, 22, 60);
        myGame.loader.addSpriteSheet('warlock_ss_22x29', 'haunting/assets/warlock_ss_22x29.png', 22, 29, 60);
        myGame.loader.addSpriteSheet('automaton_ss_11x24', 'haunting/assets/automaton_ss_11x24.png', 11, 24, 60);
        myGame.loader.addSpriteSheet('corsair_18x21', 'haunting/assets/corsair_18x21.png', 18, 21, 60);
        myGame.loader.addSpriteSheet('executor_ss_17x21', 'haunting/assets/executor_ss_17x21.png', 17, 21, 60);
        myGame.loader.addSpriteSheet('harvester_ss_14x27', 'haunting/assets/harvester_ss_14x27.png', 14, 27, 60);
        myGame.loader.addSpriteSheet('seraphine_ss_24x30', 'haunting/assets/seraphine_ss_24x30.png', 24, 30, 60);
        myGame.loader.addSpriteSheet('medusa_ss_35x30', 'haunting/assets/medusa_ss_35x30.png', 35, 30, 60);
        myGame.loader.addSpriteSheet('mistress_ss_35x30', 'haunting/assets/mistress_ss_35x30.png', 35, 22, 60);
        myGame.loader.addSpriteSheet('gloom_spritesheet', 'haunting/assets/gloom_spritesheet.png', 13, 26, 60);
        myGame.loader.addSpriteSheet('unicorn_ss_20x25', 'haunting/assets/unicorn_ss_20x25.png', 20, 25, 60);
        myGame.loader.addSpriteSheet('vampire_ss_14x19', 'haunting/assets/vampire_ss_14x19.png', 14, 19, 60);
        myGame.loader.addSpriteSheet('zombie_ss_13x19', 'haunting/assets/zombie_ss_13x19.png', 13, 19, 60);
        myGame.loader.addSpriteSheet('mummy_ss_13x19', 'haunting/assets/mummy_ss_13x19.png', 13, 19, 60);
        myGame.loader.addSpriteSheet('nymph_ss_35x30', 'haunting/assets/nymph_ss_35x30.png', 35, 30, 60);
        myGame.loader.addSpriteSheet('paladin_ss_16x26', 'haunting/assets/paladin_ss_16x26.png', 16, 26, 60);
        myGame.loader.addSpriteSheet('tormentor_ss_13x24', 'haunting/assets/tormentor_ss_13x24.png', 13, 24, 60);
        myGame.loader.addSpriteSheet('spawner', 'haunting/assets/spawner.png', 16, 16, 60);
        myGame.loader.addSpriteSheet('batParticles_12x12', 'haunting/assets/batParticles_12x12.png', 12, 12, 60);
        myGame.loader.addSpriteSheet('prism_ss_14x20', 'haunting/assets/prism_ss_14x20.png', 13, 20, 60);
        myGame.loader.addSpriteSheet('grave', 'haunting/assets/grave.png', 12, 15, 60);
        myGame.loader.addAudioFile('placeHarvester', 'haunting/sounds/placeHarvester.wav');
        myGame.loader.addAudioFile('noHarvestersAvailable', 'haunting/sounds/noHarvestersAvailable.wav');
        myGame.loader.addAudioFile('snd1', 'haunting/sounds/snd1.wav');
        myGame.loader.addAudioFile('gameOver', 'haunting/sounds/gameOver.wav');
        myGame.loader.addAudioFile('kill', 'haunting/sounds/kill.wav');
        myGame.loader.addAudioFile('killPlayer', 'haunting/sounds/killPlayer.wav');
        myGame.loader.addAudioFile('bing', 'haunting/sounds/bing.wav');
        myGame.loader.load();
    }
    var bg;
    var blocks;
    var block;
    var marksman;
    var succubus;
    var warlock;
    var automaton;
    var corsair;
    var executor;
    var harvester;
    var mistress;
    var medusa;
    var gloom;
    var unicorn;
    var tormentor;
    var paladin;
    var mummy;
    var zombie;
    var vampire;
    var prism;
    var players;
    var harvesters;
    var pickUps;
    var seraphineEmitter;
    var batEmitter;
    var soulsHarvested = 0;
    var timeLeft = 1.5;
    var gameOver = false;
    var worldwide;
    var worldwideHighScore;
    var spawner;
    var spawners;
    var grave;
    var graves;
    var canAddHarvester = true;
    var winningSprite = '';
    function create() {
        worldwide = new XMLHttpRequest();
        worldwide.open("GET", "http://initialsgames.com/highscores/commands.php?f=getWorldWideTotal&gamename=soulharvester", true);
        worldwide.send(null);
        myGame.camera.deadzone = new Phaser.Rectangle(64, 64, myGame.stage.width - 128, myGame.stage.height - 128);
        //myGame.camera.scale.setTo(2, 2);
        myGame.camera.setBounds(0, 0, 640, 640);
        bg = myGame.createSprite(0, 0, 'bg');
        bg.scrollFactor.x = 0;
        bg.scrollFactor.y = 0;
        blocks = myGame.createGroup();
        spawners = myGame.createGroup();
        pickUps = myGame.createGroup();
        for(var i = 2; i < 10; i++) {
            // (myGame.rnd.integerInRange(0, 10) < 7) {
            if(true) {
                var rx = myGame.rnd.integerInRange(-100, 100);
                var ry = myGame.rnd.integerInRange(i * 30, i * 30 * 2);
                block = myGame.createSprite(rx, i * 60, 'ImgBlock');
                block.solid = true;
                block.immovable = true;
                blocks.add(block);
                if(myGame.rnd.integerInRange(0, 10) < 7) {
                    spawner = myGame.createSprite(rx + myGame.rnd.integerInRange(100, 300), i * 60 - 16, 'spawner');
                    spawner.animations.add('spawn', [
                        myGame.rnd.integerInRange(0, 15), 
                        myGame.rnd.integerInRange(0, 15), 
                        myGame.rnd.integerInRange(0, 15), 
                        myGame.rnd.integerInRange(0, 15), 
                        myGame.rnd.integerInRange(0, 15)
                    ], 10, false);
                    spawner.animations.play('spawn');
                    spawners.add(spawner);
                }
                block = myGame.createSprite(rx + 400, i * 60, 'ImgBlock');
                block.solid = true;
                block.immovable = true;
                blocks.add(block);
                if(myGame.rnd.integerInRange(0, 10) < 7) {
                    spawner = myGame.createSprite(rx + myGame.rnd.integerInRange(400, 600), i * 60 - 16, 'spawner');
                    spawner.animations.add('spawn', [
                        myGame.rnd.integerInRange(0, 15), 
                        myGame.rnd.integerInRange(0, 15), 
                        myGame.rnd.integerInRange(0, 15), 
                        myGame.rnd.integerInRange(0, 15), 
                        myGame.rnd.integerInRange(0, 15)
                    ], 10, false);
                    spawner.animations.play('spawn');
                    spawners.add(spawner);
                }
            }
        }
        block = myGame.createSprite(0, 600, 'ImgBlock');
        block.solid = true;
        block.immovable = true;
        blocks.add(block);
        block = myGame.createSprite(324, 600, 'ImgBlock');
        block.solid = true;
        block.immovable = true;
        blocks.add(block);
        spawner = myGame.createSprite(20, 600 - 16, 'spawner');
        spawner.animations.add('spawn', [
            myGame.rnd.integerInRange(0, 15), 
            myGame.rnd.integerInRange(0, 15), 
            myGame.rnd.integerInRange(0, 15), 
            myGame.rnd.integerInRange(0, 15), 
            myGame.rnd.integerInRange(0, 15)
        ], 10, false);
        spawner.animations.play('spawn');
        spawners.add(spawner);
        spawner = myGame.createSprite(600, 600 - 16, 'spawner');
        spawner.animations.add('spawn', [
            myGame.rnd.integerInRange(0, 15), 
            myGame.rnd.integerInRange(0, 15), 
            myGame.rnd.integerInRange(0, 15), 
            myGame.rnd.integerInRange(0, 15), 
            myGame.rnd.integerInRange(0, 15)
        ], 10, false);
        spawner.animations.play('spawn');
        spawners.add(spawner);
        block = myGame.createSprite(0, 8 * 6, 'ImgBlock');
        block.solid = true;
        block.immovable = true;
        //block.visible = false;
        block.alpha = 0;
        blocks.add(block);
        block = myGame.createSprite(370, 8 * 6, 'ImgBlock');
        block.solid = true;
        block.immovable = true;
        //block.visible = false;
        block.alpha = 0;
        blocks.add(block);
        var maxHarv = 15;
        players = myGame.createGroup();
        harvesters = myGame.createGroup();
        harvesters.maxSize = maxHarv;
        graves = myGame.createGroup();
        for(var j = 0; j < maxHarv; j++) {
            grave = new Phaser.Sprite(myGame);
            grave.loadGraphic('grave');
            grave.x = 10 + j * 20;
            grave.y = 8 * 6 - grave.height;
            graves.add(grave);
        }
        marksman = new Marksman(myGame);
        players.add(marksman);
        succubus = new Succubus(myGame);
        players.add(succubus);
        warlock = new Warlock(myGame);
        players.add(warlock);
        automaton = new Automaton(myGame);
        players.add(automaton);
        corsair = new Corsair(myGame);
        players.add(corsair);
        executor = new Executor(myGame);
        players.add(executor);
        mistress = new Mistress(myGame);
        players.add(mistress);
        medusa = new Medusa(myGame);
        players.add(medusa);
        gloom = new Gloom(myGame);
        players.add(gloom);
        unicorn = new Unicorn(myGame);
        players.add(unicorn);
        tormentor = new Tormentor(myGame);
        players.add(tormentor);
        paladin = new Paladin(myGame);
        players.add(paladin);
        mummy = new Mummy(myGame);
        players.add(mummy);
        zombie = new Zombie(myGame);
        players.add(zombie);
        vampire = new Vampire(myGame);
        players.add(vampire);
        prism = new Prism(myGame);
        prism.x = myGame.rnd.integerInRange(40, 600);
        prism.y = 580;
        pickUps.add(prism);
        prism = new Prism(myGame);
        prism.x = myGame.rnd.integerInRange(300, 600);
        prism.y = 520;
        pickUps.add(prism);
        prism = new Prism(myGame);
        prism.x = myGame.rnd.integerInRange(40, 300);
        prism.y = 460;
        pickUps.add(prism);
        seraphineEmitter = myGame.createEmitter(0, 0);
        seraphineEmitter.gravity = -98;
        seraphineEmitter.particleClass = Seraphine;
        seraphineEmitter.makeParticles(null, 50, 0, false, 0);
        seraphineEmitter.minRotation = 0;
        seraphineEmitter.maxRotation = 0;
        seraphineEmitter.minParticleSpeed.x = -50;
        seraphineEmitter.maxParticleSpeed.x = 50;
        seraphineEmitter.minParticleSpeed.y = -100;
        seraphineEmitter.maxParticleSpeed.y = 0;
        batEmitter = myGame.createEmitter(0, 0);
        batEmitter.gravity = -98;
        batEmitter.particleClass = Bat;
        batEmitter.makeParticles(null, 50, 0, false, 0);
        batEmitter.minRotation = 0;
        batEmitter.maxRotation = 0;
        batEmitter.minParticleSpeed.x = -50;
        batEmitter.maxParticleSpeed.x = 50;
        batEmitter.minParticleSpeed.y = -100;
        batEmitter.maxParticleSpeed.y = 0;
        myGame.camera.follow(marksman);
        myGame.onRenderCallback = render;
    }
    function update() {
        //if (myGame.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR) ) {
        //    for (var i = 0; i < players.length; i++) {
        //        (<Actor> players.members[i]).velocity.x *= 1.05;
        //        (<Actor> players.members[i]).speed *= 1.05;
        //    }
        //    for (var i = 0; i < harvesters.length; i++) {
        //        (<Harvester> harvesters.members[i]).velocity.x *= 1.05;
        //        (<Harvester> harvesters.members[i]).speed *= 1.05;
        //    }
        //}
        // collide with blocks, platform walking
        myGame.collide(players, blocks, collides);
        myGame.collide(harvesters, blocks, collides);
        // kill
        myGame.collision.overlap(harvesters, spawners, killHarvester);
        myGame.collision.overlap(players, harvesters, killPlayer);
        myGame.collision.overlap(players, pickUps, finishGame);
        //add new harvesters
        if(myGame.input.mouse.isDown && canAddHarvester && myGame.input.worldY > 40 && !gameOver) {
            if(harvesters.length >= harvesters.maxSize) {
                batEmitter.x = myGame.input.worldX;
                batEmitter.y = myGame.input.worldY;
                batEmitter.start(true, 10, 0.05, 1);
                myGame.sound.play('noHarvestersAvailable');
            } else {
                harvester = new Harvester(myGame);
                harvester.x = myGame.input.worldX - 12;
                harvester.y = myGame.input.worldY - harvester.height + 4;
                harvesters.add(harvester);
                graves.members[harvesters.length - 1].visible = false;
                myGame.sound.play('placeHarvester');
                if(myGame.input.keyboard.justPressed(Phaser.Keyboard.Z)) {
                    harvester.flipped = true;
                    harvester.velocity.x *= -1;
                }
            }
            canAddHarvester = false;
        }
        if(myGame.input.mouse.isUp) {
            canAddHarvester = true;
        }
        if(gameOver) {
            timeLeft -= myGame.time.elapsed;
            for(var i = 0; i < players.length; i++) {
                (players.members[i]).velocity.x = 0;
            }
            for(var i = 0; i < harvesters.length; i++) {
                (harvesters.members[i]).velocity.x = 0;
            }
            if(myGame.input.mouse.isDown && gameOver && timeLeft < 0) {
                //location.reload();
                myGame.switchState(this);
            }
        }
    }
    function render() {
        //if(gameOver)
        //    myGame.stage.context.fillText('Souls Harvested ' + soulsHarvested + ' Time Left ' + timeLeft.toFixed(2) + ' Total Souls Harvested World Wide ' + worldwide.responseText + ' Press F5 to continue the harvest', 10, 15, 600);
        //else
        //    myGame.stage.context.fillText('Souls Harvested ' + soulsHarvested + ' Time Left ' + timeLeft.toFixed(2) + ' Total Souls Harvested World Wide ' + worldwide.responseText, 10, 15, 600);
        if(gameOver) {
            myGame.stage.context.font = 'bold 22pt Calibri';
            myGame.stage.context.fillStyle = 'rgb(255,255,255)';
            myGame.stage.context.fillText(winningSprite + ' Placed Hands Upon The Prism', 10, 250, 600);
            myGame.stage.context.fillText('Souls Harvested ' + soulsHarvested, 10, 300, 600);
            myGame.stage.context.fillText('World Wide High Score ' + worldwideHighScore.responseText, 10, 350, 600);
            myGame.stage.context.fillText('Total Souls Harvested World Wide ' + worldwide.responseText, 10, 400, 600);
        } else {
            myGame.stage.context.fillText('Souls Harvested ' + soulsHarvested + ' Total Souls Harvested World Wide ' + worldwide.responseText + '. Hold Z and click for reverse deployment', 10, 15, 600);
        }
    }
    function collides() {
    }
    function finishGame(a, b) {
        if(gameOver == false) {
            winningSprite = a.constructor.name;
            myGame.camera.flash(0xffffff, 1);
            //myGame.camera.fade(0x000000, 3);
            gameOver = true;
            for(var i = 0; i < pickUps.length; i++) {
                (pickUps.members[i]).gameOver = true;
            }
            var xrequest = new XMLHttpRequest();
            xrequest.open("GET", "http://initialsgames.com/highscores/commands.php?f=addData&levelname=" + winningSprite + "&user=" + winningSprite + "&score=" + soulsHarvested + "&gamename=soulharvester", true);
            xrequest.send(null);
            worldwide = new XMLHttpRequest();
            worldwide.open("GET", "http://initialsgames.com/highscores/commands.php?f=getWorldWideTotal&gamename=soulharvester", true);
            worldwide.send(null);
            worldwideHighScore = new XMLHttpRequest();
            worldwideHighScore.open("GET", "http://initialsgames.com/highscores/commands.php?f=getHighScore&gamename=soulharvester", true);
            worldwideHighScore.send(null);
            // http://initialsgames.com/highscores/commands.php?f=getHighScore&gamename=soulharvester
            myGame.sound.play('gameOver', 0.5, false);
        }
    }
    function killHarvester(a, b) {
        batEmitter.at(a);
        batEmitter.start(true, 10, 0.05, a.multiplier);
        a.kill();
        b.animations.play("spawn");
        myGame.sound.play('kill');
    }
    function killPlayer(a, b) {
        soulsHarvested += b.multiplier;
        seraphineEmitter.at(a);
        seraphineEmitter.start(true, 10, 0.05, b.multiplier);
        a.reset(myGame.rnd.integerInRange(1, 600), 2 * 8);
        a.speed *= 1.5;
        a.velocity.x = a.speed;
        a.flipped = false;
        //b.flicker();
        b.multiplier++;
        myGame.sound.play('killPlayer', 0.5);
    }
    function collidePlayer(a, b) {
        //console.log('touch between ' + a.constructor.name + ' and ' + b.constructor.name);
        a.animations.play("attack");
        b.animations.play("attack");
        a.velocity.x = 0;
        b.velocity.x = 0;
        a.health -= b.attackPower;
        b.health -= a.attackPower;
        if(a.health <= 0) {
            soulsHarvested++;
            seraphineEmitter.at(a);
            seraphineEmitter.start(true, 10, 0.05, 1);
            var rr = myGame.rnd.integerInRange(0, spawners.length);
            var sp;
            sp = spawners.members[rr];
            sp.animations.play("spawn");
            a.reset(sp.x, sp.y - 16);
            a.health = 100;
            b.animations.play("run");
            if(a.flipped) {
                a.velocity.x = a.speed * -1;
            } else {
                a.velocity.x = a.speed;
            }
            if(b.flipped) {
                b.velocity.x = b.speed * -1;
            } else {
                b.velocity.x = b.speed;
            }
        }
        if(b.health <= 0) {
            soulsHarvested++;
            seraphineEmitter.at(b);
            seraphineEmitter.start(true, 10, 0.05, 1);
            b.reset(myGame.rnd.integerInRange(1, 600), 16);
            var rr = myGame.rnd.integerInRange(0, spawners.length);
            var sp;
            sp = spawners.members[rr];
            sp.animations.play("spawn");
            a.reset(sp.x, sp.y - 16);
            b.health = 100;
            a.animations.play("run");
            if(a.flipped) {
                a.velocity.x = a.speed * -1;
            } else {
                a.velocity.x = a.speed;
            }
            if(b.flipped) {
                b.velocity.x = b.speed * -1;
            } else {
                b.velocity.x = b.speed;
            }
        }
    }
})();
