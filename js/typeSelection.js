function selectType() {
    let devices = document.querySelector('.carousel_wrapper'),
        devicesList = devices.querySelector('.carousel_list').children,
        addBtn = document.querySelector('.add_btn');

    Array.prototype.forEach.call(devicesList, function (device, index, array) {
        device.onclick = function (e) {
            let currentChoosed = Array.prototype.find.call(array, function (el) {
                return el.classList.contains('choosed');
            });
            currentChoosed.classList.remove('choosed');
            device.classList.add('choosed');
        };
    });

    function getType() {
        let type = document.querySelector('.choosed').getAttribute('data-type');
        return type;
    }

    addBtn.onclick = function () {
        let type = getType();
        constructors[type]();
    }
}