package pageObjects;

import commons.AbstractPage;
import interfaces.HomePageUI;
import interfaces.LoginPageUI;
import io.appium.java_client.android.AndroidDriver;
import org.seleniumhq.jetty9.util.HostMap;

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

    public boolean isCarNameDisplayed() {
        return isElementDisplayedById(HomePageUI.CAR_NAME);
    }

    public boolean isCarMaxOfSeatDisplayed() {
        return isElementDisplayedById(HomePageUI.MAX_OF_SEAT);
    }

    public boolean isPUEqualsCurrentLocation() {
        String currentGPS = getTextElementById(HomePageUI.CURRENT_LOCATION_LABEL);
        if (currentGPS.contains("271 Nguyễn Văn Linh")) {
            return true;
        } else if (currentGPS.contains("Tầng 7, tòa nhà Bưu điện")) {
            return true;
        } else if (currentGPS.contains("155C Nguyễn Văn Linh")) {
            return true;
        } else if (currentGPS.contains("322 Hải Phòng")) {
            return true;
        } else if(currentGPS.contains("Tầng 4 tòa nhà Bưu điện")){
            return true;
        }
        else {
            return false;
        }
    }

    public void moveMap() {
        actionMove(498, 631, 187, 455);
    }

    public boolean isThePUWasChanged() {
        return checkElementPresentById(HomePageUI.BACK_TO_CURRENT_GPS_BUTTON);
    }

    public void clickToCurrentGPSButton() {
        clickToElementById(HomePageUI.BACK_TO_CURRENT_GPS_BUTTON);
    }

    public void clickToViewAllButton() {
        clickToElementById(HomePageUI.VIEW_ALL_BUTTON);
    }

    public void clickToCarImage() {
        clickToElementById(HomePageUI.CAR_IMAGE);
    }

    public boolean swipeCarType() {
        String currentCarName = getTextElementById(HomePageUI.CAR_NAME);
        actionMove(920, 1594, 45, 1594);
        String swipedCarName = getTextElementById(HomePageUI.CAR_NAME);
        if(currentCarName.equals(swipedCarName)){
            return false;
        }else{
            return true;
        }
    }

    public boolean isMaxLuggageDisplayed() {
        return checkElementPresentById(HomePageUI.MAX_OF_LUGGAGE);
    }

    public boolean isMinimumFareDisplayed(){
        return checkElementPresentById(HomePageUI.MINIMUM_FARE_LABEL);
    }

    public boolean isBaseFareDisplayed(){
        return checkElementPresentById(HomePageUI.BASE_FARE_LABEL);
    }

    public boolean isFeePerKMDisplayed(){
        return checkElementPresentById(HomePageUI.FARE_PER_KM_LABEL);
    }

    public boolean isFeePerMinuteDisplayed(){
        return checkElementPresentById(HomePageUI.FARE_PER_MINUTE_LABEL);
    }

    public boolean isNoteDescriptionDisplayed(){
        return checkElementPresentById(HomePageUI.NOTE_DESCRIPTION);
    }

}
