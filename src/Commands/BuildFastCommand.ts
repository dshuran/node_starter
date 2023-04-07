import {Command} from "./Command";


export class BuildFastCommand extends Command {

    public getName(): string {
        return 'buildFast';
    }

    public getAlias(): string {
        return 'bf';
    }

    public run() {
    }

}