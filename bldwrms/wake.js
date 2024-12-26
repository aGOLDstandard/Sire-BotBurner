/** @param {NS} ns */
export async function main(ns) {
  // Note: I have some sweet art I want to slap up here for the mission statement, "but keeping it on hold" for now.
  // ----- Identity Vars: ----- //

    // --Targeting:
  const target = ns.args[0];
  const h0st = ns.getHostname();

    // --Files:
  const files = ["wake.js", "strig.js"];

    // RAM Thresholds:
      // Pre-Calculations:
  const ramMax = ns.getServerMaxRam(h0st);
  const strigRam = ns.getScriptRam(files.length[0]);
  const wakeRam = ns.getScriptRam(files.length[1]);
      // Final Calculations:
  const speed = (ramMax - wakeRam) / strigRam;
  const threads = Math.floor(speed);

  // Now kick it!
  await ns.run(files.length[0], threads, target);
}