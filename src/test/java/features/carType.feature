# new feature
# Tags: optional
@carType
Feature: Check car type on map

  Scenario: 01 - Check car type on map
    Given I open the Pax app
    When I login to Pax app with phone number "356822833"
    Then I should see the car image
    And I should see the car name
    And I should see the max of seat

#Update flow:
#    - Call Hooks for each scenario
#    - noReset = true > Default: Back to home or re-login depends on each test case
#    - Call change server methods depends on testcase which used
#    - Link test case: https://docs.google.com/spreadsheets/d/10RMLcSEdgOikRBR7eVmNuK9ETbPx4c-k7DgTu06I1sg/edit#gid=1664833033
