import './version';
import { TerminalCommands } from './app/Cmd';
import { Terminal } from "./app/Terminal";
import { bootMessageLines } from "./boot";
import { initialFilesystem } from './filesystem';

function extendObject(n, r) { for (var e in r) r.hasOwnProperty(e) && (n[e] = r[e]); return n }

const termFaker = new Terminal({
  useBootLoader: TF_CONFIG_BOOT_LOADER,
  bootMessageLines: bootMessageLines
});

// Set the command prompt style:
const customPrompt = () => { return "guest@TermFake:~"+termFaker.path+"$ ";};
const commands = extendObject(new TerminalCommands(termFaker), customCommands);

// Initialize & show the terminal:
termFaker.init(
  document.getElementById(TF_CONFIG_ELEMENT_ID),
  commands,
  customPrompt,
  initialFilesystem
);
