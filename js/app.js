var MyStylophone = (function () {

    // set up a context, just like <canvas>
    var ctx = new webkitAudioContext();

    var currentOscillator;

    var playNote = function (frequency) {
        // create an oscillator that will produce the souds
        var oscillator = ctx.createOscillator(),
            gainNode = ctx.createGainNode();

        if(currentOscillator) {
            currentOscillator.disconnect();
        }
        // types SAWTOOTH | SINE | SQUARE | TRIANGLE | CUSTOM
        oscillator.type = oscillator.TRIANGLE;
        oscillator.frequency.value = frequency;

        gainNode.gain.value = 1;

        // create the connection
        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.noteOn(0);

        currentOscillator = oscillator;


    };

    var stopNote = function () {
        currentOscillator.noteOff(0);
        currentOscillator.disconnect();
    };

    return {
        play: playNote,
        stop: stopNote
    };


})();
