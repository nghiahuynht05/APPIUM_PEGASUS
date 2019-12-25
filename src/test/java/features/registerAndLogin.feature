@registerAndLogin
Feature: Register new account and login
  As a new customer
  I want to register and login to the application normally

  Scenario: 01 - Register and Login to passenger application
    Given I open the "Mycar" Pax app for the first time
    And I click to phone number text box
    And I select "beta" server and input "tamqa" fleet code
    When I select the phone code by "Vietnam" country
    And I input phone number "357666439"
    And I agree with Term of use and Privacy policy
    And I click to continue button
    And I input sms verify code if have
    And I verify register message contains "MyCar"
    And I input user information to register
      | firstName | lastName | gender |
      | Tam       | Nguyen   | Male   |
    And I click to save button
    Then I verify the passenger register successfully
    And I logout of the account

  Scenario: 02 - Login with the account just registered
    Given I open the "Mycar" Pax app
    And I click to phone number text box
    And I select "beta" server and input "tamqa" fleet code
    When I select the phone code by "Vietnam" country
    And I input phone number "357666439"
    And I agree with Term of use and Privacy policy
    And I click to continue button
    And I input sms verify code if have
    Then I verify the passenger login successfully

