const MAX_BATTERY = 100;
let Mobile = function (name, color) {
    this.name = name;
    this.color = color;
    this.battery = MAX_BATTERY;
    this.inBox = [];
    this.outBox = [];
    this.message = "";
    this.power = true;
    this.writeMessage = function (message) {
        this.message = message;
    }
    this.sendMessage = function (phone) {
        phone.inBox.push(this.message);
        this.outBox.push(this.message);
        this.battery -= 1;
    }
    this.getInbox = function () {
        return this.inBox;
    }
    this.getOutBox = function () {
        return this.outBox;
    }
    this.deleteInbox = function () {
        this.battery -= 1;
        this.inBox = [];
        this.outBox = [];
    }
    this.getBattery = function () {
        return this.battery;
    }
    this.setPower = function (power) {
        this.power = power;
    }
    this.getPower = function () {
        return this.power;
    }
}

let samsung = new Mobile("samsung", "den");
let iphone = new Mobile("iphone", "xanh");

function sendText1(phone1, phone2) {
    // if (changePower()) {
    let inputValue = document.getElementById("input1").value;
    phone1.writeMessage(inputValue);
    phone1.sendMessage(phone2);
    document.getElementById("inputtext2").value = phone2.getInbox().join("\n");
    document.getElementById("outputtext1").value = phone1.getOutBox().join("\n");
    document.getElementById("battery1").innerHTML = phone1.getBattery();
    inputValue = "";
    document.getElementById("input1").value = null;
    // }
}

function sendText2(phone1, phone2) {
    // if (changePower()) {
    let inputValue = document.getElementById("input2").value;
    phone1.writeMessage(inputValue);
    phone1.sendMessage(phone2);
    document.getElementById("inputtext1").value = phone2.getInbox().join("\n");
    document.getElementById("outputtext2").value = phone1.getOutBox().join("\n");
    document.getElementById("battery2").innerHTML = phone2.getBattery();
    inputValue = "";
    document.getElementById("input2").value = null;
    // }
}

function delInbox1(phone) {
    // if (changePower()) {
    phone.deleteInbox();
    document.getElementById("inputtext1").value = phone.getInbox();
    document.getElementById("outputtext1").value = phone.getOutBox();
    document.getElementById("battery1").value = phone.getBattery();

    // }
}

function delInbox2(phone) {
    // if (changePower()) {
    phone.deleteInbox();
    document.getElementById("inputtext2").value = phone.getInbox();
    document.getElementById("outputtext2").value = phone.getOutBox();
    document.getElementById("battery2").value = phone.getBattery();
    // }
}

// function changePower(phone) {
//     if (phone.getPower()=== true) {
//         phone.setPower(false);
//     } else {
//         phone.setPower(true);
//     }
//     return phone.getPower();
// }


