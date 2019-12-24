package pageObjects;

import commons.AbstractPage;
import interfaces.HomePageUI;
import interfaces.LoginPageUI;
import io.appium.java_client.android.AndroidDriver;

public class HomePO extends AbstractPage {
    private AbstractPage abstractPage;
    private HomePageUI homePage;
    private LoginPageUI loginPage;

    public HomePO(AndroidDriver driver) {
        super(driver);
    }

    public void logout(){
        clickToElementById(homePage.HOME_BUTTON);
        clickToElementById(homePage.PERSONAL_BUTTON);
        checkBannerAndClose();
        clickToElementById(homePage.LOGOUT_BUTTON);
    }

    public boolean isLoginFormDisplayed(){
        return checkElementPresentById(loginPage.PHONE_NUMBER_TEXTBOX_1ST_SCREEN);
    }
}
