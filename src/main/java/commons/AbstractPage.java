package commons;

import io.appium.java_client.MobileDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.touch.LongPressOptions;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.interactions.touch.TouchActions;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class AbstractPage {

    AndroidDriver driver;
    TouchAction touchAction;
    WebDriverWait waitExplicit;
    WebElement element;
    By by;
    long longTimeout = 30;
    long shortTimeout = 5;
    public String appPackageId, packageID;

    public AbstractPage(AndroidDriver driver){
        this.driver = driver;
    }

    public void sleepInSecond(long numberInSecond){
        try {
            Thread.sleep(numberInSecond*1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public String sendAppPackage(String appPackage){
        if(appPackage.equals("pegasus")){
            packageID =  "com.qupworld.pegasuspax:";
        }else if(appPackage.equals("mycar")){
            packageID =  "com.mycar.passenger:";
        }
        return packageID;
    }

    public void waitToElementByIdVisible(String locator){
        element = driver.findElementById(locator);
        waitExplicit.until(ExpectedConditions.visibilityOf(element));
    }
    public void sendKeyToElementById(String locator, String textValue){
        element = driver.findElementById(locator);
        element.clear();
        element.sendKeys(textValue);
    }

    public void clickToElementById(String locator){
        element = driver.findElementById(locator);
        element.click();
    }

    public void longPressToElementById(String locator){
        element = driver.findElementById(locator);
        touchAction = new TouchAction(driver);
        touchAction.longPress((LongPressOptions) element).perform();
    }



}

