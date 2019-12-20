package com.qupworld.pegasuspax;

import commons.AbstractModule;
import commons.AbstractTest;
import moduleObjects.LoginPO;
import io.appium.java_client.MobileElement;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.touch.LongPressOptions;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class PAX_01_Register {
    AndroidDriver driver;
    private AbstractModule abstractModule;
    public String appPackage;
    String phoneNumber;

    @BeforeClass
    public void beforeClass(){
    appPackage = "mycar";
//    driver = configPax(driver);
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
        driver.findElementById("com.qupworld.pegasuspax:id/edtFleetCode").sendKeys("qa");
        driver.hideKeyboard();
        driver.findElementById("com.qupworld.pegasuspax:id/btnContinueFleet").click();
        abstractModule.sleepInSecond(1);
        driver.findElementById("com.qupworld.pegasuspax:id/editPhoneWC").click();
//        com.mycar.passenger:id/editPhoneWC
        WebElement fleetCodeDriver = driver.findElement(By.xpath("//android.view.ViewGroup[@index='1']/android.widget.TextView[@index='1']"));
        TouchAction action = new TouchAction(driver);
        action.longPress((LongPressOptions) fleetCodeDriver).perform();
        driver.findElementById("com.qupworld.pegasuspax:id/edtPassCode").sendKeys("7620");
        driver.hideKeyboard();
        driver.findElementById("android:id/button1").click();
        driver.findElement(By.xpath("//android.widget.TextView[@text='Beta']")).click();
        driver.findElementById("com.qupworld.pegasuspax:id/edtFleetId").clear();
        driver.findElementById("com.qupworld.pegasuspax:id/edtFleetId").sendKeys("tamqa");
        driver.hideKeyboard();
        abstractModule.sleepInSecond(1);
        driver.findElementById("com.qupworld.pegasuspax:id/btnApply").click();
    }

    @Test
    public void Step_02_Register(){

    }


}
