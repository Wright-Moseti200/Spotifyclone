# 🎵 Spotify Clone (Frontend Only)

<div align="center">

**A fully responsive frontend clone of the Spotify web player with local audio playback**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-4+-646cff.svg)](https://vitejs.dev/)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Customization](#-customization) • [Contributing](#-contributing)

</div>

---

## 🌟 About

Spotify Clone is a pixel-perfect recreation of the Spotify web player interface, built entirely with React and Tailwind CSS. This frontend-only project demonstrates modern UI/UX design principles and functional audio playback using local assets, providing an authentic music streaming experience without backend dependencies.

## ✨ Features

<table>
<tr>
<td>

### 🎨 Sleek UI
- Pixel-perfect Spotify interface
- Dark theme aesthetics
- Smooth transitions and animations
- Professional layout and spacing

</td>
<td>

### 🎧 Audio Playback
- Play local music files
- HTML5 Audio API integration
- Smooth audio transitions
- Multiple format support

</td>
</tr>
<tr>
<td>

### 📱 Responsive Design
- Mobile-first approach
- Desktop optimization
- Tablet compatibility
- Adaptive layouts

</td>
<td>

### 🎛️ Player Controls
- Play/Pause functionality
- Next/Previous track
- Progress bar tracking
- Time display (current/duration)

</td>
</tr>
<tr>
<td>

### 📊 Static Content
- Hardcoded playlists
- Album collections
- Artist profiles
- Song metadata

</td>
<td>

### 🔊 Volume Control
- Interactive volume slider
- Visual feedback
- Mute/Unmute toggle
- Smooth volume transitions

</td>
</tr>
</table>

## 🛠️ Tech Stack

<div align="center">

| Technology | Purpose |
|------------|---------|
| **React.js** | Frontend library |
| **Tailwind CSS** | Utility-first styling |
| **Vite** | Build tool and dev server |
| **React Icons** | Icon components |
| **Heroicons** | Additional icon library |
| **HTML5 Audio API** | Audio playback handling |
| **useSound Hook** | Sound effect management |

</div>

## 📂 Project Structure

```
Spotifyclone/
│
├── public/
│   ├── assets/            # Images and icons
│   │   ├── album-covers/  # Album artwork
│   │   ├── artist-images/ # Artist photos
│   │   └── icons/         # Custom icons
│   └── music/             # Local .mp3 audio files
│       ├── song1.mp3
│       ├── song2.mp3
│       └── ...
│
├── src/
│   ├── components/        # React components
│   │   ├── Sidebar/       # Left navigation panel
│   │   │   ├── Sidebar.jsx
│   │   │   └── Sidebar.css
│   │   ├── Player/        # Bottom player bar
│   │   │   ├── Player.jsx
│   │   │   └── PlayerControls.jsx
│   │   ├── Main/          # Center content area
│   │   │   ├── Main.jsx
│   │   │   ├── Playlist.jsx
│   │   │   └── Album.jsx
│   │   └── SongCard/      # Reusable song card
│   │       └── SongCard.jsx
│   │
│   ├── data/              # Static data
│   │   ├── songs.js       # Song metadata
│   │   ├── playlists.js   # Playlist data
│   │   └── albums.js      # Album collections
│   │
│   ├── context/           # React Context (optional)
│   │   └── PlayerContext.jsx
│   │
│   ├── hooks/             # Custom hooks
│   │   └── useAudioPlayer.js
│   │
│   ├── App.jsx            # Main application component
│   ├── index.css          # Tailwind directives & global styles
│   └── main.jsx           # Entry point
│
├── .gitignore             # Git ignore file
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── README.md              # Documentation
```

## 🚀 Getting Started

Since this is a client-side only application, setup is straightforward with no backend configuration required.

### Prerequisites

Before you begin, ensure you have:
- [Node.js](https://nodejs.org/) (v14 or higher) installed
- [Git](https://git-scm.com/) installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Wright-Moseti200/Spotifyclone.git
   cd Spotifyclone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # OR if using Create React App
   npm start
   ```

4. **Access the application**
   
   The app will automatically open at:
   - **Vite**: `http://localhost:5173`
   - **Create React App**: `http://localhost:3000`

### Build for Production

To create an optimized production build:
```bash
npm run build
```

The build output will be in the `dist/` (Vite) or `build/` (CRA) directory.

## 🎧 Customization

### Adding Your Own Music

To add custom songs to the player:

1. **Add audio files**
   
   Place your `.mp3` files in the `public/music/` folder:
   ```
   public/music/
   ├── my-song.mp3
   ├── another-track.mp3
   └── favorite-tune.mp3
   ```

2. **Update song data**
   
   Open `src/data/songs.js` and add your song metadata:
   ```javascript
   export const songs = [
     {
       id: 1,
       title: "My Awesome Song",
       artist: "Artist Name",
       album: "Album Title",
       duration: "3:45",
       img: "/assets/album-covers/my-cover.jpg",
       src: "/music/my-song.mp3"
     },
     // Add more songs here
   ];
   ```

3. **Add album artwork**
   
   Place cover images in `public/assets/album-covers/`

### Creating Playlists

Edit `src/data/playlists.js`:
```javascript
export const playlists = [
  {
    id: 1,
    name: "Chill Vibes",
    description: "Relaxing tunes for any occasion",
    cover: "/assets/playlist-covers/chill.jpg",
    songs: [1, 3, 5, 7] // Song IDs
  }
];
```

### Customizing Colors

Modify `tailwind.config.js` to change the color scheme:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'spotify-green': '#1DB954',
        'spotify-black': '#191414',
        'spotify-gray': '#282828',
        // Add your custom colors
      }
    }
  }
}
```

## 🎨 Component Overview

### Sidebar Component
- Navigation menu
- Playlist list
- Library access
- Create playlist button

### Player Component
- Playback controls (play, pause, next, previous)
- Progress bar with seek functionality
- Volume control
- Current track information
- Shuffle and repeat toggles

### Main Content Area
- Featured playlists
- Recently played
- Recommended songs
- Album grids

### Song Card Component
- Album artwork
- Song title and artist
- Play button overlay
- Duration display

## 🔧 Configuration

### Tailwind Configuration

The `tailwind.config.js` includes custom configurations:
```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'spotify': ['Circular', 'Helvetica', 'Arial', 'sans-serif']
      }
    }
  }
}
```

### Vite Configuration

Optimized build settings in `vite.config.js`:
```javascript
export default {
  plugins: [react()],
  server: {
    port: 5173
  }
}
```

## 🗺️ Roadmap

- [ ] Playlist creation and management
- [ ] Search functionality
- [ ] Lyrics display
- [ ] Queue management
- [ ] Keyboard shortcuts
- [ ] Dark/Light theme toggle
- [ ] Local storage for user preferences
- [ ] Equalizer visualization
- [ ] Social sharing features

## 🐛 Known Limitations

- **No Backend**: All data is static and stored locally
- **No User Accounts**: No authentication or personalization
- **Local Audio Only**: Cannot stream from external sources
- **No API Integration**: Not connected to Spotify's actual API
- **Limited Playlist Management**: Cannot save custom playlists persistently

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow React best practices and hooks patterns
- Use Tailwind utility classes consistently
- Maintain component reusability
- Add comments for complex logic
- Test responsive design on multiple devices
- Keep file structure organized

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Disclaimer:** This project is for educational purposes only. Spotify and the Spotify logo are trademarks of Spotify AB. This clone is not affiliated with, endorsed by, or connected to Spotify.

## 👨‍💻 Author

**Wright Moseti**

- GitHub: [@Wright-Moseti200](https://github.com/Wright-Moseti200)
- Project Link: [Spotify Clone](https://github.com/Wright-Moseti200/Spotifyclone)

## 🙏 Acknowledgments

- [Spotify](https://www.spotify.com/) for design inspiration
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Heroicons](https://heroicons.com/)
- [Vite](https://vitejs.dev/)

## 💡 Learning Resources

If you're building similar projects:
- [React Official Tutorial](https://react.dev/learn)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [HTML5 Audio API](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement)
- [Web Audio API Guide](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

## 🎓 What I Learned

Building this project helped me understand:
- Complex React component architecture
- State management for audio playback
- Tailwind CSS utility-first approach
- Responsive design principles
- HTML5 Audio API implementation

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by Wright Moseti

</div>
