# 🎬 Bilal Video - Modern Video Platform

A beautiful, responsive video platform inspired by modern design trends. Built with HTML, CSS, and JavaScript, featuring a sleek interface, smooth animations, and full mobile responsiveness.

![Bilal Video](https://img.shields.io/badge/Bilal_Video-Modern%20Video%20Platform-6366f1?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## ✨ Features

- 🎨 **Modern UI Design** - Beautiful gradient themes and smooth animations
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- 🎯 **Interactive Sidebar** - Collapsible navigation menu with smooth transitions
- 🔍 **Smart Search Bar** - Enhanced search with focus states and animations
- 🎬 **Video Grid** - Responsive video cards with hover effects
- 🎭 **Smooth Animations** - Fluid transitions and interactive elements
- 🌈 **Custom Color Scheme** - Purple/indigo gradient theme
- 💫 **Touch-Friendly** - Optimized for mobile touch interactions
- 🎨 **Tailwind CSS** - Utility-first CSS framework integrated

## 🚀 Live Demo

Simply open `index.html` in your browser to see the site in action!

## 📁 Project Structure

```
Youtube.html.css.js/
├── index.html          # Main HTML file
├── style.css           # All styling and responsive design
├── script.js           # Interactive JavaScript functionality
├── images/             # Image assets
│   ├── icon.png
│   ├── vedio.1.jpg
│   └── youtube-logo.png
└── README.md           # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary Color**: Indigo (#6366f1)
- **Secondary Color**: Purple (#8b5cf6)
- **Accent Color**: Pink (#ec4899)
- **Background**: Soft gradients with light grays

### Components
- **Header**: Sticky navigation with gradient background
- **Sidebar**: Collapsible menu (240px → 72px)
- **Video Cards**: Rounded corners with hover lift effect
- **Search Bar**: Rounded design with focus animations

## 📱 Responsive Breakpoints

- **Mobile**: ≤ 480px - Single column layout
- **Mobile/Tablet**: 481px - 768px - Optimized mobile menu
- **Tablet**: 769px - 1024px - Two column layout
- **Desktop**: ≥ 1025px - Multi-column layout with sidebar

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables, gradients, and animations
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **JavaScript (ES6+)** - Interactive functionality
- **Google Material Icons** - Icon library
- **Roboto Font** - Clean typography

## 🎯 Key Features Explained

### Collapsible Sidebar
- Click the menu icon to collapse/expand
- Desktop: Sidebar collapses to icon-only view
- Mobile: Sidebar slides in from the left with overlay

### Video Cards
- Hover effects with smooth transforms
- Responsive grid that adapts to screen size
- Touch-optimized for mobile devices

### Search Functionality
- Enhanced search bar with focus states
- Keyboard support (Enter key to search)
- Visual feedback on interaction

## 🚀 Getting Started

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Enjoy exploring the modern video platform!

## 📝 Customization

### CSS Variables
The design uses CSS variables for easy customization. Edit the `:root` variables in `style.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... more variables */
}
```

### Tailwind CSS
This project uses Tailwind CSS via CDN. You can use Tailwind utility classes alongside the custom CSS. 

**Custom Tailwind config is included in the HTML:**
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#6366f1',
                secondary: '#8b5cf6',
                accent: '#ec4899',
            }
        }
    }
}
```

**For production, consider:**
- Installing Tailwind via npm for better performance
- Using Tailwind CLI for purging unused CSS
- Setting up PostCSS with Tailwind for advanced configuration

## 📄 License

This project is open source and available for personal and educational use.

## 👤 Author

**Bilal Jarifa**
- Created with ❤️ for showcasing modern web design

## 📄 Pages

This project includes individual pages for each menu item:
- **Home** (index.html) - Main landing page
- **Explore** - Discover trending content
- **Subscriptions** - Subscribed channels
- **Original** - Original content
- **YouTube Music** - Music videos
- **Library** - Saved videos
- **History** - Watch history
- **Your Videos** - Uploaded videos
- **Watch Later** - Saved for later
- **Liked Videos** - Liked content
- **Movies & Shows** - Entertainment
- **Gaming** - Gaming content
- **Live** - Live streams
- **Learning** - Educational content
- **Sports** - Sports highlights
- **Settings** - Account settings
- **Report History** - Reporting history
- **Help** - Support center
- **Send Feedback** - Feedback form

All pages share the same structure and navigation, with the active menu item highlighted.

## 🤝 Contributing

Feel free to fork this project and make it your own! Contributions, issues, and feature requests are welcome.

## 📸 Screenshots

The website features:
- Beautiful gradient backgrounds
- Smooth animations
- Modern card-based design
- Fully responsive layout

---

⭐ If you like this project, feel free to star it on GitHub!

