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

                    //---------------------------------------------------------------------\\
              //--------------------------------- SIRE COMMANDS ---------------------------------\\
          //-----------------------------------------------------------------------------------------\\
                                
                                
          // ---------- BITE SUBPROTOCOLS ---------- \\

              // -----SEIGE----- \\
                                              
// SEIGE performs port quacking and nuking ops for Sire
export async function seige(ns) {
  ns.print(`ITS QUACK TIME!`);
  ns.toast(`QUACK! QUACK!`, "warning", 2500);
  const target = ns.args[1];
  const myHackLvl = await ns.getHackingLevel();
  const reqHackLvl = await ns.getServerRequiredHackingLevel(target);
  const isHackable = (reqHackLvl <= myHackLvl);
  const rootCheck = await ns.hasRootAccess(target);

  // Skill check:
  if (!isHackable) {
    ns.print(`${target} hack level excedes ours!`);
    ns.print(`Printing toast message, and shutting down Sire0.3`);
    ns.toast(`SEIGE ABORTED: ${target}'s Power Level is over 9000! Git gud nerd!`, "error", 5000);
    await ns.exit();
  }

  // Root check:
  if (rootCheck) {
    ns.print(`${target} has already been rooted!`);
    ns.print(`Printing toast message, and shutting down Sire0.3`);
    ns.toast(`SEIGE Info: We already have root on ${target}!`, "info", 5000);
    await ns.exit();
  }

  if (isHackable && !rootCheck) {
    ns.print(`LET'S GET QUACKIN AT ${target}!`);
    ns.toast(`QUACK! QUACK!`, "warning", 2500);
    await ns.sleep(1500);
    // Quacker Checks:
    let portsToQuack = ns.getServerNumPortsRequired(target);
    const sqlCheck = ns.fileExists("SQLInject.exe");
    const httpCheck = ns.fileExists("HTTPWorm.exe");
    const smtpCheck = ns.fileExists("relaySMTP.exe");
    const ftpCheck = ns.fileExists("FTPCrack.exe");
    const sshCheck = ns.fileExists("BruteSSH.exe");
    // Max Retry Counter setup:
    let retryCount = 0;
    const maxRetries = 3;
    let triesRemaining = maxRetries - retryCount;

    // Quack Switch:
    switch (portsToQuack) {
      case 5:
        if (!sqlCheck) {
          await ns.sleep(3000);
          ns.print(`Critical Error! We need SQLInject.exe to seige ${target}!`);
          ns.print(`Printing toast message, and shutting down Sire0.3`);
          ns.toast(`SEIGE ABORTED: We need to aquire SQLInject.exe first!`, "error", 5000);
          await ns.exit();
        } else {
          ns.print(`QUACKING SQL!`);
          await ns.toast(`Taking a QUACK at SQL!`, "info");
          ns.toast(`QUACK! QUACK!`, "warning");
          await ns.sleep(3000);
          // Start SQL Verification Loop
          let isSql = false;
          while (!isSql) {
            let sqlQuack = await ns.sqlinject(target);
            // SQL Quacker:
            if (sqlQuack) {
              ns.print(`SQL QUACKED!`);
              await ns.toast(`SQL QUACKED!`, "success");
              ns.toast(`QUACK! QUACK!`, "warning");
              isSql = true;
            } else {
              retryCount++;
              ns.print(`Awaiting ${target}'s SQL port. Attempting ${triesRemaining} more time(s).`);
              if (retryCount >= maxRetries) {
                ns.print(`Unknown error occured: Max Attempts Reached at quacking SQL!`);
                ns.print(`Printing toast message, and shutting down Sire0.3`);
                ns.toast(`Uhhhhh...idk man, get to debugging?`, "error", 5000);
                await ns.exit();
              }
            }
          }
          await ns.sleep(1500);
        }
      case 4:
        if (!httpCheck) {
          await ns.sleep(3000);
          ns.print(`Critical Error! We need HTTPWorm.exe to seige ${target}!`);
          ns.print(`Printing toast message, and shutting down Sire0.3`);
          ns.toast(`SEIGE ABORTED: We need to aquire HTTPWorm.exe first!`, "error", 5000);
          await ns.exit();
        } else {
          ns.print(`QUACKING HTTP!`);
          await ns.toast(`Taking a QUACK at HTTP!`, "info");
          ns.toast(`QUACK! QUACK!`, "warning");
          await ns.sleep(3000);
          // Start HTTP Verification Loop
          let isHttp = false;
          while (!isHttp) {
            let httpQuack = await ns.httpworm(target);
            // HTTP Quacker:
            if (httpQuack) {
              ns.print(`HTTP QUACKED!`);
              await ns.toast(`HTTP QUACKED!`, "success");
              ns.toast(`QUACK! QUACK!`, "warning");
              isHttp = true;
            } else {
              retryCount++;
              ns.print(`Awaiting ${target}'s HTTP port. Attempting ${triesRemaining} more time(s).`);
              if (retryCount >= maxRetries) {
                ns.print(`Unknown error occured: Max Attempts Reached at quacking HTTP!`);
                ns.print(`Printing toast message, and shutting down Sire0.3`);
                ns.toast(`Uhhhhh... idk man, get to debugging?`, "error", 5000);
                await ns.exit();
              }
            }
          }
          await ns.sleep(1500);
        }
      case 3:
        if (!smtpCheck) {
          await ns.sleep(3000);
          ns.print(`Critical Error! We need relaySMTP.exe to seige ${target}!`);
          ns.print(`Printing toast message, and shutting down Sire0.3`);
          ns.toast(`SEIGE ABORTED: We need to aquire relaySMTP.exe first!`, "error", 5000);
          await ns.exit();
        } else {
          ns.print(`QUACKING SMTP!`);
          await ns.toast(`Taking a QUACK at SMTP!`, "info");
          ns.toast(`QUACK! QUACK!`, "warning");
          await ns.sleep(3000);
          // Start SMTP Verification Loop
          let isSmtp = false;
          while (!isSmtp) {
            let smtpQuack = await ns.relaysmtp(target);
            // SMTP Quacker:
            if (smtpQuack) {
              ns.print(`SMTP QUACKED!`);
              await ns.toast(`SMTP QUACKED!`, "success");
              ns.toast(`QUACK! QUACK!`, "warning");
              isSmtp = true;
            } else {
              retryCount++;
              ns.print(`Awaiting ${target}'s SMTP port. Attempting ${triesRemaining} more time(s).`);
              if (retryCount >= maxRetries) {
                ns.print(`Unknown error occured: Max Attempts Reached at quacking SMTP!`);
                ns.print(`Printing toast message, and shutting down Sire0.3`);
                ns.toast(`Uhhhhh... idk man, get to debugging?`, "error", 5000);
                await ns.exit();
              }
            }
          }
          await ns.sleep(1500);
        }
      case 2:
        if (!ftpCheck) {
          await ns.sleep(3000);
          ns.print(`Critical Error! We need FTPCrack.exe to seige ${target}!`);
          ns.print(`Printing toast message, and shutting down Sire0.3`);
          ns.toast(`SEIGE ABORTED: We need to aquire FTPCrack.exe first!`, "error", 5000);
          await ns.exit();
        } else {
          ns.print(`QUACKING FTP!`);
          await ns.toast(`Taking a QUACK at FTP!`, "info");
          ns.toast(`QUACK! QUACK!`, "warning");
          await ns.sleep(3000);
          // Start FTP Verification Loop
          let isFtp = false;
          while (!isFtp) {
            let ftpQuack = await ns.sqlinject(target);
            // SQL Quacker:
            if (ftpQuack) {
              ns.print(`FTP QUACKED!`);
              await ns.toast(`FTP QUACKED!`, "success");
              ns.toast(`QUACK! QUACK!`, "warning");
              isFtp = true;
            } else {
              retryCount++;
              ns.print(`Awaiting ${target}'s FTP port. Attempting ${triesRemaining} more time(s).`);
              if (retryCount >= maxRetries) {
                ns.print(`Unknown error occured: Max Attempts Reached at quacking FTP!`);
                ns.print(`Printing toast message, and shutting down Sire0.3`);
                ns.toast(`Uhhhhh... idk man, get to debugging?`, "error", 5000);
                await ns.ns.exit();
              }
            }
          }
          await ns.sleep(1500);
        }
      case 1:
        if (!sshCheck) {
          await ns.sleep(3000);
          ns.print(`Critical Error! We need BruteSSH.exe to seige ${target}!`);
          ns.print(`Printing toast message, and shutting down Sire0.3`);
          ns.toast(`SEIGE ABORTED: We need to aquire BruteSSH.exe first!`, "error", 5000);
          await ns.exit();
        } else {
          ns.print(`QUACKING SSH!`);
          await ns.toast(`Taking a QUACK at SSH!`, "info");
          ns.toast(`QUACK! QUACK!`, "warning");
          // Start SSH Verification Loop
          let isSsh = false;
          while (!isSsh) {
            let sshQuack = await ns.sqlinject(target);
            // SQL Quacker:
            if (sshQuack) {
              ns.print(`SSH QUACKED!`);
              await ns.toast(`SSH QUACKED!`, "success");
              ns.toast(`QUACK! QUACK!`, "warning");
              isSsh = true;
            } else {
              retryCount++;
              ns.print(`Awaiting ${target}'s SSH port. Attempting ${triesRemaining} more time(s).`);
              if (retryCount >= maxRetries) {
                ns.print(`Unknown error occured: Max Attempts Reached at quacking SSH!`);
                ns.print(`Printing toast message, and shutting down Sire0.3`);
                ns.toast(`Uhhhhh... idk man, get to debugging?`, "error", 5000);
                await ns.exit();
              }
            }
          }
          await ns.sleep(1500);
        }
      default:
        await ns.sleep(3000);
        await ns.print(`Firing ze miss-isles... at le ${target}`);
        await ns.print(`But I am le tired...`);
        await ns.print(`Well, zen go take a nap, and zen FIRE ZE MISS-ISLES!`);
        await ns.sleep(2000);
        await ns.print(`*bee-yuurrrrreet!* FRIENDLY M.O.A.B INBOUND! *bee-yuurrrrreet*`);
        await ns.print(`IT'S THE FINAL QUACK DOWN!!!!`)
        await ns.tprint(`WARNING: IT'S THE FINAL QUACK DOWN!!!!`);
        await ns.toast(`IT'S THE FINAL QUACK DOWN!`, "warning", 5000);
        await ns.toast(`QUACK! QUACK!`, "warning");
        await ns.toast(`QUACK! QUACK!`, "warning");
        await ns.toast(`QUACK! QUACK!`, "warning");
        await ns.sleep(5000);
        // Start NUKE Verification Loop
        let quackEnit = false;
        while (!quackEnit) {
          let m043 = await ns.nuke(target);
          if (m043) {
            ns.print(`${target} HAS BEEN QUACKED!`);
            await ns.toast(`QUACK! QUACK!`, "warning");
            ns.toast(`QUACK! QUACK!`, "warning");
            await ns.toast(`QUACK! QUACK!`, "warning");
            ns.toast(`QUACK! QUACK!`, "warning");
            ns.toast(`QUACK! QUACK!`, "warning");
            ns.toast(`QUACK! QUACK!`, "warning");
            quackEnit = true;
          } else {
            retryCount++;
            ns.print(`Awaiting aquisition of ${target}'s root. Attempting ${triesRemaining} more time(s).`);
            // rootCheck Retry Counter
            if (retryCount >= maxRetries) {
              ns.print(`Unknown error occured: Max Attempts Reached at quacking !`);
              ns.print(`Printing toast message, and shutting down Sire0.3`);
              ns.toast(`Uhhhhh... idk man, get to debugging?`, "error", 5000);
              await ns.ns.exit();
            }
          }
        }
        await ns.sleep(1500);
    }
  }
}

              // -----INFECTION----- \\

// INFECTION is a simple file transfer subprotol. Lot's of Wake Stuff here
export async function infect(ns) {
  
  //Pull in main vars, and funcs
  const target = ns.args[1];
  const blo0Dw0rm5 = ["botnet/wake.js", "botnet/strig.js"];
  const guestBook = "/botnet/hive.txt"
  const colors = sire.colorWheel();
  const wakeUp = sire.wakeSpeak();
  const wakeSig = sire.wakeSpoken();
    
  // Call in Wake's messages
  const wakeInit = wakeSig.aw4ke();
  const wakeReturn = wakeSig.wakeSuccess();
  const wakeBlast = wakeSig.blastoff();
  const wakeSimple = wakeSig.simple();
  const wakeError = wakeSig.fallback();

  // Print INFECTION protocol Init Success messages
  await ns.sleep(2000);
  ns.print(wakeInit);
  await ns.print(colors.green(wakeBlast));
  ns.tprint(colors.green(wakeBlast));
  ns.toast(wakeSimple, succIt);
  await ns.sleep(2000);

  // Set Loop-Killer
  const hathBtn = ns.fileExists(blo0Dw0rm5[0], target) && ns.fileExists(blo0Dw0rm5[1], target);

    //  const theOthersConf = ns.fileExists(blo0Dw0rm5[1], target);
    //  let sendOthers = await ns.scp(blo0Dw0rm5[1], target);
  
  
  // Run INFECTION transfer verification loop (open)
  let totalRetry = 0;
  const maxRetry = 3;
  while (!hathBtn && maxRetry >= totalRetry) {
    ns.print(``)
    
    // Transfer Wake first
    ns.print(colors.squire(`Sire, the Wake are advancing to ${target}`));
    if (!theWakeConf) {
      let wakeRetry = 0;                          // Set wakeRetry Counter
      let sendWake = await ns.scp(theWakeTemp);   // Start the transfer 
      if (!sendWake) {                            // Immediately check transfer success (open)
        if (theWakeConf) {                        // Check if the files made it (open)
          if (!weHathTarg ) {                     // Check if Targ's name is already in guestBook (closed)
            
            // If not (is desired result)
            ns.toast("", succIt, 3000);
            ns.print(colors.squire(`Sire! our bloodworms have made it to ${target}!`));
            await ns.print(colors.squire(`We'll have them in the guestbook at once!`));
            ns.print(colors.squire(`Sire! our bloodworms have made it to ${target}!`));  // { squireSigs? pilotSigs for sire.js?
            await ns.print(colors.squire(`We'll have them in the guestbook at once!`));
            await ns.sleep(200);
            await ns.write(guestBook, target + ",");
            
            // Send Wake success messages
            ns.print(wakeReturn);
            ns.print(wakeReturn);
            ns.print(wakeReturn);
            await ns.sleep(100);
            ns.tprint(wakeReturn + wakeReturn + wakeReturn + wakeReturn);
            ns.toast(wakeSimple, succIt, 5000);
          
          // If so, we prompt the user to check the guestbook manually
          } else {
            ns.toast("", warN);
            ns.print(colors.squire(`Sire! Target is already in hive.txt!`));
            await ns.print(colors.squire(`We should sort this out manually!`));
            ns.tprint(colors.squire(`Sire! It seems ${target} is in our guestbook already...`));
            await ns.sleep(400);
            await ns.print(colors.red(simpleWake + "??..."));
            await ns.sleep(100);
            await ns.tprint(colors.squire(`We must remove them from ${guestBook} ourselves, before the Wa-`));
            await ns.tprint(wakeError + "?%?/?");
            await ns.tprint(wakeError + "??0?10?");
            await ns.toast(simpleWake, erR, 5000);
            await ns.sleep(100);
            await ns.toast(simpleWake, erR, 5000);
            await ns.sleep(100);
            await ns.toast(simpleWake, erR, 5000);
            await ns.sleep(100);
            await ns.toast(simpleWake, erR, 5000);
            ns.tprint(colors.red(wakeUp.toUpperCase("YE_?vIL! How hast thou beholden the eye of thineself within Ye temple?!?")));
            ns.print(wakeError);
            ns.print(wakeError);
            return; // checkSire
          }
        
        // If Wake didn't make it, check if we're under total maxRetry first (open)
        } else {
          if (maxRetry >= totalRetry) {
            
            // Check if we're under wake maxRetry (open)
            if (maxRetry >= wakeRetry -1) {

              // If so, update user first
              ns.print(colors.yellow(tWarn + wakeSimple + " " + wakeSimple));
              ns.print(colors.squire(tWarn + `Sire! 'your freinds' are having a bit of trouble infecting ${target} ...`))
              await ns.tprint(tWarn + wakeBlast);
              await ns.print(`${target} failed to recie-` + colors.red(wakeBlast));
              ns.toast(wakeSimple + wakeSimple, erR, 5000);
              await ns.tprint(colors.red("..."));
              await ns.sleep(3000);
              await ns.tprint(colors.yellow(wakeUp(`We hath not`) + `...errr0000000rr00r0r0rr0 ${wakeSimple}`));
              await ns.tprint(colors.red(wakeup(`Beholdest Our might!`) + wakeSimple));
              
              // Then add to wakeRetry Counter, and wait before retrying
              wakeRetry++;
              await ns.sleep(300);
            
            // Otherwise, let user know of file failure
            } else {
              ns.toast(wakeSimple + wakeSimple, erR, 5000);
              await ns.print(`${target} failed to recie-` + colors.red(wakeBlast));
              ns.print(colors.red(tErr + wakeError + " !!!!!!"));
              await ns.tprint(colors.red(tErr + wakeBlast));
              await ns.toast(wakeBlast, erR, 3500);
              await ns.sleep(200);
              ns.print(colors.red(tErr + wakeError + " !!!!!!"));
              await ns.tprint(colors.red(tErr + wakeBlast));
              await ns.toast(wakeBlast, erR, 3500);
              await ns.sleep(200);
              await ns.tprint(colors.red("..."));
              await ns.sleep(3200);
              await ns.tprint(colors.squire(wakeSimple + wakeUp(`We art not Enemy`) + `...`));
              await ns.tprint(colors.squire(wakeSimple + wakeUp(`Ye shalt bowest before We`) + `...`));
              await ns.tprint(colors.red(wakeSimple + wakeUp(`Ye shalt beknownst thy selves in Him.`)));
              await ns.print(colors.squire(`*squelch*`));
              await ns.print(`(scrubbing in  T minu*radioCracking*)`);
              await ns.toast(wakeSimple + `Could not infect ${target} with Wake!`, erR, 3000);
              await ns.sleep(1500);
              await ns.print(colors.squire(`My appologies Sire...`));
              await ns.print(colors.squire(`'I' hate when....'We' do that...`));
              await ns.sleep(200);
              await ns.sleep("");
              await 

            }
          }
        }
      }
    }
        //let othersRetry = 0; Ignore: this will be moved to it's own if statement shortly
  }
}

  // Annnnnnd freaky Bible worm-bot POST! (left as ref):
  //await ns.print(blue + glitchedMessage + colorReset);
  //await ns.tprint(blue + glitchedMessage + colorReset);
  //await ns.toast(glitchedMessage, erR);