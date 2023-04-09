import * as Path from "path";

interface IFixedProjectPaths {
    readonly appengineDir: string;
    readonly serverDir: string;
}

/**
 * Фиксированный набор путей, которые не могут быть выведены из других путей.
 */
const fixedProjectPaths: IFixedProjectPaths = {
    appengineDir: 'YOUR_PATH',
    serverDir: 'YOUR_PATH'
}

class ProjectsPaths {

    private readonly appengineDir: string;
    private readonly serverDir: string;

    constructor(fixedProjectPaths: IFixedProjectPaths) {
        this.appengineDir = fixedProjectPaths.appengineDir;
        this.serverDir = fixedProjectPaths.serverDir;
    }

    public get appengine() {
        return this.appengineDir;
    }

    public get runtime() {
        return Path.join(this.appengine, 'runtime').toString();
    }

    public get server() {
        return this.serverDir;
    }

}

export const projectPaths = new ProjectsPaths(fixedProjectPaths);