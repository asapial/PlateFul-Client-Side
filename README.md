# 🍽️ PlateFul

Live Site URL: [https://plateful-21a3d.web.app/](https://plateful-21a3d.web.app/)

PlateFul is a user-friendly Recipe Book App where food lovers can manage their own recipes, discover recipes from others, add favorites to a wishlist, and like recipes. The app features a dynamic top recipes section based on likes, providing a simple and engaging platform for food enthusiasts.

---

## 🚀 Features

- 📖 **Recipe Management** – Add, update, and delete your own recipes with images, ingredients, instructions, cuisine type, and categories.
- 🌟 **Top Recipes** – See the most popular recipes based on likes, updated in real time.
- ❤️ **Like & Wishlist** – Like recipes (except your own) and add them to your wishlist for easy access.
- 👤 **Authentication** – Secure login, registration, and Google social login using Firebase.
- 🔒 **Private Routes** – Add Recipe and My Recipes pages are protected and only accessible to logged-in users.
- 🎨 **Modern UI/UX** – Responsive design for mobile, tablet, and desktop. Includes Lottie animations, React Awesome Reveal, and dark/light theme toggle.
- 🔔 **Live Notifications** – User feedback with `react-toastify`, `sweetalert2`, and tooltips (no default alerts).
- 🔎 **Filter & Search** – Filter recipes by cuisine type and search for your favorites.
- 🛡️ **Environment Variables** – Firebase and MongoDB credentials are hidden using environment variables.
- 🖼️ **Custom 404 Page** – Food-themed not found page with unique design.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Tailwind CSS, Vite, AOS, Lottie React, Swiper
- **Routing**: `react-router`
- **State & Effects**: React Hooks
- **Icons & Animations**: `react-icons`, `react-awesome-reveal`, `lottie-react`
- **Notifications**: `react-toastify`, `sweetalert2`, `react-tooltip`
- **Authentication**: Firebase
- **Backend**: Express.js, MongoDB (Node server hosted separately)

---

## 📦 Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/asapial/PlateFul-Client-Side.git
   cd PlateFul-Client-Side
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env.local` and fill in your Firebase and backend API credentials.

4. **Start the development server:**
   ```sh
   npm run dev
   ```

---



## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

---

## 📄 License

All content, including recipes, images, and branding, is the intellectual property of PlateFul unless otherwise stated. Unauthorized use or duplication without explicit permission is strictly prohibited.

