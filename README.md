# assignment-6-barangezenoglu1
assignment-6-barangezenoglu1 created by GitHub Classroom

## What is this project ?
It's a basic gallery app with react native. Used firebase for storing and controlling auth events. Also creates a new document in user collection when an user registered.

## What can be done with this app ? 

-Register

-Login

-Logout

-Upload Image from library or taken with camera.

-Use google map

-Edit current user profile, and profile photo.

-Change theme


## Getting Started
First, download packages and dependencies with :

### `npm install`

After that start the Metro :

### `npx react-native start`

Last, start your application:

### `npx react-native run-android`

## Packages

- @react-native-async-storage/async-storage
- @react-navigation/bottom-tabs
- @react-navigation/native
- @react-navigation/native-stack
- @reduxjs/toolkit
- react-native-vector-icons
- react-redux
- react-native-firebase/auth
- react-native-firebase/storage
- react-native-firebase/firestore
- react-native-image-picker
- react-native-maps
## Folder Structure
    ├── android                 # Android bundle
    ├── ios                     # IOS bundle
    ├── node_modules            # Node module Files
    ├── src                     # Source files 
    │   ├── assets              # Project asset files
    │   ├── components          # Components
    │   └── data                # Json server
    │   ├── features            # Redux slices
    │   └── hooks               # Custom hooks
    │   └── screens             # Screens files
    │   └── screenshots         # Screenshots
    │   └── store               # Redux reducers
    
    
## Screens 

- Login Screens

<p align="middle">
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-6-barangezenoglu1/blob/main/src/screenshots/Login.png?raw=true" alt="Login" width="200" height="400" style="padding-right:10px" />
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-6-barangezenoglu1/blob/main/src/screenshots/Register.png?raw=true" alt="Register" width="200" height="400" style="padding-right:10px" />
</p>

If you registered or logged you will redirect to home page when app open until you logout. Register and login is managing by Firebase auth. When you registered, new document will create in users collection.

- Home Screen

<p align="middle">
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-6-barangezenoglu1/blob/main/src/screenshots/Home.png?raw=true" alt="Playlist" width="200" height="400" style="padding-right:10px" />
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-6-barangezenoglu1/blob/main/src/screenshots/HomeDark.png?raw=true" alt="Playlist Dark" width="200" height="400" style="padding-right:10px" />
</p>

You can choose upload type. The image can upload from library or you can take a new photo with camera.

- Map Screen

<p align="middle">
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-6-barangezenoglu1/blob/main/src/screenshots/Map.png?raw=true" alt="EmptySearch" width="200" height="400" style="padding-right:10px" />
</p>

You can use bottom navigation for open map screen. In this screen you can see map and image marker. The marker's image changes according to your current profile photo.

- Profile

<p align="middle">
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-6-barangezenoglu1/blob/main/src/screenshots/Profile.png?raw=true" alt="Profile" width="200" height="400" style="padding-right:10px" />
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-6-barangezenoglu1/blob/main/src/screenshots/ProfileDark.png?raw=true" alt="ProfileDark" width="200" height="400" style="padding-right:10px" />
</p>

In profile screen you can change theme with switch, edit user info and logout and update profile photo. If you edit user, the global user data , async storage data and firebase will update. After the logout you will redirect to login page.

- Image Preview

<p align="middle">
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-6-barangezenoglu1/blob/main/src/screenshots/ImagePrev.png?raw=true" alt="Profile" width="200" height="400" style="padding-right:10px" />
</p>

This is the default select screen of library.
