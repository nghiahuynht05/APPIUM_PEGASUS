package login;

import commons.AbstractPage;
import commons.AbstractTest;
import io.appium.java_client.MobileElement;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.touch.LongPressOptions;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import pageObjects.LoginPO;
import pageUI.LoginPageUI;

import java.net.MalformedURLException;
import java.net.URL;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.concurrent.TimeUnit;

public class PAX_01_Register extends AbstractTest {
    AndroidDriver driver;
    String server, phoneNumber, fleetCode, passCode, defaultcode, countryName, firstName, lastName, gender;
    public AbstractPage abstractPage;
    public LoginPO loginPage;

    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
    LocalDateTime now = LocalDateTime.now();

    @BeforeClass
    public void beforeClass() {
        server = "beta";
        fleetCode = "tamqa";
        countryName = "Vietnam";
        passCode = "7620";
        phoneNumber = "3570345" + randomNumber2Digit();
        defaultcode = "1211";
        firstName = "Tam Nguyen";
        lastName = "Automation";
        gender = "Male";

        DesiredCapabilities cap = new DesiredCapabilities();
        cap.setCapability("deviceName", "21d5ac3d19037ece");
        cap.setCapability("platformName", "Android");
        cap.setCapability("platformVersion", "9");
        cap.setCapability("appPackage", "com.mycar.passenger");
        cap.setCapability("appActivity", "com.qup.pegasus.ui.launch.LauncherActivity");
        cap.setCapability("automationName", "UiAutomator2");
        cap.setCapability("autoGrantPermissions", "true");
        cap.setCapability("skipDeviceInitialization", "false");
        cap.setCapability("skipServerInstallation", "false");
        cap.setCapability("noReset", "false");
        try {
            driver = new AndroidDriver<MobileElement>(new URL("http://0.0.0.0:4723/wd/hub"), cap);
        } catch (
                MalformedURLException e) {
            e.printStackTrace();
        }
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

        abstractPage = new AbstractPage(driver);
        loginPage = new LoginPO(driver);
    }

    @Test
    public void Step_01_SelectServer() {
        abstractPage.sendAppPackage();

        loginPage.clickToPhoneNumberTextbox();

        System.out.println(dtf.format(now) + "Precondition: Change server -  Step 1: Long press to open debug page");
        loginPage.longPressToDebugArea();
        loginPage.inputToPassCodeTextbox(passCode);
        loginPage.clickToYesNoButton("YES");

        System.out.println(dtf.format(now) + "Precondition: Change server -  Step 2: Select server and input fleet code");
        abstractPage.sleepInSecond(1);
        loginPage.selectServer(server, fleetCode);
        System.out.println(dtf.format(now) + "Precondition: Change server -  Step 3: Verify the server has changed");
        assertTrue(loginPage.isLoginPagePresent());
    }

    @Test
    public void Step_02_Register(){
        System.out.print(dtf.format(now) + "Register - Step 1: Select country phone code");
        loginPage.selectPhoneCode(countryName);

        System.out.print(dtf.format(now) + "Register - Step 2: Input new phone number");
        loginPage.inputToPhoneNumberTextbox(phoneNumber);

        System.out.print(dtf.format(now) + "Register - Step 2: Agree ToU and register");
        loginPage.clickToAgreeToUAndPolicy();
        loginPage.clickToLoginButton();
        loginPage.clickToYesNoButton("Yes");

        System.out.print(dtf.format(now) + "Register - Step 3: Input sms code");
        loginPage.inputSMSDefaultCode(defaultcode);

        System.out.print(dtf.format(now) + "Register - Step 4: Verify register message");
        loginPage.isWelcomeMsgContains("Welcome to " + loginPage.appName + "Please complete your profile to starting using the service.");
        loginPage.clickToYesNoButton("OK");

        System.out.print(dtf.format(now) + "Register - Step 5: Fill info to register");
        loginPage.inputToRegisterTextboxes("First name", firstName);
        loginPage.inputToRegisterTextboxes("Last name", lastName);
        loginPage.selectGender(gender);
        loginPage.clickToSaveButton();

        System.out.print(dtf.format(now) + "Register - Step 6: Verify register successfully");
        loginPage.clickToSkipButton();
        loginPage.clickToYesNoButton("Yes");
        assertTrue(loginPage.isThereHomeButtonPresent());
    }

//    @Test
    public void Step_03_LoginWithNewAccount() {
        System.out.print(dtf.format(now) + "Login - Step 2: Select country phone code");
        loginPage.selectPhoneCode(countryName);
        System.out.print(dtf.format(now) + "Login - Step 3: Login to Pax app");
        loginPage.inputToPhoneNumberTextbox(phoneNumber);
        loginPage.clickToAgreeToUAndPolicy();
        loginPage.clickToLoginButton();
        loginPage.clickToYesNoButton("Yes");
        System.out.print(dtf.format(now) + "Login - Step 4: Input sms code if require");
        loginPage.inputSMSDefaultCode(defaultcode);

        System.out.print(dtf.format(now) + "Login - Step 5: Verify login successfully");
        assertTrue(loginPage.isThereHomeButtonPresent());
    }


}
