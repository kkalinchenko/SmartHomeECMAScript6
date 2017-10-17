function appendLampToDom(lamp) {

    function getClonedLampDomObject() {
        let lamp = mainContainer.querySelector('.device_lamp').cloneNode(true);
        return lamp;
    }

    let domLamp = getClonedLampDomObject(),
        lampList = document.querySelector('.lamp_container'),
        btnTurn = domLamp.querySelector('.turn_btn'),
        removeBtn = domLamp.querySelector('.remove_device');

    function addLampEvents(lamp) {
        btnTurn.addEventListener('click', turnDevice.bind(lamp));
        /***removing***/
        removeBtn.addEventListener('click', removeObject.bind(lamp));
        /***subcribers***/
        lamp.addStateChangeListener('turn', subscriberTurnDevice);
    }

    addLampEvents(lamp);
    domObjects.push(domLamp);
    lampList.appendChild(domLamp);
}