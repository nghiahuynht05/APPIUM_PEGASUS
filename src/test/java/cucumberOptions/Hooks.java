package cucumberOptions;

import commons.AbstractPage;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import org.junit.Before;
import org.openqa.selenium.remote.DesiredCapabilities;
import pageObjects.HomePO;
import pageObjects.LoginPO;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class Hooks {
    private static AndroidDriver driver;
    private static String packageApp;


    @Before
    public static AndroidDriver openPaxApp(String appName){
        if(appName.equals("mycar")){
            packageApp = "com.mycar.passenger";
        }else if (appName.equals("pegasus")){
            packageApp = "com.qupworld.pegasuspax";
        }
        DesiredCapabilities cap = new DesiredCapabilities();
        try {
            driver = new AndroidDriver<MobileElement>(new URL("http://0.0.0.0:4723/wd/hub"), cap);
        } catch (
                MalformedURLException e) {
            e.printStackTrace();
        }
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        return driver;
    }
}
