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



//                888888b.   d8b           .d8888b.                    888                          
//                888  "88b  Y8P          d88P  Y88b                   888                          
//                888  .88P               Y88b.                        888                          
//                8888888K.  888  .d88b.   "Y888b.   888  888 .d8888b  888888 .d88b.  88888b.d88b.  
//                888  "Y88b 888 d88""88b     "Y88b. 888  888 88K      888   d8P  Y8b 888 "888 "88b 
//                888    888 888 888  888       "888 888  888 "Y8888b. 888   88888888 888  888  888 
//                888   d88P 888 Y88..88P Y88b  d88P Y88b 888      X88 Y88b. Y8b.     888  888  888 
//                8888888P"  888  "Y88P"   "Y8888P"   "Y88888  88888P'  "Y888 "Y8888  888  888  888 
//                                                        888                                       
//                                                   Y8b d88P                                       
//                                                    "Y88P"        --Output from patorjk.com.



// BioSystems dialog: 
export function bioSys(ns){
    const sireName = "'Sire0.3 - Botnet Utility Program'";
    const sireHandle = "'Sire0.3'";
    
    // Command entry translation
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

    // BioSys header and ANSI modes
    const bHead = "[BioSys/ ]> "
    const info = "\x1b[34m" + bHead + "Info: ";         // Info Blue
    const warn = "\x1b[33m" + bHead + "Warn: ";         // Warning Yellow
    const error = "\x1b[31m" + bHead + "Error: ";       // Error Red
    const succIt = "\x1b[32m" + bHead + "Success: ";    // Success Green
    const emailColor = "\x1b[36m";                           // Cyan
    const resetAnsi = "\x1b[0m";                        // Ansi Reset
    
    // Regular messages
    const sireInit = `Initializing: ${sireName}`;
    const sireWarn = `An error has occured with ${sireName}. Retrying...`;
    const sireError = `An unknown error has occured with program: ${sireName}. Killing process...`;
    const sireEmail = `If the issue persists, please forward log messages to the developer at: ${resetAnsi}${emailColor}SireNET@tuta.io`;
    const sireSuccess = `${sireName} has successfully completed its '${commUp}' directive.`
    const sireShutdown = `Shutting down: ${sireName}...`;
    
    // Command-Oriented Responses
    let sireCommand = ``;
    let commandWarn = ``;
    let commandError = ``;
    let commandSuccess = ``;
        // Feed:
    if (command == "feed") {
        sireCommand = `${sireHandle} Command: '${commUp}' was recognized.`;
        commandWarn = `${sireHandle} is experiencing issues executing: '${commUp}'. Please check the logs, and try again.`;
        commandSuccess = `Hacking ${target} in the background with our own resources.`;
    }
        // Bite:
    if (command == "bite") {
        sireCommand = `${sireHandle} Command: '${commUp}' was recognized. Standby...`;
        const seigeInit = `Sire0.3 is performing root-access-gaining procedures in the background...`;
    }
        // Attack:

    return {
        
        // Regular messages
        init: info + sireInit + resetAnsi,
        warn: warn + sireWarn + resetAnsi,
        err: error + sireError + resetAnsi,
        email: info + sireEmail + resetAnsi,
        success: succIt + sireSuccess + resetAnsi,
        shutdown: info + sireShutdown + resetAnsi,

        // Command-Oriented Responses:
        
    };
}