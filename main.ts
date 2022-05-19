radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.pause(5000)
        basic.setLedColor(0xffff00)
        basic.pause(3000)
        basic.setLedColor(0xff0000)
        radio.sendNumber(2)
    }
    if (receivedNumber == 3) {
        basic.setLedColor(0x00ff00)
    }
})
radio.setGroup(74)
basic.setLedColor(0x00ff00)
