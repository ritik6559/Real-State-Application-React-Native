# 🏡 Real Estate App

A modern real estate mobile application built with **React Native** and **Expo**, leveraging **file-based routing** for navigation and **Appwrite** for authentication and database management.

## ✨ Features

- 🔒 **User Authentication** (Sign up, Login, Logout) using Appwrite
- 🏠 **Browse Real Estate Listings** with images, details, and price
- 🔍 **Search & Filter Properties** based on location, price, and type
- 💄 **List Properties** for users to upload and manage their own listings
- 🛠 **File-based Routing** for seamless navigation

## 🛠 Tech Stack

- **React Native** (Expo for development & deployment)
- **Appwrite** (Authentication & Database)
- **React Navigation** (For file-based routing)
- **Styling** (Tailwind CSS / Nativewind)

## 👤 Screenshots

![Home Screen](screenshots/screenshot1.png)



## 📂 Project Structure

```
real_estate
 ├── .git
 ├── app
 │   ├── (root)
 │   │   ├── (tabs)
 │   │   ├── properties
 │   │   ├── _layout.tsx
 │   ├── _layout.tsx
 │   ├── global.css
 │   ├── sign-in.tsx
 ├── assets
 ├── components
 ├── constants
 ├── lib
 ├── repos
 ├── screenshots
 ├── .gitignore
 ├── app.json
 ├── babel.config.js
 ├── image.d.ts
 ├── metro.config.js
 ├── nativewind-env.d.ts
 ├── package-lock.json
 ├── package.json
 ├── README.md
 ├── tailwind.config.js
 └── tsconfig.json
```

## 🏰 Installation & Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/ritik6559/Real-State-Application-React-Native.git
   cd Real-State-Application-React-Native
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up Appwrite:**

   - Create a project on [Appwrite](https://appwrite.io/)
   - Enable authentication (OAuth(Google), Email & Password if needed)
   - Set up a database for property listings
   - Configure storage for property images
   - Add your Appwrite credentials to a `.env` file:
     ```env
     EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
     EXPO_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
     EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
     EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_collection_id
     ```

4. **Start the development server:**

   ```sh
   npx expo start
   ```

## 🏠 Code Example

Here is a simple example of how properties are fetched from Appwrite:

```tsx
export async function getProperties({
  filter,
  query,
  limit,
}: {
  filter: string;
  query: string;
  limit?: number;
}) {
  try {
    const buildQuery = [Query.orderDesc("$createdAt")];

    if (filter && filter !== "All")
      buildQuery.push(Query.equal("type", filter));

    if (query)
      buildQuery.push(
        Query.or([
          Query.search("name", query),
          Query.search("address", query),
          Query.search("type", query),
        ])
      );

    if (limit) buildQuery.push(Query.limit(limit));

    const result = await databases.listDocuments(
      config.databaseId!,
      config.propertiesCollectionId!,
      buildQuery
    );

    return result.documents;
  } catch (error) {
    console.error(error);
    return [];
  }
}
```

## 🛡 Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.


### 🌟 Show Some Love

If you like this project, give it a ⭐ on [GitHub](https://github.com/ritik6559/Real-State-Application-React-Native)!

