# MesajX

**Status**: Work-In-Progress (WIP)

MesajX is a mobile messenger application designed for iOS devices. It is built using React Native and Expo, currently focusing on the core user interface and navigation flow.

## Current State
The project is currently in the UI/Frontend Prototype phase. Basic navigation and layout for key screens are implemented, but the backend integration (API/Database) is not yet active.

## Completed Screens
- Authentication: Login and the first stage of Registration are designed with input validation placeholders
- Navigation: Initial RootLayout using expo-router is set up
- Settings: A profile management screen allowing for UI-based field edits
- Messaging: A functional Chat UI template with mock data and a basic message list

## Next Steps
- [ ] Authentication Logic: Integration of a backend to handle user sessions
- [ ] Registration Flow: Completion of registration_2.tsx and the password recovery flow (passwordForgotten_1/2)
- [ ] Real-time Messaging: Implement WebSockets or a real-time database to replace the mock DATA in chat.tsx
- [ ] Profile Picture: Enable actual image uploads for profile pictures
- [ ] Friend System: Implement the logic for friendRequests.tsx and friendslist.tsx

## Installation & Usage

**Prerequisites**
- Node.js installed
- Expo Go app on your mobile phone or an iOS simulator

**Installation**
1. Clone the repository
2. Install dependencies
```console
npm install
```
3. Start the development server
```console
npx expo start
```

## Project Structure
- app/: Contains the main screens and routing logic
- assets/: Includes the logo and fonts
- components/: Reusable UI elements like buttons and input fields
- utils/: Design variables (colors, fonts, sizes) and global style definitions
