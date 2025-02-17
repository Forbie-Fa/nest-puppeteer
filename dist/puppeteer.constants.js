"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_CHROME_LAUNCH_OPTIONS = exports.DEFAULT_PUPPETEER_INSTANCE_NAME = exports.PUPPETEER_MODULE_OPTIONS = exports.PUPPETEER_INSTANCE_NAME = void 0;
exports.PUPPETEER_INSTANCE_NAME = 'PuppeteerInstanceName';
exports.PUPPETEER_MODULE_OPTIONS = 'PuppeteerModuleOptions';
exports.DEFAULT_PUPPETEER_INSTANCE_NAME = 'DefaultPuppeteer';
const args = [
    '--allow-insecure-localhost',
    '--allow-http-screen-capture',
    '--no-zygote', // https://codereview.chromium.org/2384163002
];
// add --no-sandbox when running on Linux, required with --no-zygote
if (typeof process.getuid === 'function') {
    args.push('--no-sandbox');
}
exports.DEFAULT_CHROME_LAUNCH_OPTIONS = {
    headless: true,
    pipe: process.platform !== 'win32',
    args,
};
//# sourceMappingURL=puppeteer.constants.js.map