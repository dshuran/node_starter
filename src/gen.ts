import {allCommandsList} from "./AllCommandsList";
import {mkdir, popd, pushd, ShellString, touch, rm} from "shelljs";

const generatedFilesDir = 'gen_bat_files'

rm('-rf', generatedFilesDir);
mkdir(generatedFilesDir);
pushd(generatedFilesDir);
for (let command of allCommandsList) {
    const batFilename = `${command.getAlias()}.bat`;
    touch(batFilename);
    ShellString(`node %~dp0..\\lib\\index.js --${command.getName()}`).to(batFilename);
}
popd();
