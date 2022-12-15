import On from "./command/onCommand";
import Off from "./command/offCommand";
import FirstCommand from "./command/firstCommand";
import SecondCommand from "./command/secondCommand";
import ThirdCommand from "./command/thirdCommand";
import Button from "./button";

export default class RemoteControll {
    onButton : Button;
    offButton : Button;
    firstButton : Button;
    secondButton : Button;
    thirdButton : Button;
    
    constructor(){
        this.onButton = new Button(new On());
        this.offButton = new Button(new Off());
        this.firstButton = new Button(new FirstCommand());
        this.secondButton = new Button(new SecondCommand());
        this.thirdButton = new Button(new ThirdCommand());
    }

    PressOn():void  {
        return this.onButton.pressButton();
    }

    PressOff():void  {
        return this.offButton.pressButton();
    }

    PressFirst():void  {
        return this.firstButton.pressButton();
    }

    PressSecond():void  {
        return this.secondButton.pressButton();
    }

    PressThird():void  {
        return this.thirdButton.pressButton();
    }
}