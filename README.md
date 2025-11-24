🎵 Spotify Clone (Frontend Only)

A fully responsive frontend clone of the Spotify web player built with React and Tailwind CSS. This project demonstrates a pixel-perfect user interface and functional audio playback using local assets, simulating the Spotify experience without a backend.

✨ Features

Sleek UI: A highly accurate replication of the Spotify web interface using Tailwind CSS.

Local Audio Playback: Plays music files stored locally within the project assets.

Responsive Design: Fully adaptable layout for desktop and mobile views.

Player Controls: Functional Play, Pause, Next, and Previous buttons.

Static Data: Uses hardcoded data structures to simulate playlists, albums, and artist profiles.

Volume Control: visual volume slider interaction.

🛠️ Tech Stack

Frontend Library: React.js

Styling: Tailwind CSS

Icons: React Icons / Heroicons

Audio Handling: HTML5 Audio API / useSound hook (or similar)

Asset Management: Local static images and .mp3 files

📂 Project Structure

Spotifyclone/
├── public/
│   ├── assets/          # Images and icons
│   └── music/           # Local .mp3 files
├── src/
│   ├── components/      # UI Components
│   │   ├── Sidebar/     # Left navigation
│   │   ├── Player/      # Bottom player bar and controls
│   │   ├── Main/        # Center content area
│   │   └── SongCard/    # Reusable song display component
│   ├── data/            # Hardcoded arrays for songs/playlists
│   │   └── songs.js     # Static song data (title, artist, file path)
│   ├── App.jsx          # Main component
│   ├── index.css        # Tailwind directives
│   └── main.jsx         # Entry point
├── package.json
├── tailwind.config.js   # Tailwind configuration
└── README.md


🚀 Getting Started

Since this is a client-side only application, getting it running is simple.

Prerequisites

Node.js installed on your machine.

Installation

Clone the repository:

git clone [https://github.com/Wright-Moseti200/Spotifyclone.git](https://github.com/Wright-Moseti200/Spotifyclone.git)
cd Spotifyclone


Install dependencies:

npm install


Run the application:

npm run dev
# OR if using Create React App
npm start


The app should open automatically at http://localhost:5173 (Vite) or http://localhost:3000 (CRA).

🎧 Adding Music

To add your own songs to the local player:

Place your .mp3 files in the public/music/ folder.

Open src/data/songs.js (or wherever your static data is stored).

Add a new object to the array:

{
  id: 4,
  title: "New Song Title",
  artist: "Artist Name",
  img: "/assets/album-cover.jpg",
  src: "/music/your-new-song.mp3"
}


📸 Screenshots

(Add screenshots of your application here)

Desktop View

Mobile View





🤝 Contributing

Contributions are welcome!

Fork the Project.

Create your Feature Branch.

Commit your Changes.

Push to the Branch.

Open a Pull Request.

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

Developed by Wright-Moseti200
