import {Command} from "./Command";
import {echo, popd, pushd} from 'shelljs';
import {projectPaths} from "../ProjectPaths";


export class BuildFastCommand extends Command {

    public getName(): string {
        return 'buildFast';
    }

    public getAlias(): string {
        return 'bf';
    }

    public run() {
        pushd(projectPaths.appengine);
        echo('Hello');
        popd();
    }

}