# new feature
# Tags: optional
@HomePageTestCases
Feature: Check car type on map

  Scenario: 01 - Check default car type on Home screen
    Given I login to Pax app with phone number "356822833"
    When I verify the Pax login successfully
    Then I should see the car image
    And I should see the car name
    And I should see the max of seat

  Scenario: 02 - Check PU is the current location
    Given I am in the Home page
    Then The PU should be the current location

  Scenario: 03 - Move map and Update PU location to current location
    Given I am in the Home page
    When I move map to change PU location
    And I verify the PU was changed
    And I press button to back to the current GPS
    Then The PU should be the current location

  Scenario: 04 - Check available car types when press "view all"
    Given I am in the Home page
    When I press view all button
    Then I should see the car name
    And I should see the car image
    And I should see the max of seat

  Scenario: 05 - Check car information
    Given I am in the Home page
    When I tap on car image
    And I swipe to change car type
    Then I should see the car name
    And I should see the car image
    And I should see the max of seat
    And I should see the max of luggage
    And I should see the minimum fare
    And I should see the base fare
    And I should see the fee per kilometre
    And I should see the fee per minute
    And I should see the note description




#Update flow:
#    - Call Hooks for each scenario
#    - noReset = true > Default: Back to home or re-login depends on each test case
#    - Call change server methods depends on testcase which used
#    - Link test case: https://docs.google.com/spreadsheets/d/10RMLcSEdgOikRBR7eVmNuK9ETbPx4c-k7DgTu06I1sg/edit#gid=1664833033
