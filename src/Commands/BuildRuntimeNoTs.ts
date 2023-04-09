import {Command} from "./Command";
import {call} from "../utils";
import {popd, pushd} from "shelljs";
import {projectPaths} from "../ProjectPaths";


export class BuildRuntimeNoTs extends Command {

    public getName(): string {
        return 'buildRuntimeNoTs';
    }

    public getAlias(): string {
        return 'brnots';
    }

    public run() {
        pushd(projectPaths.runtime);
        call('mvn -T1C -DclientBuildMode=none -DskipTests -pl -:com.e1c.g5rt.appengine.ui.client.test,-:com.e1c.g5rt.appengine.ui.client.build clean install');
        popd();
    }

}