const EventEmmiter = require('events').EventEmitter;

class Timer extends EventEmmiter{
    constructor(total){
        super();
        this.total = total;
        this.ticks = 0;
    }

    start(){
        this.interval = setInterval(() => this.tick(), 1000);
        this.emit('start')
    }

    tick(){
        this.ticks += 1;
        if(this.ticks <= 10){
            this.emit('tick', this.ticks)
        }else{
            this.end()
        }
    }

    end(){
        clearInterval(this.interval);
        this.emit('end');
    }
}

const timer = new Timer(20);
timer.once('start', () => console.log('Start'));
timer.on('tick', tick => {
    console.log(tick)
});
timer.on('end', () => console.log('End'));
timer.start();