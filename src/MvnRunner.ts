import {CmdArgsParser} from "./CmdArgsParser";
import {fixedProjectPaths} from "src/FixedProjectPaths";

export class MvnRunner {

    private cmdArgsParser = new CmdArgsParser();
    // TODO: this.projectPaths

    public run() {
        this.fillProjectPaths();
    }

    private fillProjectPaths(): void {
        fixedProjectPaths.appengineDir = this.cmdArgsParser.appengineDir;
        fixedProjectPaths.serverDir = this.cmdArgsParser.serverDir;
    }

}