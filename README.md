PREFACE APPLICATION
-------------------

#### Table of contents

<!-- toc -->

- [Installation](# installation)
- [Upgrade](# upgrade)
- [Project Info](# project-info)
<!-- toc stop -->


# installation

1. Install React Native as described at https://reactnative.dev/docs/environment-setup

2. Clone this repository

3. Run `yarn install`, all required components will be installed automatically

    IOS

        i. Run pod install from preface/ios folder
        ii. Start XCode and open generated Preface.xcworkspace

    ANDROID

        No additinal steps required

4. It is recommended to run react-native start command from root project directory.

5. Run your project from XCode (Cmd+R) for iOS, or use react-native run-android to run your project on Android.


# upgrade

There's currently two ways for upgrading React Native project with:

1. React Native CLI

    Run the `upgrade` command

        i. Run the following command to start the process of upgrading to the latest version: `npx react-native upgrade`
        ii. You may specify a React Native version by passing an argument: `npx react-native upgrade 0.65.0-rc.0`

    Resolve the conflicts

        Conflicted files include delimiters which make very clear where the changes come from. For example:

        13B07F951A680F5B00A75B9A /* Release */ = {
            isa = XCBuildConfiguration;
            buildSettings = {
                ASSETCATALOG_COMPILER_APPICON_NAME = AppIcon;
<<<<<<< ours
                CODE_SIGN_IDENTITY = "iPhone Developer";
                FRAMEWORK_SEARCH_PATHS = (
                "$(inherited)",
                "$(PROJECT_DIR)/HockeySDK.embeddedframework",
                "$(PROJECT_DIR)/HockeySDK-iOS/HockeySDK.embeddedframework",
                );
=======
    CURRENT_PROJECT_VERSION = 1;
>>>>>>> theirs
                HEADER_SEARCH_PATHS = (
                "$(inherited)",
                /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include,
                "$(SRCROOT)/../node_modules/react-native/React/**",
                "$(SRCROOT)/../node_modules/react-native-code-push/ios/CodePush/**",
                );

2. Upgrade Helper
The Upgrade Helper is a web tool to help you out when upgrading your apps by providing the full set of changes happening between any two versions. It also shows comments on specific files to help understanding why that change is needed.(https://react-native-community.github.io/upgrade-helper/)
    1. Select the versions
    2. Upgrade dependencies
    3. Upgrade your project files


# project-info
Main objective of this project was to have a single code base for both platform android and ios.

    Project Structure

        /android                    - React native android source code
    
        /ios                        - React native ios source code        
    
        /src
            /assets                 - contains image and fonts
            /boot                   - deep linking
            /components             - react native components
            /config                 - config variables
            /constants              - all constants
            /environments           - contains flavours(e.g., Staging, Development, Production)
            /helpers                - some helpers functions
            /i18                    - some localization files
            /models                 - contains some models
            /navigators             - contains routes and tab navigators

            /redux                  
                /actions            - all redux actions
                /reducers           - all reducers
                /sagas              - all redux sagas  
                /service            - API methods
                /store              - store config
               
            /screens                - connected to store components
            /theme                  - constants for theming
