radio.onReceivedNumber(function (receivedNumber) {
    NumberIn = receivedNumber
    basic.showString(convertToText(NumberIn))
})
let NumberIn = 0
basic.showIcon(IconNames.Ghost)
radio.setGroup(1)
