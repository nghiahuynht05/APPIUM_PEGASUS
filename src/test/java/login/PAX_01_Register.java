package login;

import commons.AbstractPage;
import commons.AbstractTest;
import io.appium.java_client.MobileElement;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.touch.LongPressOptions;
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
import java.util.concurrent.TimeUnit;

public class PAX_01_Register extends AbstractTest {
    AndroidDriver driver;
    String phoneNumber;
    public AbstractPage abstractPage;
    public LoginPO loginPage;

    @BeforeClass
    public void beforeClass(){
//    driver = configPax(driver);
        abstractPage = new AbstractPage(driver);
        loginPage = new LoginPO(driver);

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
    }

    @Test
    public void Step_01_HoldToOpenDebugScr() {
        abstractPage.appPackageId = abstractPage.sendAppPackage("mycar");
        loginPage.inputToFleetCodeDefault("qa");
        driver.hideKeyboard();
        loginPage.clickToPhoneNumberTextbox();
        abstractPage.sleepInSecond(1);
        loginPage.longPressToDebugArea();










        driver.findElementById("com.qupworld.pegasuspax:id/btnContinueFleet").click();
//        abstractPage.sleepInSecond(1);
//        driver.findElementById(abstractPage.appPackageId + loginPageUI.PHONE_NUMBER_TEXTBOX).click();
////        com.mycar.passenger:id/editPhoneWC
//        WebElement fleetCodeDriver = driver.findElement(By.xpath("//android.view.ViewGroup[@index='1']/android.widget.TextView[@index='1']"));
//        TouchAction action = new TouchAction(driver);
//        action.longPress((LongPressOptions) fleetCodeDriver).perform();
//        driver.findElementById("com.qupworld.pegasuspax:id/edtPassCode").sendKeys("7620");
//        driver.hideKeyboard();
//        driver.findElementById("android:id/button1").click();
//        driver.findElement(By.xpath("//android.widget.TextView[@text='Beta']")).click();
//        driver.findElementById("com.qupworld.pegasuspax:id/edtFleetId").clear();
//        driver.findElementById("com.qupworld.pegasuspax:id/edtFleetId").sendKeys("tamqa");
//        driver.hideKeyboard();
//        abstractPage.sleepInSecond(1);
//        driver.findElementById("com.qupworld.pegasuspax:id/btnApply").click();
    }

    public void Step_02_Register(){

    }


}
