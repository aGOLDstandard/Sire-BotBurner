/** @param {NS} ns */

              // -- !!!!! IGNORE !!!!! -- \\

// Lib Scripting Aliases (just allows for auto-complete of certain things when writing in here :D )
  // Toast types
  const inf0 = "info"; // <= ends in numeric zero, not captial "o".
  const warN = "warning";
  const erR = "error";
  const succIt = "success";
    // TPrint types (Use as header to a message. All include a space for easy injection)
  const tInfo = "INFO: ";
  const tWarn = "WARNING: ";
  const tErr = "ERROR: ";
  const tSuccs = "SUCCESS: ";





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
    
    
  // Wake stuff:
  // Wake-Speak translator scrambles a given message a bit to output as "wake-speak"
  export function wakeSpeak() {
    const originalMessage = arguments[0];
      
    // Break up the message word-by-word
    const words = originalMessage.split(' ');
      
    // Scramble each word:
    const scrambledWords = words.map(word => {
      let scrambled = word.split('').map(char => {
        if (Math.random() < 0.08) { // 8% replacement chance
          return String.fromCharCode(Math.floor(Math.random() * 94) + 33);
        }
        return char;
      }).join('');
    
      // Remove a few chars at random:
      let glitchedMessage = '';
      for (let i = 0; i < scrambled.length; i++) {
        if (Math.random() < 0.80) { // 80% chance to keep a letter
          glitchedMessage += scrambled[i];
        }
      }
      return glitchedMessage;
    });
    return scrambledWords.join(' ');
  }
      
    
    // Premade Wake-Spoken messages:
  export function wakeSpoken() {
    
    // Call in colorWheel()
    const colors = sire.colorWheel();
  
    // Define original messages
    const aw4ke = "WARNING: We art not Enemy";
    const w4kesuccess = "SUCCESS: We art Wake";
    const axF9tc1Fo40 = "W!RwKW!RwKW!RwKW!RwKW!RwKW!RwKW!RwKW!RwKW!RwKW!RwK";
    const f00ls = "W!RwK";
  
    // Return as objects with wakeSpeak and appropriate colors applied
    return {
      aWake: (originalMessage) => colors.yellow(wakeSpeak(aw4ke)),
      wakeSuccess: (originalMessage) => colors.green(wakeSpeak(w4kesuccess)),
      blastoff: (originalMessage) => wakeSpeak(axF9tc1Fo40),
      simple: (originalMessage) => wakeSpeak(f00ls),
      // Fallback
      fallback: (originalMessage) => colors.red("ERROR: errW!RwKerrW!RwKerrW!RwKerrW!RwKerrW!RwKerrW!RwKerrW!RwKerrW!RwKerrW!RwKerrW!RwK"),
    };
  
  }