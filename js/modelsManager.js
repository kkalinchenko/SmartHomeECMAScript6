let objects = [];

function turnDevice() {
    if (!this.isOn) {
        this.turnOn();
    } else {
        this.turnOff();
    }
}

function increaseVolume(mediaDevice) {
    let input = mediaDevice.querySelector('.qty_volume');
    this.increaseVolume();
    let volume = this.getState();
    input.value = volume.volume;
}

function decreaseVolume(mediaDevice) {
    let input = mediaDevice.querySelector('.qty_volume');
    this.decreaseVolume();
    let volume = this.getState();
    input.value = volume.volume;
}

function switchChannelForward(mediaDevice) {
    let input = mediaDevice.querySelector('.qty_channel');
    this.switchChannelForward();
    let currentChannel = this.getState();
    input.value = currentChannel.channel;
}

function switchChannelBack(mediaDevice) {
    let input = mediaDevice.querySelector('.qty_channel');
    this.switchChannelBack();
    let currentChannel = this.getState();
    input.value = currentChannel.channel;
}

function getTimerValue(domTv) {
    let timerValue = domTv.querySelector('.setted_value').value;
    return timerValue;
}

function setTvTimer(domTv) {
    let timerValue = getTimerValue(domTv);
    this.setTimer(timerValue, this);
}

/****subcribers***/

function subscriberTurnDevice() {
    let state = this.getState();
    let domElement = getDomObjectByModel(this);
    redrawTurnButton(domElement, state);
}

function subscriberVolumeDevice() {
    let state = this.getState();
    let domElement = getDomObjectByModel(this);
    redrawVolumeState(domElement, state);
}

function subscriberChannelDevice() {
    let state = this.getState();
    let domElement = getDomObjectByModel(this);
    redrawChannelState(domElement, state);
}

function subcriberTvTimer() {
    let state = this.getState();
    let timerValue = state.timerValue;
    let domElement = getDomObjectByModel(this);
    redrawTimerState(domElement, timerValue);
}

function removeObject() {
    this.removeStateChangeListeners();
    for (let i = 0; i < objects.length; i++) {
        if (this === objects[i]) {
            objects.splice(i, 1);
            removeObjectFromDom(i);
            break;
        }
    }
}

