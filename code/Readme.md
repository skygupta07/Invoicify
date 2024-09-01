## Tasks Accomplished

- [x] **Task 1:** Developed the core functionality for invoice creation, including customizable fields and dynamic calculations.
- [x] **Task 2:** Integrated Expo to simplify the development and testing process across multiple devices.
- [x] **Task 3:** Implemented Appwrite for backend services, providing secure authentication and data management.
- [x] **Task 4:** Styled the app using NativeWind for efficient and responsive UI design.

## Technology Stack

This project leverages the following technologies:

- **[React Native](https://reactnative.dev):** Used for building native apps using JavaScript and React, enabling a cross-platform mobile application.
- **[Expo](https://expo.dev):** Chosen to streamline the development and testing process for React Native apps, providing a managed workflow and easy device deployment.
- **[Appwrite](https://appwrite.io):**  A self-hosted backend server that provides secure authentication, database management, and file storage. Crucial for managing user data and authentication in Invocify.
- **[NativeWind](https://www.nativewind.dev):** Used for utility-first styling, bringing Tailwind CSS principles to React Native for creating a responsive and customizable user interface.

## Key Features

- **Dynamic Invoice Management:**  Easily create, update, and manage invoices with secure data storage.
- **Responsive Design:** Adaptive UI for various screen sizes and orientations.
- **Real-Time Sync:** Instant synchronization of invoice data across devices.
- **Print and Share Invoices:**  Directly print invoices or share them via email or messaging apps.

## Local Setup Instructions (Windows Setup)

Follow these steps to run the project locally

1. **Clone the Repository**
   ```bash
   git clone GITHUB_LINK_TO_THE_REPO
   cd REPO_DIRECTORY
   ```

2. **Install Node.js and npm (if not already installed)**
   ```bash
   node -v
   npm -v
   ```

3. **Install Expo CLI**
   ```bash
   npm install -g expo-cli
   ```


4. **Install Project Dependencies**
   ```bash
   npm install
   ```


5. **Set Up Appwrite**
   - Follow the Appwrite installation guide to set up your Appwrite server.
   - Update the appwrite.json configuration file in the project with your Appwrite project details.


6. **Run the Project**
   ```bash
   expo start
   ```


7. **Run on Emulator or Physical Device**
   - Choose the appropriate option from the Expo DevTools for iOS emulator.
   - Alternatively, scan the QR code using the Expo Go app to run it on a physical device.

   
## Local Setup Instructions (MacOS Setup)

1. **Clone the Repository**
   ```bash
   git clone GITHUB_LINK_TO_THE_REPO
   cd REPO_DIRECTORY
   ```


2. **Install Node.js and npm (if not already installed)**
   ```bash
   brew install node
   ```

   ```bash
   node -v
   npm -v
   ```

3. **Install Expo CLI**
   ```bash
   npm install -g expo-cli
   ```


4. **Install Project Dependencies**
   ```bash
   npm install
   ```

5. **Set Up Appwrite**
   - Follow the Appwrite installation guide to set up your Appwrite server.
   - Update the appwrite.json configuration file in the project with your Appwrite project details.


6. **Run the Project**
   ```bash
   expo start
   ```

7. **Run on Emulator or Physical Device**

   - Choose the appropriate option from the Expo DevTools for iOS emulator.
   - Alternatively, scan the QR code using the Expo Go app to run it on a physical device.