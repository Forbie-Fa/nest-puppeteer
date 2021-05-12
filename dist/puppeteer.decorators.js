"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectPage = exports.InjectContext = exports.InjectBrowser = void 0;
const common_1 = require("@nestjs/common");
const puppeteer_util_1 = require("./puppeteer.util");
/**
 * Inject the Browser object associated with a connection
 * @param instanceName The unique name associated with the browser
 */
const InjectBrowser = (instanceName) => common_1.Inject(puppeteer_util_1.getBrowserToken(instanceName));
exports.InjectBrowser = InjectBrowser;
/**
 * Inject the Puppeteer BrowserContext object associated with a browser
 * @param instanceName The unique name associated with the browser
 */
const InjectContext = (instanceName) => common_1.Inject(puppeteer_util_1.getContextToken(instanceName));
exports.InjectContext = InjectContext;
/**
 * Inject the Puppeteer Page object associated with BrowserContext
 * @param instanceName The unique name associated with the instance
 */
const InjectPage = (instanceName) => common_1.Inject(puppeteer_util_1.getPageToken(instanceName));
exports.InjectPage = InjectPage;
//# sourceMappingURL=puppeteer.decorators.js.map