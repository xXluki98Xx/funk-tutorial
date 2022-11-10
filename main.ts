enum RadioMessage {
    message1 = 49434
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    radio.sendString("" + (messageOne))
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    radio.sendString("" + (strMessage))
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    radio.sendString("" + (messageTwo))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.pause(200)
    if (receivedString == messageOne) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.SmallHeart)
            basic.showIcon(IconNames.Heart)
            basic.pause(200)
        }
    }
    if (receivedString == messageTwo) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.SmallDiamond)
            basic.showIcon(IconNames.Diamond)
            basic.showIcon(IconNames.Target)
            basic.pause(200)
        }
    }
    basic.clearScreen()
})
let messageTwo = ""
let messageOne = ""
let strMessage = ""
strMessage = "Hallo"
messageOne = "test"
messageOne = "Fallo"
