import path from "path";
import video from "wdio-video-reporter";
import allure from "allure-commandline";
import { EventEmitter } from "events";
import fsExtra from "fs-extra";
import mergeResults from "@wdio/json-reporter/mergeResults";
const { removeSync } = fsExtra;

EventEmitter.defaultMaxListeners = 50;

export const config = {
  //
  // ====================
  // Runner Configuration
  // ====================
  // WebdriverIO supports running e2e tests as well as unit and component tests.
  hostname: "localhost",
  port: 4723,
  path: "/wd/hub",
  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // of the configuration file being run.
  //
  // The specs are defined as an array of spec files (optionally using wildcards
  // that will be expanded). The test for each spec file will be run in a separate
  // worker process. In order to have a group of spec files run in the same worker
  // process simply enclose them in an array within the specs array.
  //
  // The path of the spec files will be resolved relative from the directory of
  // of the config file unless it"s absolute.
  //
  specs: [
    //"./Test/spec/login.spec.js",
    //"./Test/spec/Test.spec.js",
    "./Test/spec/dasBoard.spec.js",
  ],
  exclude: [
    // "path/to/excluded/files"
  ],
  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let"s
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  maxInstances: 40,
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://saucelabs.com/platform/platform-configurator
  //
  capabilities: [
    // capabilities for local Appium web tests on an Android Emulator
    // {
    //     "platformName": "Android",
    //     "appium:deviceName": "vivo V2222",
    //      "appium:platformVersion": "15",
    //      "appium:automationName": "UiAutomator2",
    //      "appium:app":"/Users/nagasubarayudu/Desktop/NokiAndroid/app/Noki(T)(V_1.3.0_2025041101).apk",
    //      "appium:noReset":true,
    //      "appium:fullReset": false,
    //      "appium:forceAppLaunch":true,
    //      "appium:showXcodeLog": true,
    //      "appium:wdaLaunchTimeout": 1800000,
    //      "appium:newCommandTimeout": 1800000,
    //      "appium:connectionTimeout": 1800000,
    //      "appium:sessionOverride": true,
    //      "appium:bundleId": "com.thinkhat.haynoki",
    //      "appium:AcceptAlerts": true,
    //      "appium:connectHardwareKeyboard": true,
    //   }
    {
      platformName: "Android",
      "appium:deviceName": "Pixel",
      "appium:platformVersion": "15",
      "appium:automationName": "UiAutomator2",
      "appium:noReset": true,
      "appium:fullReset": false,
      "appium:newCommandTimeout": 1200000,
      "appium:connectionTimeout": 120000,
      "appium:sessionOverride": true,
      "appium:autoGrantPermissions": true,
      "appium:adbExecTimeout": 50000,
      //"appium:forceAppLaunch": true,
      "appium:disableWindowAnimation": true,
      "appium:appPackage": "com.noki.patientapp",
      "appium:uiautomator2ServerLaunchTimeout": 60000,
      "appium:uiautomator2ServerInstallTimeout": 60000,
    },
    //         "appium:platformName": "iOS",
    //         "appium:path": "/wd/hub",
    //         "appium:app": "/Users/nagasubarayudu/Desktop/IOS/app/Noki-TJan7.app",
    //         "appium:deviceName": "iPhone 16 Pro Max",
    //         "appium:platformVersion": "18.0",
    //         "appium:automationName": "XCUITest",
    //         "appium:wdaLocalPort": 8100,
    //         "appium:noReset": true,
    //         "appium:fullReset": false,
    //         "appium:useNewWDA": true,
    //         "appium:showXcodeLog": true,
    //         "appium:wdaLaunchTimeout": 120000,
    //         "appium:newCommandTimeout": 1800000,
    //         "appium:connectionTimeout": 120000,
    //         "appium:sessionOverride": true,
    //         "appium:udid": "90114A4A-2E6F-4CBD-ABC3-E133CC2D274D",
    //         "appium:bundleId": "com.thinkhat.nokiTest",
    //         "appium:connectHardwareKeyboard": true,
    //         "appium:AcceptAlerts": true

    //  }
  ],

  //
  // ===================allu
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "info",
  //
  // Set specific log levels per logger
  // loggers:
  // - webdriver, webdriverio
  // - @wdio/browserstack-service, @wdio/lighthouse-service, @wdio/sauce-service
  // - @wdio/mocha-framework, @wdio/jasmine-framework
  // - @wdio/local-runner
  // - @wdio/sumologic-reporter
  // - @wdio/cli, @wdio/config, @wdio/utils
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  // logLevels: {
  //     webdriver: "info",
  //     "@wdio/appium-service": "info"
  // },
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don"t bail, run all tests).
  bail: 0,
  //
  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  // baseUrl: "http://localhost:8080",
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 240000,
  //
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn"t send response
  connectionRetryTimeout: 240000,
  //
  // Default request retries count
  connectionRetryCount: 5,
  //
  // Test runner services
  // Services take over a specific job you don"t want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don"t add new
  // commands. Instead, they hook themselves up into the test process.
  services: [
    [
      "appium",
      {
        args: {
          relaxedSecurity: true,
        },
      },
    ],
    [
      "visual",
      {
        baselineFolder: path.join(process.cwd(), "tests", "baseline"),
        formatImageName: "{tag}-{logName}-{width}x{height}",
        screenshotPath: path.join(process.cwd(), "tmp"),
        savePerInstance: true,
        createJsonReportFiles: true,
      },
    ],
  ],

  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: https://webdriver.io/docs/frameworks
  //
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: "mocha",

  //
  // The number of times to retry the entire specfile when it fails as a whole
  // specFileRetries: 1,
  //
  // Delay in seconds between the spec file retry attempts
  // specFileRetriesDelay: 0,
  //
  // Whether or not retried spec files should be retried immediately or deferred to the end of the queue
  // specFileRetriesDeferred: false,
  //
  // Test reporter for stdout.
  // The only one supported by default is "dot"
  // see also: https://webdriver.io/docs/dot-reporter
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
        debug: true,
      },
    ],
    [
      "json",
      {
        outputDir: "/Users/nagasubarayudu/Desktop/patientPortal/jsonResults",
        outputFileFormat: (opts) => {
          return `results-${opts.cid}.json`; // Simplified naming
        },
      },
    ],
    //     [video, {
    //         saveAllVideos: true,
    //         videoSlowdownMultiplier: 10,
    //         outputDir: '/Users/nagasubarayudu/Desktop/NokiAndroid/_results_',
    // takeScreenshotOnFail: false,
    // onComplete: () => {
    //   const resultsDir = '/Users/nagasubarayudu/Desktop/NokiAndroid/_results_';
    //   if (!fs.existsSync(resultsDir)) {
    //     fs.mkdirSync(resultsDir, { recursive: true });
    //   }
    //   console.log('Video files:', fs.readdirSync(resultsDir));
    // }
    //       }]
  ],

  // Options to be passed to Mocha.
  // See the full list at http://mochajs.org/
  mochaOpts: {
    ui: "bdd",
    timeout: 2400000,
  },

  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  /**
   * Gets executed once before all workers get launched.
   * @param {object} _config wdio configuration object
   * @param {Array.<Object>} _capabilities list of capabilities details
   */

  onPrepare: function (_config, _capabilities) {
    console.log("Cleaning up old allure results...");
    removeSync("./allure-results"); // Automatically remove old results
  },
  /**
   * Gets executed before a worker process is spawned and can be used to initialize specific service
   * for that worker as well as modify runtime environments in an async fashion.
   * @param  {string} cid      capability id (e.g 0-0)
   * @param  {object} caps     object containing capabilities for session that will be spawn in the worker
   * @param  {object} specs    specs to be run in the worker process
   * @param  {object} args     object that will be merged with the main configuration once worker is initialized
   * @param  {object} execArgv list of string arguments passed to the worker process
   */
  // onWorkerStart: function (cid, caps, specs, args, execArgv) {
  // },
  /**
   * Gets executed just after a worker process has exited.
   * @param  {string} cid      capability id (e.g 0-0)
   * @param  {number} exitCode 0 - success, 1 - fail
   * @param  {object} specs    specs to be run in the worker process
   * @param  {number} retries  number of retries used
   */
  // onWorkerEnd: function (cid, exitCode, specs, retries) {
  // },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   * @param {string} cid worker id (e.g. 0-0)
   */
  // beforeSession: function (config, capabilities, specs, cid) {
  // },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs        List of spec file paths that are to be run
   * @param {object}         browser      instance of created browser/device session
   */
  // before: function (capabilities, specs) {
  //     const helper =   require("./helper/helper.js"); // Ensure helper is initialized here
  //     global.helper = helper; // Make it globally accessible if needed
  // },
  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {string} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // beforeCommand: function (commandName, args) {
  // },
  /**
   * Hook that gets executed before the suite starts
   * @param {object} suite suite details
   */
  // beforeSuite: function (suite) {
  // },
  /**
   * Function to be executed before a test (in Mocha/Jasmine) starts.
   */
  // beforeTest: function (test, context) {
  // },
  /**
   * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
   * beforeEach in Mocha)
   */
  // beforeHook: function (test, context, hookName) {
  // },
  /**
   * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
   * afterEach in Mocha)
   */
  // afterHook: function (test, context, { error, result, duration, passed, retries }, hookName) {
  // },
  /**
   * Function to be executed after a test (in Mocha/Jasmine only)
   * @param {object}  _test             test object
   * @param {object}  _context          scope object the test was executed with
   * @param {Error}   result.error     error object in case the test fails, otherwise `undefined`
   * @param {*}       result.result    return object of test function
   * @param {number}  result.duration  duration of test
   * @param {boolean} result.passed    true if test has passed, otherwise false
   * @param {object}  result.retries   information about spec related retries, e.g. `{ attempts: 0, limit: 0 }`
   */
  // afterTest: async function(_test, _context, { error, result, duration, passed, retries }) {
  //     const BASE_DIR = "/Users/nagasubarayudu/Desktop/NokiAndroid";
  //     const screenshotDir = path.join(BASE_DIR, "allure-results", "screenshots");
  //     if (!fs.existsSync(screenshotDir)) {
  //         fs.mkdirSync(screenshotDir, { recursive: true });
  //     }

  //     const testName = _test.title.replace(/[^a-zA-Z0-9]/g, "_");
  //     const status = error ? "failed" : "passed";
  //     const screenshotPath = path.join(screenshotDir, `${testName}_${status}_${new Date().toISOString().replace(/:/g, "-")}.png`);

  //     if (error) {
  //         await browser.saveScreenshot(screenshotPath);
  //         console.log(`📸 Screenshot saved: ${screenshotPath}`);
  //     }
  // },
  onAfterCommand(commandName, args, result, error) {
    const allure = this.allure;
    if (allure && allure.getCurrentTest()) {
      // Ensure there is an active test
      if (commandName === "takeScreenshot") {
        allure.addAttachment(
          "Screenshot",
          Buffer.from(result, "base64"),
          "image/png"
        );
      }
    } else {
      console.warn("No active test found to attach screenshot or file.");
    }
  },
  onComplete: function (_exitCode, _config, _capabilities, _results) {
    mergeResults(
      "/Users/nagasubarayudu/Desktop/patientPortal/jsonResults",
      "results-.*\\.json", // Match files like results-0-0.json
      "wdio-custom-filename.json"
    );
    const reportError = new Error("Could not generate Allure report");
    const generation = allure(["generate", "allure-results", "--clean"]);
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject(reportError), 30000);
      generation.on("exit", function (exitCode) {
        clearTimeout(generationTimeout);
        if (exitCode !== 0) {
          return reject(reportError);
        }
        console.log("Allure report successfully generated");
        resolve();
      });
    });
  },

  // ... other config ...
};
