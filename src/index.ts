import {MvnRunner} from "./MvnRunner";
import {allCommandsList} from "./AllCommandsList";

const mvnRunner = new MvnRunner(allCommandsList);
mvnRunner.run();