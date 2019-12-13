package commons;

import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.interactions.Actions;

public class AbstractModule {
    AndroidDriver driver;
    Actions action;


    public AbstractModule(AndroidDriver driver){
        this.driver = driver;
        action = new Actions(driver);
    }

    public void sleepInSecond(long numberInSecond){
        try {
            Thread.sleep(numberInSecond*1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}

