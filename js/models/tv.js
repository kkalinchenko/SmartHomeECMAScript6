class TV extends Media{ 
    constructor (volume, channels) {
        super('tv', volume, channels);
        this.__currentTimerValue = 0;
    }

    set timerValue (value) {
        function isPositiveNumber(value) {
            return !isNaN(parseInt(value)) && isFinite(value);
        }

        this.__currentTimerValue = isPositiveNumber(value) && value > 0 ? value : 0;
    }

    get timerValue () {
        return this.__currentTimerValue;
    }

    setTimer (value) {
        let self = this;
        this.timerValue = value;

        if (this.timerValue > 0) {
            self.raiseStateChangeEvent('timer');
            setTimeout(function timerCountdown() {
                self.timerValue--;
                self.raiseStateChangeEvent('timer');
                if (self.timerValue > 0) {
                    setTimeout(timerCountdown, 1000);
                } else {
                    self.turnOff();
                }
            }, 1000);
        }
    }

    getState () {
        let mediaState = super.getState();
        let tvState = Object.assign({
            timerValue: this.__currentTimerValue
        }, mediaState);

        return tvState;
    }

}
