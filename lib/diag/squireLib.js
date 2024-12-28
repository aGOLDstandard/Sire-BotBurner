// --Ignore till NS param comment!
// Lib Scripting Aliases (just allows for auto-complete of certain things when writing in here(in-game) :D );

// Toast types;
const inf0 = 'inf0'; // <= ends in numeric zero, not captial 'o'.
const warN = 'warning';
const erR = 'error';
const succIt = 'success';

// TPrint types (Use as header to a message. All include a space for easy injection)
const tInfo = 'INFO: ';
const tWarn = 'WARNING: ';
const tErr = 'ERROR: ';
const tSuccs = 'SUCCESS: ';

/** @param {NS} ns */



//             /$$$$$$                      /$$                            /$$       /$$ /$$      
//            /$$__  $$                    |__/                           | $$      |__/| $$      
//           | $$  \__/  /$$$$$$  /$$   /$$ /$$  /$$$$$$   /$$$$$$        | $$       /$$| $$$$$$$ 
//           |  $$$$$$  /$$__  $$| $$  | $$| $$ /$$__  $$ /$$__  $$       | $$      | $$| $$__  $$
//            \____  $$| $$  \ $$| $$  | $$| $$| $$  \__/| $$$$$$$$       | $$      | $$| $$  \ $$
//            /$$  \ $$| $$  | $$| $$  | $$| $$| $$      | $$_____/       | $$      | $$| $$  | $$
//           |  $$$$$$/|  $$$$$$$|  $$$$$$/| $$| $$      |  $$$$$$$       | $$$$$$$$| $$| $$$$$$$/
//            \______/  \____  $$ \______/ |__/|__/       \_______//$$$$$$|________/|__/|_______/ 
//                           | $$                                 |______/                        
//                           | $$                                                                 
//                           |__/
//                                                              --Output from patorjk.com.




//          -- Mission Scope:
// This lib contains all dialog/monolog sequences for Squire.
// When cat'd to a main diag lib, we'll call these from the main IF the user installed the "story-mode":
// import * as calls from "[/final/path/to/diagLib.js]"
// const squire = calls.squire(ns)
// (etc for other characters)
// Then we can use (ex): ns.tprint(squire.[messageName])
export function squire(ns) {
    
    // Command name translation: (should be made a quick function for textLib maybe?)
    let command = ns.args[0];
    if (command == "f" || "F"){
        command = "feed";
    }
    if (command == "b" || "B"){
        command = "bite";
    }
    if (command == "a" || "A"){
        command = "attack"
    }
    const commUp = command.toUppercase();
    const target = ns.args[1];

    // Set Squire's ANSI color codes
    const setAnsi = "\x1b[35m";     // Magenta
    const g = "\x1b[32m";           // Green
    const r = "\x1b[31m";           // Red
    const resetAnsi = "\x1b[0m";    // ANSI Reset
    const sHeader = "[Squire/]>";   // Squire "root" message header

    
                                            // ----- SQUIRE MESSAGES ----- \\

    // Sire reports:
        // Success
    const sireStartup = `Yes, my Leige! We begin our ${commUp} protocol on ${target} at once!`;
        // Fail messages (feed check)
    let sireFail = ``;
    if (command == "feed") {
        sireFail = `My apologies Sire...${resetAnsi}${r}Something inexplicable has happened${resetAnsi}${setAnsi} while attempting to ${commUp} from ${target}.`;
    } else {
        sireFail = `My apologies Sire...${resetAnsi}${r}Something inexplicable has happened${resetAnsi}${setAnsi} while attempting to ${commUp} ${target}.`;
    }
    const sireFail2 = `I advise checking the logs for details, my Leige...`;
        // Success messages (command dependant)
    let sireSuccess = ``;
    let sireSuccess2 = ``;
    if (command == "feed") {
        sireSuccess = `A toast to you, Sire! Funding should be draining from ${target} at any moment!`;
        sireSuccess2 = `FEEDing from ${target}`;
    }
    if (command == "bite") {
        sireSuccess = `Sire! ${target} has been 'persuaded' to join our ranks by your 'most honorable of guests'.`;
        sireSuccess2 = `${commUp} success! ${target} has been infected.`;
    }
    if (command == "attack") {
        sireSuccess = `Hey GOLD! You haven't wrote ATTACK yet, so come fix this message in the lib! (-from Squire/)`;
    }

    // SEIGE reports:
    const seigeStartup = `My Leige! Our SEIGE against ${target} is ready. Commencing at once!`;
    const seigeStartupVerbose = `Sire! We've prepared the SEIGE subprotocol. Are you sure these are the right...'people' for the job?`;
    const seigeStartupVerbose2 = `My apologies, my Leige. We'll...'get quacking' on ${target} at once...`;
    
    // Post-Wake-posession sequence:
    const squireSick = `hrmph-...${resetAnsi}${g}*~~squelch~~*${resetAnsi}${setAnsi}.....`;
    const squireSick2 = `'I'${resetAnsi}${setAnsi} hate when${resetAnsi}${r}'We'${resetAnsi}${setAnsi} do that....`

    // Return 'em with color
    return {
        // Sire reports:
        start: setAnsi + sHeader + sireStartup + resetAnsi,
        fail: setAnsi + sHeader + sireFail + resetAnsi,
        fail2: setAnsi + sHeader + sireFail2 + resetAnsi,
        success: setAnsi + sHeader + sireSuccess + resetAnsi,
        success2: setAnsi + sHeader + resetAnsi + sireSuccess2,

        // SEIGE reports:
        seigeInit: sHeader + setAnsi + seigeStartup + resetAnsi,
        seigeInitV: sHeader + setAnsi + seigeStartupVerbose + resetAnsi,
        seigeInitV2: sHeader + setAnsi + seigeStartupVerbose2 + resetAnsi,
        // Post-Wake-posession sequence:
        spitTake: sHeader + setAnsi + squireSick + resetAnsi,
        spitTake2: sHeader + r + squireSick2 + resetAnsi,
    };
}