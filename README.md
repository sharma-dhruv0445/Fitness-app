# Fitness App by Dhruv Sharma

A modern fitness tracking application built with React Native.

## Features
- Workout tracking
- Exercise library
- Progress monitoring
- Personal profile
- Beautiful and intuitive UI

## Developer Information
- Name: Dhruv Sharma
- Email: sharma.dhruv3090@gmail.com
- Location: Solan, India

## Setup Instructions

1. Install Node.js from https://nodejs.org/ (LTS version)
2. Install Android Studio from https://developer.android.com/studio
3. Clone this repository
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the Metro bundler:
   ```bash
   npm start
   ```
6. Run the app on Android:
   ```bash
   npm run android
   ```

## Publishing to Google Play Store

1. Create a Google Play Developer account ($25 one-time fee)
2. Generate a signed APK/Bundle:
   ```bash
   cd android
   ./gradlew assembleRelease
   ```
3. The APK will be generated at: `android/app/build/outputs/apk/release/app-release.apk`
4. Go to Google Play Console (https://play.google.com/console)
5. Create a new app
6. Fill in the store listing:
   - App name: Fitness App
   - Short description: Your personal fitness companion
   - Full description: A comprehensive fitness app designed to help you achieve your fitness goals. Track workouts, monitor progress, and stay motivated with personalized exercise plans.
   - Developer: Dhruv Sharma
   - Contact: sharma.dhruv3090@gmail.com
   - Location: Solan, India
7. Upload the APK/Bundle
8. Submit for review

## Technical Requirements
- Node.js >= 14
- React Native >= 0.72
- Android Studio
- JDK >= 11

## Dependencies
- @react-navigation/native
- @react-navigation/stack
- react-native-vector-icons
- react-native-safe-area-context
- react-native-screens
- react-native-gesture-handler
- react-native-reanimated

## License
MIT License 