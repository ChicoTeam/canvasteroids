/*global soundManager */

Ext.define('soundeffects.SoundEffects', {
    statics: {
        sounds: {},
        //soundFiles = hash of soundName ==> path to mp3 file
        defineSounds: function (soundFiles) {
            var sfx = this;
            this.sounds = Ext.apply(this.sounds, soundFiles);
            window.soundManager.onready(function () {
                sfx.loadSounds();
            });
        },

        loadSounds: function () {
            console.log("loadSounds", this.sounds);
            for (var sound in this.sounds) {
                if (this.sounds.hasOwnProperty(sound)) {
                    window.soundManager.createSound({
                        id: sound,
                        url: this.sounds[sound]
                    });
                }
            }
        },

        play: function (sound) {
            if (this.sounds[sound]) {
                window.soundManager.play(sound);
            }
        }

    }

});