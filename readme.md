## react-native-navigation实例
在研究完react-navigation后偶然得知react-native-navigation，号称是原生体验的tab，但是搜索良久也找不到合适的demo，只能一点点的去看官方文档，但是对于一个前端开发出身的，哪些android的配置看的我还是有点晕，现在就在这里做个标记。
*****
## 项目依赖
``` javascript
"dependencies": {
		"react": "16.0.0-alpha.12",
		"react-native": "0.47.2",
		"react-native-navigation": "^1.1.205"
	},
	"devDependencies": {
		"babel-jest": "20.0.3",
		"babel-preset-react-native": "3.0.1",
		"jest": "20.0.4",
		"react-test-renderer": "16.0.0-alpha.12"
	}
```
## 操作图例
<img src="./screenShorts/show.gif"/>

## 技术栈
### 1、react-native
### 2、android
### 3、react-native-navigation
*****
## 功能实现
### 1、原生tab实现
### 2、沉浸式状态栏实现
### 3、原生页面跳转实现
### 4、按两次退出程序
### 5、splashScreen
********
## app下载体验
[下载地址](../../android/app/build/outputs/apk/app-release.apk)

## 实现教程
### 1、安装react-native-navigation
``` bash
yarn add react-native-navigation@latest
```
### 2、修改android/setting.gradle
添加如下代码：
``` java
include ':react-native-navigation'
 project(':react-native-navigation').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-navigation/android/app/')
```
### 3、修改android/app/build.gradle
``` java
// 修改成如下
compileSdkVersion 25
buildToolsVersion "25.0.1"


dependencies {
    compile fileTree(dir: "libs", include: ["*.jar"])
    compile "com.android.support:appcompat-v7:23.0.1"
    compile "com.facebook.react:react-native:+"  
    compile project(':react-native-navigation') // 添加这一行
}
```
### 4、修改android/app/src/main/java/com/XXX/MainActivity.java
除了第一行包的定义不改，其他的都可以改成如下这样
``` java
package com.demo; // 这个包名用自己的
import android.widget.LinearLayout;
import android.graphics.Color;
import android.widget.TextView;
import android.view.Gravity;
import android.util.TypedValue;

import com.reactnativenavigation.controllers.SplashActivity;

public class MainActivity extends SplashActivity {

    @Override
    public LinearLayout createSplashLayout() {
        LinearLayout view = new LinearLayout(this);
        TextView textView = new TextView(this);

        view.setBackgroundColor(Color.parseColor("#607D8B"));
        view.setGravity(Gravity.CENTER);

        textView.setTextColor(Color.parseColor("#FFFFFF"));
        textView.setText("React Native Navigation");
        textView.setGravity(Gravity.CENTER);
        textView.setTextSize(TypedValue.COMPLEX_UNIT_DIP, 40);

        view.addView(textView);
        return view;
    }
}
```
### 5、修改android/app/src/main/java/com/XXX/MainApplication.java
``` java
package com.demo;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import com.reactnativenavigation.NavigationApplication;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

  // private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
  //   @Override
  //   public boolean getUseDeveloperSupport() {
  //     return BuildConfig.DEBUG;
  //   }

  //   @Override
  //   protected List<ReactPackage> getPackages() {
  //     return Arrays.<ReactPackage>asList(
  //         new MainReactPackage()
  //     );
  //   }
  // };
  @Override
  public boolean isDebug() {
    // Make sure you are using BuildConfig from your own application
    return BuildConfig.DEBUG;
  }
  protected List<ReactPackage> getPackages() {
    // Add additional packages you require here
    // No need to add RnnPackage and MainReactPackage
    return Arrays.<ReactPackage>asList(
      // eg. new VectorIconsPackage()
    );
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }
}

```
到这里android的配置就算完成，但是这时候run-android并不能看到任何东西，摇晃手机也不能弹出配置窗口，接下来就是照着官网更改入口文件，如果不想看api可以直接 clone该项目！