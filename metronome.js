const drum = new Howl({
    "src": [
        "metronome.m4a"
    ],
    "sprite" : {
        "metronome" : [
            1250,
            553.0839002267571
        ]
    }
});

function Timer(callback, timeInterval, errorCallback) {
    this.timeInterval = timeInterval;
    this.start = () => {
        this.expected = Date.now() + this.timeInterval;
        this.timeout = setTimeout(this.round, this.timeInterval);
        console.log('started');
    }

    this.stop = () => {
        clearTimeout(this.timeout);
        console.log('stopped');
        
    }

    this.round = () => {
        let drift = Date.now() -this.expected;
        if (drift > this.timeInterval) {
            if (errorCallback) {
                errorCallback();
            }
        }
        callback();
        this.expected += this.timeInterval;
        console.log(drift);
        console.log(this.timeInterval - drift);
        this.timeout = setTimeout(this.round, this.timeInterval - drift);
    }
}
const kick = new Timer(() => {drum.play('metronome')}, 500);

function Teststart() {
    kick.start();
}

function Teststop() {
    kick.stop();
}