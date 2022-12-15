"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const remotecontroll_1 = __importDefault(require("../remotecontroll"));
const onCommand_1 = __importDefault(require("../command/onCommand"));
const offCommand_1 = __importDefault(require("../command/offCommand"));
const firstCommand_1 = __importDefault(require("../command/firstCommand"));
const secondCommand_1 = __importDefault(require("../command/secondCommand"));
const thirdCommand_1 = __importDefault(require("../command/thirdCommand"));
describe('testing remote controll', () => {
    let controll = new remotecontroll_1.default();
    test('ON button has on command', () => {
        expect(controll.onButton.command).toBeInstanceOf(onCommand_1.default);
    });
    test('OFF button has off command', () => {
        expect(controll.offButton.command).toBeInstanceOf(offCommand_1.default);
    });
    test('FIRST button has first channel', () => {
        expect(controll.firstButton.command).toBeInstanceOf(firstCommand_1.default);
    });
    test('SECOND button has second channel', () => {
        expect(controll.secondButton.command).toBeInstanceOf(secondCommand_1.default);
    });
    test('THIRD button has third channel', () => {
        expect(controll.thirdButton.command).toBeInstanceOf(thirdCommand_1.default);
    });
});
