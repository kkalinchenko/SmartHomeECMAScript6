class Base {
    constructor(type){
        this.isOn = false;
        this.type = type;
        this.__listeners = [];
    }

    turnOn(){
        this.isOn = true;
        this.raiseStateChangeEvent('turn', this);   
    }

    turnOff(){
        this.isOn = false;
        this.raiseStateChangeEvent('turn', this); 
    }

    getState(){
        return {
            isOn: this.isOn
        }
    }

    addStateChangeListener(property, listener) {
        this.__listeners.push({
            property: property,
            callback: listener
        });
    }

    raiseStateChangeEvent(property, self) {
        this.__listeners.forEach(function (listener) {
            setTimeout(function () {
                if (property === listener.property) {
                    listener.callback.call(self);
                }
            }, 0)
        });
    }

    removeStateChangeListeners() {
        this.__listeners = [];
    }
}


