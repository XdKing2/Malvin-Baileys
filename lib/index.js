"use strict";

const chalk = require('chalk');
const gradient = require('gradient-string');
const figlet = require('figlet');

// Beautiful Malvin-themed startup banner
console.log(chalk.gray("═".repeat(60)));
console.log(gradient(['#00D4FF', '#0099FF', '#00D4FF'])("\n✨ Malvin Baileys Modified 2025-2026 ✨\n"));
console.log(gradient(['#FFD700', '#FF6B6B', '#4ECDC4'])(" Hi, thank you for using Malvin's modified Baileys ^-^ \n"));
console.log(chalk.gray("═".repeat(60)));
console.log(gradient(['#00FF88', '#FFFFFF'])("👑 Developer: ") + gradient(['#ff004cff', '#b18999ff'])("@XdKing2 | Malvin King"));
console.log(gradient(['#00FF88', '#FFFFFF'])("📦 Package: ") + gradient(['#FFD700', '#FF6B6B'])("malvin-baileys v2.2.2"));
console.log(gradient(['#00FF88', '#FFFFFF'])('\n🎯 Initializing Malvin Baileys Socket Connection...\n'));
console.log(chalk.gray("═".repeat(60)));

// Your exports
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
