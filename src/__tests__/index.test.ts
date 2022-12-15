import RemoteControll from "../remotecontroll";
import OnCommand from "../command/onCommand";
import OffCommand from "../command/offCommand";
import FirstCommand from "../command/firstCommand";
import SecondCommand from "../command/secondCommand";
import ThirdCommand from "../command/thirdCommand";

describe('testing remote controll', () => {
    let controll: RemoteControll = new RemoteControll();
    test('ON button has on command', () => {     
        expect(controll.onButton.command).toBeInstanceOf(OnCommand);
    });

    test('OFF button has off command', () => {     
        expect(controll.offButton.command).toBeInstanceOf(OffCommand);
    });

    test('FIRST button has first channel', () => {     
        expect(controll.firstButton.command).toBeInstanceOf(FirstCommand);
    });

    test('SECOND button has second channel', () => {     
        expect(controll.secondButton.command).toBeInstanceOf(SecondCommand);
    });

    test('THIRD button has third channel', () => {     
        expect(controll.thirdButton.command).toBeInstanceOf(ThirdCommand);
    });

});