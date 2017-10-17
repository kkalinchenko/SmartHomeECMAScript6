class Media extends Base{
    constructor (type, volume, channels) {
        super(type);

        this.MAX_VOLUME = 100;
        this.MIN_VOLUME = 0;

        this.volume = (volume >= this.MIN_VOLUME && volume <= this.MAX_VOLUME) ? volume : this.MIN_VOLUME;
        this.channels = (Array.isArray(channels) && channels.length > 0) ? channels : ['NO CHANNELS AVAILABLE'];

        this.__currentChannel = 0;
        this.__currentVolume = 0;
    }

    switchChannelForward () {
        this.__currentChannel++;
        if (this.__currentChannel >= this.channels.length) {
            this.__currentChannel = 0;
        }

        this.raiseStateChangeEvent('channel');
    }

    switchChannelBack () {
        this.__currentChannel--;
        if (this.__currentChannel < 0) {
            this.__currentChannel = this.channels.length - 1;
        }

        this.raiseStateChangeEvent('channel');
    }

    increaseVolume () {
        if (this.__currentVolume < this.MAX_VOLUME) {
            this.__currentVolume++;
            this.raiseStateChangeEvent('volume');
        } else {
            this.__currentVolume = this.MIN_VOLUME;
        }
    }

    decreaseVolume () {
        if (this.__currentVolume > this.MIN_VOLUME) {
            this.__currentVolume--;
            this.raiseStateChangeEvent('volume');
        } else {
            this.__currentVolume = this.MAX_VOLUME;
        }
    }

    getState () {
        let baseState = super.getState();
        let mediaState = Object.assign({
            channel: this.channels[this.__currentChannel],
            volume: this.__currentVolume
        }, baseState);

        return mediaState;
    }

}

