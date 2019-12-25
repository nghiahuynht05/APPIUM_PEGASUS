package stepDefinitions;

import commons.AbstractPage;
import commons.AbstractTest;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
import cucumberOptions.Hooks;
import io.appium.java_client.android.AndroidDriver;
import org.junit.runner.RunWith;
import pageObjects.LoginPO;

import static org.junit.Assert.assertTrue;


@RunWith(Cucumber.class)
public class RegisterAndLoginSteps {
    AndroidDriver driver;
    AbstractTest abstractTest;
    AbstractPage abstractPage;
    LoginPO loginPage;

    public RegisterAndLoginSteps() {
        driver = Hooks.openPaxApp("mycar");
    }

    @Given("^I open the Pax app$")
    public void i_open_the_pax_app() {
        abstractPage.sendAppPackage();
        Hooks.openPaxApp("mycar");
    }

    @When("^I select the phone code by \"([^\"]*)\" country$")
    public void i_select_the_phone_code_by_something_country(String countryName) {
        loginPage.selectPhoneCode(countryName);
    }

    @Then("^I verify the passenger register successfully$")
    public void i_verify_the_passenger_register_successfully() {
        loginPage.clickToSkipButton();
        loginPage.clickToYesNoButton("Yes");
        assertTrue(loginPage.isThereHomeButtonPresent());
    }

    @And("^I select \"([^\"]*)\" server and input \"([^\"]*)\" fleet code$")
    public void i_select_something_server_and_input_something_fleet_code(String server, String fleetCode) {
        loginPage.selectServer(server, fleetCode);
    }

    @And("^I input a new phone number \"([^\"]*)\"$")
    public void i_input_a_new_phone_number_something(String phoneNumber) {
        loginPage.inputToPhoneNumberTextbox(phoneNumber);
    }


    @And("^I agree with Term of use and Privacy policy$")
    public void i_agree_with_term_of_use_and_privacy_policy() {
        loginPage.clickToAgreeToUAndPolicy();
    }

    @And("^I click to continue button$")
    public void i_click_to_continue_button() {
        loginPage.clickToLoginButton();
    }

    @And("^I input sms code \"([^\"]*)\"$")
    public void i_input_sms_code_something(String defaultCode) {
        loginPage.inputSMSDefaultCode(defaultCode);
    }

    @And("^I verify register message contains \"([^\"]*)\"$")
    public void i_verify_register_message_contains_something(String textContains) {
        loginPage.isWelcomeMsgContains(textContains);
    }

    @And("^I input \"([^\"]*)\", \"([^\"]*)\" and select \"([^\"]*)\"$")
    public void i_input_something_something_and_select_something(String firstName, String lastName, String gender) {
        loginPage.inputToRegisterTextboxes("First name", firstName);
        loginPage.inputToRegisterTextboxes("Last name", lastName);
        loginPage.selectGender(gender);
    }

    @And("^I click to save button$")
    public void i_click_to_save_button() {
        loginPage.clickToSaveButton();
    }
}
