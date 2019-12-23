package commons;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.touch.LongPressOptions;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pageObjects.LoginPO;

import java.sql.Time;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class AbstractPage {
    AndroidDriver driver;
    Actions actions;
    WebDriverWait waitExplicit;
    WebElement element;
    List<WebElement> elements;
    By by;
    public long longTimeout = 30;
    public long shortTimeout = 5;
    public static String appPackageId, appName;
    public String appPackage = "mycar";

    public AbstractPage(AndroidDriver driver) {
        this.driver = driver;
    }

    public void sleepInSecond(long numberInSecond) {
        try {
            Thread.sleep(numberInSecond * 1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void sendAppPackage() {
        if (appPackage.equals("pegasus")) {
            appPackageId = "com.qupworld.pegasuspax:id/";
            appName = "Pegasus";
        } else if (appPackage.equals("mycar")) {
            appPackageId = "com.mycar.passenger:id/";
            appName = "MyCar";
        }

    }

    public void sendKeyToElementById(String locator, String textValue) {
        locator = String.format(locator, appPackageId);
        element = driver.findElement(By.id(locator));
        element.clear();
        element.sendKeys(textValue);
    }

    public void sendKeyToElementByXpath(String xpathLocator, String textValue, String attributeValue){
        xpathLocator = String.format(xpathLocator, attributeValue);
        element = driver.findElement(By.xpath(xpathLocator));
        element.clear();
        element.sendKeys(textValue);
    }

    public void clickToElementById(String locator) {
        locator = String.format(locator, appPackageId);
        element = driver.findElement(By.id(locator));
        waitElementToBeClickableByLocator(driver, element).click();
    }

    public void clickToElementByXpath(String xpathLocator){
        element = driver.findElement(By.xpath(xpathLocator));
        waitElementToBeClickableByLocator(driver, element).click();
    }

    public void clickToElementByXpath(String xpathLocator, String attributeValue){
        xpathLocator = String.format(xpathLocator, attributeValue);
        element = driver.findElement(By.xpath(xpathLocator));
        waitElementToBeClickableByLocator(driver, element).click();
    }

    public void longPressToElementByXpath(String locator) {
        locator = String.format(locator, appPackageId);
        element = driver.findElement(By.id(locator));
        actions = new Actions(driver);
        actions.clickAndHold(element);
        actions.perform();
    }



    // Internal methods
    public static WebElement waitElementToBeClickableByLocator(
            WebDriver driver, WebElement element) {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        return wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    public boolean checkElementPresentById(String locator){
        driver.manage().timeouts().implicitlyWait(shortTimeout, TimeUnit.SECONDS);
        locator = String.format(locator, appPackageId);
        elements = driver.findElements(By.id(locator));
        driver.manage().timeouts().implicitlyWait(longTimeout, TimeUnit.SECONDS);
        if (elements.size() > 0){
            return true;
        }else{
            return false;
        }
    }

    public boolean checkElementPresentByXpath(String xpathLocator, String attributeValue){
        driver.manage().timeouts().implicitlyWait(shortTimeout, TimeUnit.SECONDS);
        xpathLocator = String.format(xpathLocator, attributeValue);
        elements = driver.findElements(By.xpath(xpathLocator));
        driver.manage().timeouts().implicitlyWait(longTimeout, TimeUnit.SECONDS);
        if (elements.size() > 0){
            return true;
        }else{
            return false;
        }
    }

    public boolean isMessageContainsById(String locator, String expectedText){
        locator = String.format(locator, appPackageId);
        element = driver.findElement(By.id(locator));
        String actualMsg = element.getText();
        return actualMsg.contains(expectedText);
    }



}

