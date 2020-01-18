@MapTestCases
Feature: Check map settings
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

#    Note: Socket hang up due to can not execute some step > wait too long >  adb disconnect automatically.
#    Review steps flow and waiting between the steps
#    Was added get page method from PageGenerator for each method calling Page Object classes