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


//-----------------------------------------------------------------------------------------------------------------------------\\
//------------------------------------------------------------------------------------------------------------------------------||
//--------,[#                                                                                                        9!---------||
//-------?       \E\  ??  /W/ |E==]              /A\   |!R!R_| |TX??T|            \W\  XX  /A/ /3\  |?| /K/ |E|==3|     ?-------||
//----?           \W\ /\ /M/  |E?|              /A?4\  |X|\R\    |R|               \W\ /\ /M/ /X-A\ |X|XX<  |E|?|          ?----||
//-----?           \WV  \v    |F==]____________/A/?-\? |R|-\R\   |T|________________\WV  \v  /A/ \? |K|?\K? |E===3       ?------||
//-------..,!^.._____                                                                                                \_*--------||
//------------------------------------------------------------------------------------------------------------------------------||
//------------------------------------------------------------------------------------------------------------------------------//


// This 'Wake-Speak translator' scrambles a given message a bit to output in "Wake-Speak"
export function wakeSpeak() {
    const originalMessage = arguments[0];

    // Break up the message word-by-word, and scramble each
    const words = originalMessage.split(' ');
    const scrambledWords = words.map(word => {
        let scrambled = word.split('').map(char => {
            if (Math.random() < 0.08) { // 8% replacement chance
                return String.fromCharCode(Math.floor(Math.random() * 94) + 33);
            }
            return char;
        }).join('');

        // Remove a few chars at random before spitting out the final message:
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


// Premade 'Wake-Spoken' messages:
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
        error: (originalMessage) => colors.red("ERROR: errW!RwKerrW!RwKerrW!RwKerrW!RwKerrW!RwKerrW!RwKerrW!RwKerrW!RwKerrW!RwKerrW!RwK"),
    };
}