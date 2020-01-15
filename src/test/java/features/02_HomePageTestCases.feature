# new feature
# Tags: optional
@HomePageTestCases
Feature: Check car type on map

#  Scenario: 01 - Check default car type on Home screen
#    Given I login to Pax app with phone number "356822833"
#    When I verify the Pax login successfully
#    Then I should see the car image
#    And I should see the car name
#    And I should see the max of seat
#
#  Scenario: 02 - Check PU is the current location
#    Given I am in the Home page
#    Then The PU should be the current location
#
#  Scenario: 03 - Move map and Update PU location to current location
#    Given I am in the Home page
#    When I move map to change PU location
#    And I verify the PU was changed
#    And I press button to back to the current GPS
#    Then The PU should be the current location
#
#  Scenario: 04 - Check available car types when press "view all"
#    Given I am in the Home page
#    When I press view all button
#    Then I should see the car name
#    And I should see the car image
#    And I should see the max of seat
#
#  Scenario: 05 - Check car information
#    Given I am in the Home page
#    When I tap on car image
#    And I swipe to change car type
#    Then I should see the car name
#    And I should see the car image
#    And I should see the max of seat
#    And I should see the max of luggage
#    And I should see the minimum fare
#    And I should see the base fare
#    And I should see the fee per kilometre
#    And I should see the fee per minute
#    And I should see the note description
#
#  Scenario: 06 - Check car type is assigned on-demand only
#    Given I am in the Home page
#    Then I check the car type "SUV" is assigned on-demand only
#
#  Scenario: 07 - Check car type is assigned reservation only
#    Given I am in the Home page
#    When I tap on car image
#    And I swipe to change car type
#    And I click to select button
#    Then I check the car type "Sedan" is assigned reservation only
#
#  Scenario: 08 - Check car type is assigned both on-demand and reservation
#    Given I am in the Home page
#    When I select car type "Motor"
#    Then I check the car type "Motor" is assigned both on-demand and reservation
#
#  Scenario: 09 - Check pick up type
#    Given I am in the Home page
#    When I select car type "Motor"
#    And I click to Next button
#    And I verify the pickup type is Now
#    And I press back button
#    And I select pickup type is Now
#    And I verify the pickup type is Now
#    And I set the pickup time
#    Then I verify the pickup type is date time
#
#  Scenario: 10 - Check setting Destination is not required
#    Given I am in the Home page
#    When I select car type "Motor"
#    Then The Next button is displayed
#
#  Scenario: 11 - Check setting Destination is required
#    Given I am in the Home page
#    When I select car type "Sedan"
#    Then The Next button should not display

#  Scenario Outline: 12 - Setting formatted address - Specific address
#    Given I am in the Home page
#    When I tap on pick up location label
#    And I input the pickup location
#      | Pickup location   | Select address contains |
#      | <Pickup location> | <Select PU address>     |
#    Then The pickup location should be displayed as formatted address
#      | Address contains   |
#      | <Address contains> |
#    And I take the screenshot
#      | File name    |
#      | <Image name> |
#    Examples:
#      | Pickup location      | Select PU address | Address contains   | Image name      |
#      | 112/111 Trần Cao Vân | Thanh Khê         | 112 Trần Cao Vân   | /Formatted1.png |
#      | BigC                 | Hùng Vương        | 255-257 Hùng Vương | /Formatted2.png |

  Scenario Outline: 13 - Setting Google suggestion address
    Given I logout if currently logged in
    And I select "beta" server and input "tamqa" fleet code
    And I select the phone code by "Vietnam" country
    And I login to Pax app with phone number "356822833"
    And I verify the passenger login successfully
    When I tap on pick up location label
    And I input the pickup location
      | Pickup location   | Select address contains |
      | <Pickup location> | <Select PU address>     |
    Then The pickup location should be displayed as formatted address
      | Address contains   |
      | <Address contains> |
    And I take the screenshot
      | File name    |
      | <Image name> |
    Examples:
      | Pickup location      | Select PU address | Address contains     | Image name      |
      | 112/111 Trần Cao Vân | Thanh Khê         | 112/111 Trần Cao Vân | /GGSuggest1.png |
      | BigC                 | Hùng Vương        | Big C Đà Nẵng        | /GGSuggest2.png |




