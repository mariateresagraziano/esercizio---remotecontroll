import Command from "./command/command";
export default class Button {
    command: Command;

    constructor(command: Command) {
        this.command = command;
      }

    pressButton(){
        this.command.execute();
    }

}
