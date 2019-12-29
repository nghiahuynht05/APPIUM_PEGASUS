$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("02_HomePageTestCases.feature");
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
      "name": "@TC02_carType"
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
  "duration": 33617516650,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iVerifyThePaxLoginSuccessfully()"
});
formatter.result({
  "duration": 125445957,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iShouldSeeTheCarImage()"
});
formatter.result({
  "duration": 114947446,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iShouldSeeTheCarName()"
});
formatter.result({
  "duration": 108095415,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iShouldSeeTheMaxOfSeat()"
});
formatter.result({
  "duration": 124213905,
  "status": "passed"
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
  "duration": 13059123301,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.thePUShouldBeTheCurrentLocation()"
});
formatter.result({
  "duration": 128714733,
  "status": "passed"
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
  "duration": 12865625875,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMoveMapToChangePULocation()"
});
formatter.result({
  "duration": 2565918677,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iVerifyThePUWasChanged()"
});
formatter.result({
  "duration": 296251623,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_press_button_to_back_to_the_current_gps()"
});
formatter.result({
  "duration": 323800566,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.thePUShouldBeTheCurrentLocation()"
});
formatter.result({
  "duration": 1306038245,
  "status": "passed"
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
  "duration": 13144918207,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_press_view_all_button()"
});
formatter.result({
  "duration": 367132583,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iShouldSeeTheCarName()"
});
formatter.result({
  "duration": 1624260707,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iShouldSeeTheCarImage()"
});
formatter.result({
  "duration": 132665017,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iShouldSeeTheMaxOfSeat()"
});
formatter.result({
  "duration": 154379265,
  "status": "passed"
});
});