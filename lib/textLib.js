// --Ignore till NS param comment!
// Lib Scripting Aliases (just allows for auto-complete of certain things when writing in here(in-game) :D );

// Toast types;
const inf0 = 'inf0'; // <= ends in numeric zero, not captial 'o'.;
const warN = 'warning';
const erR = 'error';
const succIt = 'success';

// TPrint types (Use as header to a message. All include a space for easy injection);
const tInfo = 'INFO: ';
const tWarn = 'WARNING: ';
const tErr = 'ERROR: ';
const tSuccs = 'SUCCESS: ';

/** @param {NS} ns */

                            // -- TEXT FORMATTING FUNCTION LIB -- \\


// colorWheel() changes text color to console, and terminal.
export function colorWheel() {
  const resetAnsi = "\x1b[0m";
  const g = "\x1b[32m"; // Green
  const r = "\x1b[31m"; // Red
  const b = "\x1b[34m"; // Blue
  const y = "\x1b[33m"; // Yellow                 // } Define ANSI color codes using '\x1b' escape
  const m = "\x1b[35m"; // Magenta
  const c = "\x1b[36m"; // Cyan
  const w = "\x1b[37m"; // White
  const bl = "\x1b[30m"; // Black
  return {
    green: (originalMessage) => g + " " + originalMessage + " " + resetAnsi,
    red: (originalMessage) => r + " " + originalMessage + " " + resetAnsi,
    blue: (originalMessage) => b + " " + originalMessage + " " + resetAnsi,
    yellow: (originalMessage) => y + " " + originalMessage + " " + resetAnsi,
    squire: (originalMessage) => m + " " + originalMessage + " " + resetAnsi,     // } Return an object with color functions
    cyan: (originalMessage) => c + " " + originalMessage + " " + resetAnsi,
    white: (originalMessage) => w + " " + originalMessage + " " + resetAnsi,
    black: (originalMessage) => bl + " " + originalMessage + " " + resetAnsi,
    // Fallback for unrecognized colors
    fallback: (originalMessage) => resetAnsi + " " + originalMessage + " " + resetAnsi,

  };
  // colors.green([yourMessageHere])        <= Print in green
  // colors.red([yourMessageHere])          <= Print in red
  // colors.blue([yourMessageHere])         <= Print in blue
  // colors.yellow([yourMessageHere])       <= Print in yellow          // } EZ Colors copypasta!
  // colors.squire([yourMessageHere])       <= Print in magenta
  // colors.cyan([yourMessageHere])         <= Print in cyan
  // colors.white([yourMessageHere])        <= Print in white
  // colors.black([yourMessageHere])        <= Print in black
}