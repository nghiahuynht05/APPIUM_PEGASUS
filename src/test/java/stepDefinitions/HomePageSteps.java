package stepDefinitions;

import commons.AbstractPage;
import commons.AbstractTest;
import commons.ModuleGeneratorManager;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
import cucumberOptions.Hooks;
import interfaces.HomePageUI;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import org.junit.runner.RunWith;
import org.openqa.selenium.remote.DesiredCapabilities;
import pageObjects.HomePO;
import pageObjects.LoginPO;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import static org.testng.Assert.assertTrue;
import static org.testng.Assert.assertFalse;

@RunWith(Cucumber.class)
public class HomePageSteps {
    AndroidDriver driver;
    AbstractPage abstractPage;
    LoginPO loginPage;
    HomePO homePage;
    String packageApp, defaultCode;

    public HomePageSteps() {
        driver = Hooks.openPaxApp("mycar");
        defaultCode = "2304";

        abstractPage = new AbstractPage(driver);
        loginPage = new LoginPO(driver);
        homePage = new HomePO(driver);

        abstractPage.sendAppPackage();
    }

    @Given("^I open the Pax app$")
    public void iOpenThePaxApp() {
        DesiredCapabilities cap = new DesiredCapabilities();
        cap.setCapability("deviceName", "HT69H0201382");
        cap.setCapability("platformName", "Android");
        cap.setCapability("platformVersion", "10");
        cap.setCapability("appPackage", packageApp);
        cap.setCapability("appActivity", "com.qup.pegasus.ui.launch.LauncherActivity");
        cap.setCapability("automationName", "UiAutomator2");
        cap.setCapability("autoGrantPermissions", "true");
        cap.setCapability("skipDeviceInitialization", "true");
        cap.setCapability("skipServerInstallation", "true");
        cap.setCapability("noReset", "true");
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

        loginPage = ModuleGeneratorManager.getLoginPage(driver);
        if(loginPage.isThereHomeButtonPresent()){
            homePage.logout();
        }
    }

    @When("^I verify the Pax login successfully$")
    public void iVerifyThePaxLoginSuccessfully() {
        assertTrue(loginPage.isThereHomeButtonPresent());
    }

    @Given("^I login to Pax app with phone number \"([^\"]*)\"$")
    public void iLoginToPaxAppWithPhoneNumber(String phoneNumber)  {
        if(loginPage.isThereHomeButtonPresent()==true){
            abstractPage.sleepInSecond(1);
            homePage.logout();
        }
        loginPage.clickToPhoneNumberTextbox();
        loginPage.inputToPhoneNumberTextbox(phoneNumber);
        loginPage.clickToAgreeToUAndPolicy();
        loginPage.clickToLoginButton();
        loginPage.clickToYesNoButton("Yes");
        loginPage.inputSMSDefaultCode(defaultCode);
    }

    @When("^I am in the Home page$")
    public void iAmInTheHomePage() {
        if(loginPage.isThereHomeButtonPresent()){
            assertTrue(loginPage.isThereHomeButtonPresent());
        }
    }

    @Then("^I should see the car image$")
    public void iShouldSeeTheCarImage() {
        homePage = ModuleGeneratorManager.getHomePage(driver);
        assertTrue(homePage.isCarImgDisplayed());
    }

    @And("^I should see the car name$")
    public void iShouldSeeTheCarName() {
        assertTrue(homePage.isCarNameDisplayed());
    }

    @And("^I should see the max of seat$")
    public void iShouldSeeTheMaxOfSeat() {
        assertTrue(homePage.isCarMaxOfSeatDisplayed());
    }

    @Then("^The PU should be the current location$")
    public void thePUShouldBeTheCurrentLocation() {
        assertTrue(homePage.isPUEqualsCurrentLocation());
    }

    @When("^I move map to change PU location$")
    public void iMoveMapToChangePULocation() {
        homePage.moveMap();
    }

    @And("^I verify the PU was changed$")
    public void iVerifyThePUWasChanged() {
        assertTrue(homePage.isThePUWasChanged());
    }

    @And("^I press button to back to the current GPS$")
    public void iPressButtonToBackToTheCurrentGPS() {
        homePage.clickToCurrentGPSButton();
    }

    @When("^I press view all button$")
    public void iPressViewAllButton() {
        homePage.clickToViewAllButton();
    }

    @When("^I tap on car image$")
    public void iTapOnCarImage() {
        homePage.clickToCarImage();
    }

    @And("^I should see the max of luggage$")
    public void iShouldSeeTheMaxOfLuggage() {
        assertTrue(homePage.isMaxLuggageDisplayed());
    }

    @And("^I should see the minimum fare$")
    public void iShouldSeeTheMinimumFare() {
        assertTrue(homePage.isMinimumFareDisplayed());
    }

    @And("^I should see the base fare$")
    public void iShouldSeeTheBaseFare(){
        assertTrue(homePage.isBaseFareDisplayed());
    }

    @And("^I should see the fee per kilometre$")
    public void iShouldSeeTheFeePerKilometre(){
        assertTrue(homePage.isFeePerKMDisplayed());
    }

    @And("^I should see the fee per minute$")
    public void iShouldSeeTheFeePerMinute(){
        assertTrue(homePage.isFeePerMinuteDisplayed());
    }

    @And("^I swipe to change car type$")
    public void iSwipeToChangeCarType() {
        abstractPage.sleepInSecond(1);
        assertTrue(homePage.swipeCarType());
    }

    @And("^I should see the note description$")
    public void iShouldSeeTheNoteDescription() {
        assertTrue(homePage.isNoteDescriptionDisplayed());
    }

    @And("^I click to select button$")
    public void iClickToSelectButton() {
        homePage.clickToSelectButton();
    }

    @Then("^I check the car type \"([^\"]*)\" is assigned on-demand only$")
    public void iCheckTheCarTypeIsAssignedOnDemandOnly(String carType) {
        assertTrue(homePage.isCurrentCarTypeEquals(carType));
        assertTrue(homePage.isCarTypeOnDemandOnly());
    }

    @Then("^I check the car type \"([^\"]*)\" is assigned reservation only$")
    public void iCheckTheCarTypeIsAssignedReservationOnly(String carName){
        assertTrue(homePage.isCurrentCarTypeEquals(carName));
        assertTrue(homePage.isCarTypeReservationOnly());
    }

}
