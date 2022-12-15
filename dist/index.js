"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const remotecontroll_1 = __importDefault(require("./remotecontroll"));
let controll = new remotecontroll_1.default();
controll.On();
controll.First();
controll.Second();
controll.Third();
controll.Off();
