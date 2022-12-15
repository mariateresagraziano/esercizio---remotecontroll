import Command from "./command";
export default class Off implements Command {
    execute(){
        console.log("Spento");
    }

}