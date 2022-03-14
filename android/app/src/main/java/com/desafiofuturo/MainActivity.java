package com.desafiofuturo;

import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.JSIModulePackage;
import com.swmansion.reanimated.ReanimatedJSIModulePackage;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "desafioFuturo";
  }

  protected JSIModulePackage getJSIModulePackage() {
    return new ReanimatedJSIModulePackage(); // <- add
  }
}
