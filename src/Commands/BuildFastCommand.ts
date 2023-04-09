import {Command} from "./Command";
import {exec} from 'shelljs';


export class BuildFastCommand extends Command {

    public getName(): string {
        return 'buildFast';
    }

    public getAlias(): string {
        return 'bf';
    }

    public run() {
        exec('mvn clean install -DskipTests -T1C');
    }

}