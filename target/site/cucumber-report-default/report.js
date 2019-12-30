$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("01_RegisterAndLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Register new account and login",
  "description": "As a new customer\r\nI want to register and login to the application normally",
  "id": "register-new-account-and-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegisterAndLogin"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "01 - Register to Passenger application",
  "description": "",
  "id": "register-new-account-and-login;01---register-to-passenger-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I logout if currently logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click to phone number text box",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select \"beta\" server and input \"tamqa\" fleet code",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select the phone code by \"Vietnam\" country",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I input the phone number",
  "rows": [
    {
      "cells": [
        "phoneNumber"
      ],
      "line": 12
    },
    {
      "cells": [
        "356877210"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I agree with Term of use and Privacy policy",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click to continue button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I input sms verify code if have",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify register message contains \"MyCar\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I input user information to register",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Email",
        "ID/IC",
        "Gender"
      ],
      "line": 19
    },
    {
      "cells": [
        "Danny",
        "Cee",
        "tamqada@gmail.com",
        "123123123",
        "Male"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click to save button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I verify the passenger register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterAndLoginSteps.iLogoutIfCurrentlyLoggedIn()"
});
formatter.result({
  "duration": 21255581918,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iClickToPhoneNumberTextBox()"
});
formatter.result({
  "duration": 1429582961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "beta",
      "offset": 10
    },
    {
      "val": "tamqa",
      "offset": 34
    }
  ],
  "location": "RegisterAndLoginSteps.iSelectServerAndInputFleetCode(String,String)"
});
formatter.result({
  "duration": 9911312124,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vietnam",
      "offset": 28
    }
  ],
  "location": "RegisterAndLoginSteps.iSelectThePhoneCodeByCountry(String)"
});
formatter.result({
  "duration": 79352828,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.i_input_the_phone_number(DataTable)"
});
formatter.result({
  "duration": 1148652560,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iAgreeWithTermOfUseAndPrivacyPolicy()"
});
formatter.result({
  "duration": 649551866,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iClickToContinueButton()"
});
formatter.result({
  "duration": 1366301457,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iInputSmsVerifyCodeIfHave()"
});
formatter.result({
  "duration": 4013701229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MyCar",
      "offset": 36
    }
  ],
  "location": "RegisterAndLoginSteps.iVerifyRegisterMessageContains(String)"
});
formatter.result({
  "duration": 2672198942,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iInputUserInformationToRegister(DataTable)"
});
formatter.result({
  "duration": 13081634245,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iClickToSaveButton()"
});
formatter.result({
  "duration": 615593774,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iVerifyThePassengerRegisterSuccessfully()"
});
formatter.result({
  "duration": 4763211752,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "02 - Login to Pax app by the phone number just registered",
  "description": "",
  "id": "register-new-account-and-login;02---login-to-pax-app-by-the-phone-number-just-registered",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "I logout if currently logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click to phone number text box",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I input the phone number",
  "rows": [
    {
      "cells": [
        "phoneNumber"
      ],
      "line": 28
    },
    {
      "cells": [
        "\u003cPhoneNumber\u003e"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I agree with Term of use and Privacy policy",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click to continue button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I input sms verify code if have",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I verify the passenger login successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "Login with the number just registered and the phone number which used to login app",
  "description": "",
  "id": "register-new-account-and-login;02---login-to-pax-app-by-the-phone-number-just-registered;login-with-the-number-just-registered-and-the-phone-number-which-used-to-login-app",
  "rows": [
    {
      "cells": [
        "PhoneNumber"
      ],
      "line": 35,
      "id": "register-new-account-and-login;02---login-to-pax-app-by-the-phone-number-just-registered;login-with-the-number-just-registered-and-the-phone-number-which-used-to-login-app;1"
    },
    {
      "cells": [
        "356877210"
      ],
      "line": 36,
      "id": "register-new-account-and-login;02---login-to-pax-app-by-the-phone-number-just-registered;login-with-the-number-just-registered-and-the-phone-number-which-used-to-login-app;2"
    },
    {
      "cells": [
        "0356822833"
      ],
      "line": 37,
      "id": "register-new-account-and-login;02---login-to-pax-app-by-the-phone-number-just-registered;login-with-the-number-just-registered-and-the-phone-number-which-used-to-login-app;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 36,
  "name": "02 - Login to Pax app by the phone number just registered",
  "description": "",
  "id": "register-new-account-and-login;02---login-to-pax-app-by-the-phone-number-just-registered;login-with-the-number-just-registered-and-the-phone-number-which-used-to-login-app;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@RegisterAndLogin"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I logout if currently logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click to phone number text box",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I input the phone number",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "phoneNumber"
      ],
      "line": 28
    },
    {
      "cells": [
        "356877210"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I agree with Term of use and Privacy policy",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click to continue button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I input sms verify code if have",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I verify the passenger login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterAndLoginSteps.iLogoutIfCurrentlyLoggedIn()"
});
formatter.result({
  "duration": 17990942073,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iClickToPhoneNumberTextBox()"
});
formatter.result({
  "duration": 2436581168,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.i_input_the_phone_number(DataTable)"
});
formatter.result({
  "duration": 1200918233,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iAgreeWithTermOfUseAndPrivacyPolicy()"
});
formatter.result({
  "duration": 639992249,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iClickToContinueButton()"
});
formatter.result({
  "duration": 1433487275,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iInputSmsVerifyCodeIfHave()"
});
formatter.result({
  "duration": 4387383522,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iVerifyThePassengerLoginSuccessfully()"
});
formatter.result({
  "duration": 68534881,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "02 - Login to Pax app by the phone number just registered",
  "description": "",
  "id": "register-new-account-and-login;02---login-to-pax-app-by-the-phone-number-just-registered;login-with-the-number-just-registered-and-the-phone-number-which-used-to-login-app;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@RegisterAndLogin"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I logout if currently logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click to phone number text box",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I input the phone number",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "phoneNumber"
      ],
      "line": 28
    },
    {
      "cells": [
        "0356822833"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I agree with Term of use and Privacy policy",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click to continue button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I input sms verify code if have",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I verify the passenger login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterAndLoginSteps.iLogoutIfCurrentlyLoggedIn()"
});
formatter.result({
  "duration": 19044587598,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iClickToPhoneNumberTextBox()"
});
formatter.result({
  "duration": 1466742098,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.i_input_the_phone_number(DataTable)"
});
formatter.result({
  "duration": 1497146484,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iAgreeWithTermOfUseAndPrivacyPolicy()"
});
formatter.result({
  "duration": 638458030,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iClickToContinueButton()"
});
formatter.result({
  "duration": 1381043425,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iInputSmsVerifyCodeIfHave()"
});
formatter.result({
  "duration": 2794730366,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iVerifyThePassengerLoginSuccessfully()"
});
formatter.result({
  "duration": 2893527583,
  "status": "passed"
});
formatter.uri("02_HomePageTestCases.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Check car type on map",
  "description": "",
  "id": "check-car-type-on-map",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@HomePageTestCases"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "01 - Check default car type on Home screen",
  "description": "",
  "id": "check-car-type-on-map;01---check-default-car-type-on-home-screen",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I login to Pax app with phone number \"356822833\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I verify the Pax login successfully",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should see the car image",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should see the car name",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see the max of seat",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "356822833",
      "offset": 38
    }
  ],
  "location": "HomePageSteps.iLoginToPaxAppWithPhoneNumber(String)"
});
formatter.result({
  "duration": 30494151945,
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Could not proxy command to remote server. Original error: Error: socket hang up\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027TAM-NGUYEN\u0027, ip: \u0027192.168.0.160\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {appActivity: com.qup.pegasus.ui.launch.L..., appPackage: com.mycar.passenger, autoGrantPermissions: true, automationName: UiAutomator2, databaseEnabled: false, desired: {appActivity: com.qup.pegasus.ui.launch.L..., appPackage: com.mycar.passenger, autoGrantPermissions: true, automationName: UiAutomator2, deviceName: HT69H0201382, noReset: true, platformName: android, platformVersion: 10, skipDeviceInitialization: true, skipServerInstallation: true}, deviceApiLevel: 29, deviceManufacturer: Google, deviceModel: Pixel XL, deviceName: HT69H0201382, deviceScreenDensity: 560, deviceScreenSize: 1440x2560, deviceUDID: HT69H0201382, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, noReset: true, pixelRatio: 3.5, platform: LINUX, platformName: Android, platformVersion: 10, skipDeviceInitialization: true, skipServerInstallation: true, statBarHeight: 84, takesScreenshot: true, viewportRect: {height: 2420, left: 0, top: 84, width: 1440}, warnings: {}, webStorageEnabled: false}\nSession ID: c1d63a6b-a44f-42c7-a494-e616c835240f\n*** Element info: {Using\u003did, value\u003dcom.mycar.passenger:id/editPhone}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\r\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat commons.AbstractPage.sendKeyToElementById(AbstractPage.java:62)\r\n\tat pageObjects.LoginPO.inputToPhoneNumberTextbox(LoginPO.java:73)\r\n\tat stepDefinitions.HomePageSteps.iLoginToPaxAppWithPhoneNumber(HomePageSteps.java:78)\r\n\tat ✽.Given I login to Pax app with phone number \"356822833\"(02_HomePageTestCases.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageSteps.iVerifyThePaxLoginSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.iShouldSeeTheCarImage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.iShouldSeeTheCarName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.iShouldSeeTheMaxOfSeat()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "02 - Check PU is the current location",
  "description": "",
  "id": "check-car-type-on-map;02---check-pu-is-the-current-location",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I am in the Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "The PU should be the current location",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmInTheHomePage()"
});
formatter.result({
  "duration": 10809930917,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.thePUShouldBeTheCurrentLocation()"
});
formatter.result({
  "duration": 1936184373,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:496)\r\n\tat org.testng.Assert.assertTrue(Assert.java:42)\r\n\tat org.testng.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefinitions.HomePageSteps.thePUShouldBeTheCurrentLocation(HomePageSteps.java:110)\r\n\tat ✽.Then The PU should be the current location(02_HomePageTestCases.feature:15)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 17,
  "name": "03 - Move map and Update PU location to current location",
  "description": "",
  "id": "check-car-type-on-map;03---move-map-and-update-pu-location-to-current-location",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I am in the Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I move map to change PU location",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I verify the PU was changed",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I press button to back to the current GPS",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "The PU should be the current location",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmInTheHomePage()"
});
formatter.result({
  "duration": 13436887025,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMoveMapToChangePULocation()"
});
formatter.result({
  "duration": 2981620985,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iVerifyThePUWasChanged()"
});
formatter.result({
  "duration": 797269197,
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Could not proxy command to remote server. Original error: Error: socket hang up\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027TAM-NGUYEN\u0027, ip: \u0027192.168.0.160\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {appActivity: com.qup.pegasus.ui.launch.L..., appPackage: com.mycar.passenger, autoGrantPermissions: true, automationName: UiAutomator2, databaseEnabled: false, desired: {appActivity: com.qup.pegasus.ui.launch.L..., appPackage: com.mycar.passenger, autoGrantPermissions: true, automationName: UiAutomator2, deviceName: HT69H0201382, noReset: true, platformName: android, platformVersion: 10, skipDeviceInitialization: true, skipServerInstallation: true}, deviceApiLevel: 29, deviceManufacturer: Google, deviceModel: Pixel XL, deviceName: HT69H0201382, deviceScreenDensity: 560, deviceScreenSize: 1440x2560, deviceUDID: HT69H0201382, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, noReset: true, pixelRatio: 3.5, platform: LINUX, platformName: Android, platformVersion: 10, skipDeviceInitialization: true, skipServerInstallation: true, statBarHeight: 84, takesScreenshot: true, viewportRect: {height: 2420, left: 0, top: 84, width: 1440}, warnings: {}, webStorageEnabled: false}\nSession ID: 12b7f785-8b81-469b-980a-fb5504b26c58\n*** Element info: {Using\u003did, value\u003dcom.mycar.passenger:id/imvLocation}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElements(DefaultGenericMobileDriver.java:53)\r\n\tat io.appium.java_client.AppiumDriver.findElements(AppiumDriver.java:178)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsById(RemoteWebDriver.java:376)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementsById(DefaultGenericMobileDriver.java:65)\r\n\tat io.appium.java_client.AppiumDriver.findElementsById(AppiumDriver.java:183)\r\n\tat org.openqa.selenium.By$ById.findElements(By.java:180)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElements(DefaultGenericMobileDriver.java:49)\r\n\tat io.appium.java_client.AppiumDriver.findElements(AppiumDriver.java:173)\r\n\tat commons.AbstractPage.checkElementPresentById(AbstractPage.java:117)\r\n\tat pageObjects.HomePO.isThePUWasChanged(HomePO.java:60)\r\n\tat stepDefinitions.HomePageSteps.iVerifyThePUWasChanged(HomePageSteps.java:120)\r\n\tat ✽.And I verify the PU was changed(02_HomePageTestCases.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageSteps.i_press_button_to_back_to_the_current_gps()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.thePUShouldBeTheCurrentLocation()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 24,
  "name": "04 - Check available car types when press \"view all\"",
  "description": "",
  "id": "check-car-type-on-map;04---check-available-car-types-when-press-\"view-all\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "I am in the Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I press view all button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I should see the car name",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I should see the car image",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see the max of seat",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.iAmInTheHomePage()"
});
formatter.result({
  "duration": 9948268040,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_press_view_all_button()"
});
formatter.result({
  "duration": 3958119968,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iShouldSeeTheCarName()"
});
formatter.result({
  "duration": 1426351946,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iShouldSeeTheCarImage()"
});
formatter.result({
  "duration": 98616986,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iShouldSeeTheMaxOfSeat()"
});
formatter.result({
  "duration": 91559661,
  "status": "passed"
});
});