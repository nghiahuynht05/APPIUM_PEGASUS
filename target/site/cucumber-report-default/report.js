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
      "name": "@TC01_registerAndLogin"
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
  "name": "I select \"sea\" server and input \"myqup\" fleet code",
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
  "duration": 18261864948,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iClickToPhoneNumberTextBox()"
});
formatter.result({
  "duration": 1502572700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sea",
      "offset": 10
    },
    {
      "val": "myqup",
      "offset": 33
    }
  ],
  "location": "RegisterAndLoginSteps.iSelectServerAndInputFleetCode(String,String)"
});
formatter.result({
  "duration": 10548061453,
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
  "duration": 178790090,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.i_input_the_phone_number(DataTable)"
});
formatter.result({
  "duration": 857237166,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iAgreeWithTermOfUseAndPrivacyPolicy()"
});
formatter.result({
  "duration": 818871427,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iClickToContinueButton()"
});
formatter.result({
  "duration": 1789362037,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iInputSmsVerifyCodeIfHave()"
});
formatter.result({
  "duration": 3580121579,
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
  "duration": 488410427,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iInputUserInformationToRegister(DataTable)"
});
formatter.result({
  "duration": 11726637647,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iClickToSaveButton()"
});
formatter.result({
  "duration": 871398208,
  "status": "passed"
});
formatter.match({
  "location": "RegisterAndLoginSteps.iVerifyThePassengerRegisterSuccessfully()"
});
formatter.result({
  "duration": 20361277577,
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
      "name": "@TC01_registerAndLogin"
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
