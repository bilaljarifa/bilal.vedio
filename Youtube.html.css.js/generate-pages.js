// Page generator script
const fs = require('fs');

function generateNavHTML(activePage) {
    const navItems = [
        { href: 'index.html', icon: 'home', text: 'Home', id: 'home' },
        { href: 'explore.html', icon: 'explore', text: 'Explore', id: 'explore' },
        { href: 'subscriptions.html', icon: 'subscriptions', text: 'Subscriptions', id: 'subscriptions' },
        { href: 'original.html', icon: 'ondemand_video', text: 'Original', id: 'original' },
        { href: 'youtube-music.html', icon: 'library_music', text: 'YouTube Music', id: 'youtube-music' },
        { href: 'library.html', icon: 'video_library', text: 'Library', id: 'library' },
        { href: 'history.html', icon: 'history', text: 'History', id: 'history' },
        { href: 'your-videos.html', icon: 'smart_display', text: 'Your Videos', id: 'your-videos' },
        { href: 'watch-later.html', icon: 'schedule', text: 'Watch Later', id: 'watch-later' },
        { href: 'liked-videos.html', icon: 'thumb_up', text: 'Liked Videos', id: 'liked-videos' },
        { href: 'movies-shows.html', icon: 'theaters', text: 'Movies & Shows', id: 'movies-shows' },
        { href: 'gaming.html', icon: 'sports_esports', text: 'Gaming', id: 'gaming' },
        { href: 'live.html', icon: 'live_tv', text: 'Live', id: 'live' },
        { href: 'learning.html', icon: 'school', text: 'Learning', id: 'learning' },
        { href: 'sports.html', icon: 'emoji_events', text: 'Sports', id: 'sports' },
        { href: 'settings.html', icon: 'settings', text: 'Settings', id: 'settings' },
        { href: 'report-history.html', icon: 'flag', text: 'Report history', id: 'report-history' },
        { href: 'help.html', icon: 'help_outline', text: 'Help', id: 'help' },
        { href: 'send-feedback.html', icon: 'feedback', text: 'Send feedback', id: 'send-feedback' }
    ];
    
    let html = '      <!-- MAIN SECTION -->\n';
    for (let i = 0; i < 5; i++) {
        const item = navItems[i];
        const isActive = activePage === item.id;
        html += `      <a href="${item.href}" class="nav_link${isActive ? ' active' : ''}">\n`;
        html += `        <i class="material-icons-outlined">${item.icon}</i>\n`;
        html += `        <span${isActive ? ' id="active_span"' : ''}>${item.text}</span>\n`;
        html += `      </a>\n\n`;
    }
    html += `      <hr>\n\n      <!-- LIBRARY SECTION -->\n`;
    for (let i = 5; i < 10; i++) {
        const item = navItems[i];
        const isActive = activePage === item.id;
        html += `      <a href="${item.href}" class="nav_link${isActive ? ' active' : ''}">\n`;
        html += `        <i class="material-icons-outlined">${item.icon}</i>\n`;
        html += `        <span${isActive ? ' id="active_span"' : ''}>${item.text}</span>\n`;
        html += `      </a>\n\n`;
    }
    html += `      <hr>\n`;
    for (let i = 10; i < 15; i++) {
        const item = navItems[i];
        const isActive = activePage === item.id;
        html += `      <a href="${item.href}" class="nav_link${isActive ? ' active' : ''}">\n`;
        html += `        <i class="material-icons-outlined">${item.icon}</i>\n`;
        html += `        <span${isActive ? ' id="active_span"' : ''}>${item.text}</span>\n`;
        html += `      </a>\n\n`;
    }
    html += `      <hr>\n\n      <!-- SETTINGS -->\n`;
    for (let i = 15; i < navItems.length; i++) {
        const item = navItems[i];
        const isActive = activePage === item.id;
        html += `      <a href="${item.href}" class="nav_link${isActive ? ' active' : ''}">\n`;
        html += `        <i class="material-icons-outlined">${item.icon}</i>\n`;
        html += `        <span${isActive ? ' id="active_span"' : ''}>${item.text}</span>\n`;
        html += `      </a>\n\n`;
    }
    return html;
}

function createPageHTML(pageTitle, pageId, description) {
    const navHTML = generateNavHTML(pageId);
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%93%9A%3C/text%3E%3C/svg%3E">
    <link rel="apple-touch-icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23FF0000'/%3E%3Ctext x='50' y='70' font-size='60' text-anchor='middle' fill='white'%3EY%3C/text%3E%3C/svg%3E">
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
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
    </script>
    <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>${pageTitle} - Bilal Video</title>
</head>
<body>
    <header>
        <div class="left_section">
            <i class="material-icons-outlined menu-icon">menu</i>
            <div class="logo-container">
                <span class="logo-icon">🎬</span>
                <span class="logo-text">Bilal Video</span>
            </div>
        </div>
         <div class="mid_section ">
            <form action="">
                <input type="text" placeholder="Search" />  
                <button>
                    <i class="material-icons-outlined "> search</i>
                </button>
            </form>
            <i class="material-icons-outlined mic" >mic</i>
         </div>

          <div class="right_section ">
            <a href=""> <i class="material-icons-outlined ">vedio_call </i></a>
            <a href=""> <i class="material-icons-outlined "> apps </i></a>
            <a href=""> <i class="material-icons-outlined ">notifications  </i></a>
            <a href=""> <i class="material-icons-outlined ">account_circle </i></a>
          </div>
    </header>

    <div class="mobile-overlay" id="mobileOverlay"></div>

    <div class="content_area">
        <aside>
            <nav>
${navHTML}            </nav>
        </aside>

        <main>
            <div class="page-header" style="margin-bottom: 24px; padding: 20px 0;">
                <h1 class="page-title" style="font-size: 2.4rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">${pageTitle}</h1>
                <p class="page-description" style="font-size: 1.6rem; color: var(--text-secondary);">${description}</p>
            </div>
            <div class="vedios_container">
                <div class="vedio">
                    <div class="thumbnail">
                        <img src="images/vedio.1.jpg" alt="">
                    </div>
                    <div class="vedio_details">
                        <div class="creator_img">
                            <img src="images/icon.png" alt="">
                        </div>
                        <div class="title">
                            <a href="" class="vedio_title">
                                bilal project youtube clone part 1 html css and js
                            </a>
                            <a href="" class="vedio_creatur">
                                bilal jarifa
                            </a>
                            <span>
                                10M views . 2 days ago 
                            </span>
                        </div>
                    </div>
                </div>
                <div class="vedio">
                    <div class="thumbnail">
                        <img src="images/vedio.1.jpg" alt="">
                    </div>
                    <div class="vedio_details">
                        <div class="creator_img">
                            <img src="images/icon.png" alt="">
                        </div>
                        <div class="title">
                            <a href="" class="vedio_title">
                                bilal project youtube clone part 1 html css and js
                            </a>
                            <a href="" class="vedio_creatur">
                                bilal jarifa
                            </a>
                            <span>
                                10M views . 2 days ago 
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <script src="script.js"></script>
</body>
</html>`;
}

const pages = [
    { file: 'explore.html', title: 'Explore', id: 'explore', desc: 'Discover trending videos and popular content' },
    { file: 'subscriptions.html', title: 'Subscriptions', id: 'subscriptions', desc: 'Videos from your subscribed channels' },
    { file: 'original.html', title: 'Original', id: 'original', desc: 'Original content and exclusive videos' },
    { file: 'youtube-music.html', title: 'YouTube Music', id: 'youtube-music', desc: 'Music videos and playlists' },
    { file: 'library.html', title: 'Library', id: 'library', desc: 'Your saved videos and playlists' },
    { file: 'history.html', title: 'History', id: 'history', desc: 'Your watch history' },
    { file: 'your-videos.html', title: 'Your Videos', id: 'your-videos', desc: 'Videos you have uploaded' },
    { file: 'watch-later.html', title: 'Watch Later', id: 'watch-later', desc: 'Videos saved for later viewing' },
    { file: 'liked-videos.html', title: 'Liked Videos', id: 'liked-videos', desc: 'Videos you have liked' },
    { file: 'movies-shows.html', title: 'Movies & Shows', id: 'movies-shows', desc: 'Movies and TV shows' },
    { file: 'gaming.html', title: 'Gaming', id: 'gaming', desc: 'Gaming videos and streams' },
    { file: 'live.html', title: 'Live', id: 'live', desc: 'Live streams and broadcasts' },
    { file: 'learning.html', title: 'Learning', id: 'learning', desc: 'Educational content and tutorials' },
    { file: 'sports.html', title: 'Sports', id: 'sports', desc: 'Sports highlights and coverage' },
    { file: 'settings.html', title: 'Settings', id: 'settings', desc: 'Account and app settings' },
    { file: 'report-history.html', title: 'Report History', id: 'report-history', desc: 'Your reporting history' },
    { file: 'help.html', title: 'Help', id: 'help', desc: 'Help center and support' },
    { file: 'send-feedback.html', title: 'Send Feedback', id: 'send-feedback', desc: 'Send us your feedback' }
];

pages.forEach(page => {
    const html = createPageHTML(page.title, page.id, page.desc);
    fs.writeFileSync(page.file, html);
    console.log(`Created: ${page.file}`);
});

console.log(`\n✅ Created ${pages.length} pages successfully!`);


