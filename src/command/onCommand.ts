import Command from "./command";
export default class On implements Command {
    execute(){
        console.log("Acceso");
    }

}