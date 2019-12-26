# new feature
# Tags: optional
@carType
Feature: Check car type on map

  Scenario: 01 - Check car type on map

    Given I open the "Mycar" Pax app for the first time
    When I click to phone number text box
    And I select "beta" server and input "tamqa" fleet code
    And I select the phone code by "Vietnam" country if different
    And I input phone number "0356822833"
    And I agree with Term of use and Privacy policy
    And I click to continue button
    And I input sms verify code if have
    And I verify the passenger login successfully
    Then I should see the car image
    And I should see the car name
    And I should see the max of seat

