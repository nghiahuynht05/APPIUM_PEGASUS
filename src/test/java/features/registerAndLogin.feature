Feature: Register new account and login
  As a new customer
  I want to register and login to the application normally

  @register
  Scenario: Register and Login to passenger application
    Given I open the Pax app
    And I select "" server and input "" fleet code
    When I select the phone code by "" country
    And I input a new phone number ""
    And I agree with Term of use and Privacy policy
    And I click to continue button
    And I input sms code ""
    And I verify register message contains ""
    And I input "<firstName>", "<lastName>" and select "<gender>"
      | firstName | lastName | gender |
      | Tam       | Nguyen   | Male   |
    And I click to save button
    Then I verify the passenger register successfully