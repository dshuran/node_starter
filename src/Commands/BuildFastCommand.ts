import {Command} from "./Command";
import {call} from "../utils";


export class BuildFastCommand extends Command {

    public getName(): string {
        return 'buildFast';
    }

    public getAlias(): string {
        return 'bf';
    }

    public run() {
        call('mvn clean install -DskipTests -T1C')
    }

}