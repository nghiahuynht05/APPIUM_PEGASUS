package pageObjects;

import commons.AbstractPage;
import interfaces.HomePageUI;
import interfaces.LoginPageUI;
import io.appium.java_client.android.AndroidDriver;

public class HomePO extends AbstractPage {
    private AbstractPage abstractPage;

    public HomePO(AndroidDriver driver) {
        super(driver);
    }

    public void logout() {
        clickToElementById(HomePageUI.HOME_BUTTON);
        clickToElementById(HomePageUI.PERSONAL_BUTTON);
        checkBannerAndClose();
        clickToElementById(HomePageUI.LOGOUT_BUTTON);
    }

    public boolean isLoginFormDisplayed() {
        return checkElementPresentById(LoginPageUI.PHONE_NUMBER_TEXTBOX_1ST_SCREEN);
    }

    public boolean isCarImgDisplayed() {
        return isElementDisplayedById(HomePageUI.CAR_IMAGE);
    }

    public boolean isCarNameDisplayed(){
        return isElementDisplayedById(HomePageUI.CAR_NAME);
    }

    public boolean isCarMaxOfSeatDisplayed(){
        return isElementDisplayedById(HomePageUI.MAX_OF_SEAT);
    }
}
