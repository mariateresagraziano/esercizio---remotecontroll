"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const onCommand_1 = __importDefault(require("./command/onCommand"));
const offCommand_1 = __importDefault(require("./command/offCommand"));
const firstCommand_1 = __importDefault(require("./command/firstCommand"));
const secondCommand_1 = __importDefault(require("./command/secondCommand"));
const thirdCommand_1 = __importDefault(require("./command/thirdCommand"));
const button_1 = __importDefault(require("./button"));
class RemoteControll {
    constructor() {
        this.onButton = new button_1.default(new onCommand_1.default());
        this.offButton = new button_1.default(new offCommand_1.default());
        this.firstButton = new button_1.default(new firstCommand_1.default());
        this.secondButton = new button_1.default(new secondCommand_1.default());
        this.thirdButton = new button_1.default(new thirdCommand_1.default());
    }
    On() {
        return this.onButton.pressButton();
    }
    Off() {
        return this.offButton.pressButton();
    }
    First() {
        return this.firstButton.pressButton();
    }
    Second() {
        return this.secondButton.pressButton();
    }
    Third() {
        return this.thirdButton.pressButton();
    }
}
exports.default = RemoteControll;
