class TV extends Media { 
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
        this.timerValue = value;

        let timerCountdown = () => {
            this.timerValue--;
            this.raiseStateChangeEvent('timer');
            if (this.timerValue > 0) {
                setTimeout(timerCountdown, 1000);
            } else {
                this.turnOff();
            }
        }

        if (this.timerValue > 0) {
            this.raiseStateChangeEvent('timer');
            setTimeout(timerCountdown, 1000);
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
