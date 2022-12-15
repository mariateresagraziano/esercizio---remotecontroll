"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Button {
    constructor(command) {
        this.command = command;
    }
    pressButton() {
        this.command.execute();
    }
}
exports.default = Button;
