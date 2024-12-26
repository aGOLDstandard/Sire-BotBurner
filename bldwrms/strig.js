/** @param {NS} ns */
export async function main(ns) {
    //--------------------------------------------------------------------------------------------------------------//
    //-----------------------------------------Mission Scope--------------------------------------------------------//
    //--------------------------------------------------------------------------------------------------------------//
    
    // 1.) IF our target's sec level is greater or equal to the Base level, then chances are we may have just
          // soft reset, and need to really dig away at the target's security mainly, and juice up their booty pockets    } Why am I not going on player level for this? I don't think thats even a singularity thing ROFL!
          // before we consider an actual "attack". We're uh.....a symbiotic parasite >:] scratching backs and what-not.
    
    // 2.) ELSE, we need to double check IF those pockets are nice and fat before we run the typical sca-
          // I mean uh...'Before we take our payment for services rendered' ;) >:] We tried to stuff em a little
          // while we hit Security, but it wasn't the main focus until now. That is, now that the
          // badge-jockeys have been sorted. 
    
    // 3.) ELSE we use our typical and shittily balanced "stratigic growth strategy" (I didn't name it, don't ask)
          // to psuedo-arbitrarily run our plays -
    
    // 4.) Then we use some right 'workarounding' to keep out levels in check!
    
    //--------------------------------------------------------------------------------------------------------------//
    //--------------------------------------------------------------------------------------------------------------//
    //--------------------------------------------------------------------------------------------------------------//
    
    // ----- Identity vars: -----//
      
      // --Targeting:
      const target = ns.args[0]; // Take target hostname from the 1st argument declared
    
    // ----- Thresholds: -----//
      
      // --Security Handling:
        // Pre-Calculations:
      const secLevel = ns.getServerSecurityLevel(target); // Target's Current,
      const minSec = ns.getServerMinSecurityLevel(target); // Minimum,
      const baseSec = ns.getServerBaseSecurityLevel(target)// and Base Security Levels.
      const isBaseSec = baseSec === true;
        // Final Calculations:
      const secThreshA = 5 + minSec; // 5 points higher than the Min Security Level
      const secThreshB = 2.3 + minSec; // 2.3 points higer than secThreshA ^^
      const secAlarm = secLevel >= baseSec + 10 || secLevel > 50; // Be alarmed if we're 10 points higher than the target's baseSec, or over 50.
      
      // --Acounting:
        // Pre-Calculations:
      const monLevel = ns.getServerMoneyAvailable(target); // Gets the current amount of money in the target's wallet.
      const maxMon = ns.getServerMaxMoney(target); // Gets the max amount of money the target can hold at any one time,
      const monPercentage = maxMon / 100; // calculates 1% of maxMon by simply dividing it by 100,
      const fivePercent = monPercentage * 5; // uses monPercentage to calculate 5% of maxMon,
      const oneQuarter = monPercentage * 25; // then does the same, but for 25%
        // Final Calculations:
      const monThreshA = maxMon - fivePercent; // 5% < maxMon
      const monThreshB = maxMon - onQuarter; // 25% < maxMon
      const monAlarm = monLevel <= 100; // Be alarmed if we've at or less than $100
      
    // ----- Initial Target Staging: ----- //
    
      // --Puppet Handling:
        // Defcon levels:
      const isDefcon1 = secLevel <= secThreshB; // True if secLevel is < or = secThreshB
      const isDefcon2 = secLevel >= secThreshB && secLevel < secThreshA; // True if between threshB and A
      const isDefcon3 = secLevel >= secThreshA && secLevel < secAlarm; // True if between A and Alarm
      const isDefcon4 = secLevel >= secAlarm; // True if Security levels are just geting straight up out of hand...
        // Action Codes:
      // Something like "codeBlack = secAlarm && monAlarm,
          // or "codeGreen = !isDefcon3 && monLevel < monThreshB"
    
      // -----------------------------------------------  
      while (defcon) {
        if (secLevel > secThreshA){
          await ns.weaken(target);
          await ns.sleep(target);
        } else {
          while (monLevel < monThreshA){
    
          }
        }
      }
      while (ns.getServerMoneyAvailable(target) < moneyThreshA) {
        await ns.grow(target);
      }
    
      if (ns.getServerSecurityLevel(target) > secThreshB) {
        while (true) {
          await ns.weaken(target);
          await ns.hack(target);
          await ns.weaken(target);
          await ns.sleep(100);
        }
      } else {
        while (ns.getServerMoneyAvailable(target) < moneyThreshB) {
          await ns.grow(target);
          await ns.hack(target);
          await ns.grow(target);
          await ns.weaken(target);
          await ns.grow(target);
          await ns.sleep(100);
        }
      }
    }