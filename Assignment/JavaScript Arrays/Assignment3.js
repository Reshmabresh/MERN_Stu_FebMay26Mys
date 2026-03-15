// Permission rules
const rules = [
  { role: "admin", action: "READ", allowed: true },
  { role: "student", action: "READ", allowed: true },
];

const allowedRules = rules.filter(rule => rule.allowed === true);

const allowedPairs = allowedRules.map(rule => `${rule.role}:${rule.action}`);


const summary = allowedRules.reduce

console.log("allowedRules:", allowedRules);
console.log("allowedPairs:", allowedPairs);
console.log("summary:", summary);