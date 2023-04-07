import * as commandLineArgs from 'command-line-args';

export class CmdArgsParser {

    private commandLineOptions: commandLineArgs.CommandLineOptions;

    constructor() {
        const optionDefinitions = [
            { name: 'appengineDir', alias: 'c', type: String },
            { name: 'development', alias: 'd', type: Boolean},
            { name: 'appName', alias: 'a', type: String},
            { name: 'port', alias: 'p', type: Number }
        ]

        this.commandLineOptions = commandLineArgs(optionDefinitions)
    }

    public get appengineDir() {
        return this.commandLineOptions.appengineDir;
    }

    public get serverDir() {
        return this.commandLineOptions.serverDir;
    }

}

