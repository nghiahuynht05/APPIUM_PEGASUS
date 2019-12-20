package pageObjects;

import commons.AbstractPage;
import io.appium.java_client.android.AndroidDriver;
import pageUI.LoginPageUI;

public class LoginPO extends AbstractPage {
    private AbstractPage abstractPage;
    private LoginPageUI loginPageUI;

    public LoginPO (AndroidDriver driver){
        super(driver);
    }

    public void inputToFleetCodeDefault(String fleetCode){
        waitToElementByIdVisible(appPackageId + loginPageUI.FLEET_CODE_TEXTBOX);
        System.out.println(appPackageId);
        sendKeyToElementById(appPackageId + loginPageUI.FLEET_CODE_TEXTBOX, fleetCode);
    }

    public void clickToPhoneNumberTextbox(){
        waitToElementByIdVisible(appPackageId + loginPageUI.PHONE_NUMBER_TEXTBOX);
        clickToElementById(appPackageId + loginPageUI.PHONE_NUMBER_TEXTBOX);
    }

    public void longPressToDebugArea(){
        longPressToElementById(appPackageId + loginPageUI.DEBUG_AREA);
    }
}
