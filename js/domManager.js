let domObjects = [];
let mainContainer = document.querySelector('#device');

function getDomObjectByModel(model) {
    for (let i = 0; i < objects.length; i++) {
        if (model === objects[i]) {
            return domObjects[i];
        }
    }

    return null;
}

function getNotification(domElement) {
    let notification = domElement.querySelector('.notification');
    return notification;
}

function disableEnableButtons(domElement, state) {
    let buttons = domElement.querySelectorAll('.btn_disable');

    buttons.forEach(function (button) {
        if (state.isOn) {
            button.removeAttribute("disabled");
        } else {
            button.setAttribute("disabled", "disabled");
        }
    });
}

function redrawTurnButton(domElement, state) {
    let button = domElement.querySelector('.turn_btn');
    let notification = getNotification(domElement);

    if (state.isOn) {
        button.classList.remove('off');
        button.classList.add('on');
    } else {
        button.classList.remove('on');
        button.classList.add('off');
    }

    disableEnableButtons(domElement, state);
    notification.querySelector('.text').innerHTML = 'isON: ' + state.isOn;
}

function redrawVolumeState(domElement, state) {
    let notification = getNotification(domElement);
    notification.querySelector('.text').innerHTML = 'VOLUME: ' + state.volume;
}

function redrawChannelState(domElement, state) {
    let notification = getNotification(domElement);
    notification.querySelector('.text').innerHTML = 'CHANNEL: ' + state.channel;
}

function redrawTimerState(domElement, timerValue) {
    let notification = getNotification(domElement);
    notification.querySelector('.text').innerHTML = timerValue;
}

function removeObjectFromDom(i) {
    let domObj = domObjects.splice(i, 1)[0],
    parentDomObj = domObj.parentElement;

    parentDomObj.removeChild(domObj);
}