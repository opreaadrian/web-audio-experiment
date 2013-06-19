var keyboard = qwertyHancock({
    id: 'keyboard',
    height: 200,
    width: 600,
    startNote: 'C2',
    octaves: 1.7,
    whiteKeyColour: '#eee',
    blackKeyColour: '#585858',
    blackKeyWidth: 40,
    blackKeyHeight: 100,
    hoverColour: 'silver',
    keyboardLayout: 'en'
});

keyboard.keyDown(function (note, frequency) {
    // key has been pressed
    MyStylophone.play(frequency);
});

keyboard.keyUp(function (note, frequency) {
    // key has been released
    MyStylophone.stop();
});
