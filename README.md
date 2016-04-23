
# Drungap
Drungap is a mobile app developed with HTML5, CSS3 and JavaScript, with the AngularJS framework.
It runs natively in any platform thanks to [Cordova](https://cordova.apache.org/)

This app querys a REST server [developed by snooze6](https://github.com/snooze6/rest_books) and with an easy ansible installation [provided by reloxo95](https://github.com/reloxo95/drupalAnsible), and displays the elements obtained.


##Instructions
###Requirements
You need to have installed **nodejs** (plus its package manager **npm**) and **cordova** to compile and run the app.

**To install nodeJS and npm:** [See the NodeJS documentation](https://nodejs.org/en/download/package-manager/)

**To install cordova:** `npm install -g cordova`

###Run the proyect
Navigate to the download path, open a terminal, and type: `cordova run *platform*`

Where platform can be any of the possibilities available in cordova.

**Android**

You need to have installed [Android SDK](http://developer.android.com/sdk/index.html) and [Java JDK](http://www.oracle.com/technetwork/es/java/javase/downloads/index.html)

Then, you need to configure your [developement enviroment](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html)

**iOS**

You need to run OSX in order to compile for iOS.

Then you need to install [XCode](https://itunes.apple.com/es/app/xcode/id497799835?mt=12) 

Then, you need to configure your [developement enviroment](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html)

##Advice
If you want to try the app without need to compile you can run the HTML version that is located under /www. For this to work you'll need to run Chrome with and extension [for disabling CORS restriction](https://chrome.google.com/webstore/detail/cors-toggle/omcncfnpmcabckcddookmnajignpffnh)

