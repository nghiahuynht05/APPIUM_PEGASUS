package moduleObjects;

import commons.AbstractModule;
import io.appium.java_client.android.AndroidDriver;

public class LoginPO extends AbstractModule {
    public PAX_01_Register registerTestcase;

    public LoginPO (AndroidDriver driver){
        super(driver);
        registerTestcase = new PAX_01_Register();
    }

}
