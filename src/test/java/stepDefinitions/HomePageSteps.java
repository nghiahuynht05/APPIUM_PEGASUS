package stepDefinitions;

import commons.AbstractPage;
import commons.ModuleGeneratorManager;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
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

@RunWith(Cucumber.class)
public class HomePageSteps {
    AndroidDriver driver;
    AbstractPage abstractPage;
    LoginPO loginPage;
    HomePO homePage;
    String packageApp;

    public HomePageSteps(AndroidDriver driver){
        this.driver = driver;
    }

    @Given("^I open the \"([^\"]*)\" Pax app$")
    public void iOpenThePaxApp(String appName) {
        if (appName.equalsIgnoreCase("mycar")) {
            packageApp = "com.mycar.passenger";
        } else if (appName.equalsIgnoreCase("pegasus")) {
            packageApp = "com.qupworld.pegasuspax";
        }

        DesiredCapabilities cap = new DesiredCapabilities();
        cap.setCapability("deviceName", "21d5ac3d19037ece");
        cap.setCapability("platformName", "Android");
        cap.setCapability("platformVersion", "9");
        cap.setCapability("appPackage", packageApp);
        cap.setCapability("appActivity", "com.qup.pegasus.ui.launch.LauncherActivity");
        cap.setCapability("automationName", "UiAutomator2");
        cap.setCapability("autoGrantPermissions", "true");
        cap.setCapability("skipDeviceInitialization", "true");
        cap.setCapability("skipServerInstallation", "true");
        cap.setCapability("noReset", "true");
        try {
            driver = new AndroidDriver<MobileElement>(new URL("http://0.0.0.0:4723/wd/hub"), cap);
        } catch (
                MalformedURLException e) {
            e.printStackTrace();
        }
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

        abstractPage = new AbstractPage(driver);
        loginPage = new LoginPO(driver);
        homePage = new HomePO(driver);

        abstractPage.sendAppPackage();

        if(loginPage.isThereHomeButtonPresent()){
            homePage.logout();
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
}
