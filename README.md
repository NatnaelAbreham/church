# Grace Covenant Church Website

[![Live Demo](https://img.shields.io/badge/demo-live-green)](https://natnaelabreham.github.io/church/)
[.NET Version](https://img.shields.io/badge/.NET-9.0-blue)
[React](https://img.shields.io/badge/React-19-blue)

A full-featured church website with admin dashboard, sermon management, prayer wall, volunteer system, and live streaming.

## Features

- **Public Website** - Responsive church homepage with service times, events, sermons
- **Admin Dashboard** - Manage content, approve prayer requests, add sermons
- **Prayer Wall** - Submit and view prayer requests (public + admin approval)
- **Volunteer Management** - Signup forms with role-based opportunities
- **Live Stream** - Embedded YouTube/Vimeo integration
- **Event Calendar** - Upcoming services and special events
- **Dark Mode** - User preference with system detection

##  Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | HTML5, Tailwind CSS, JavaScript |
| Admin Panel | React 19, React Router, Axios |
| Backend API | .NET 9 Web API |
| Database | SQL Server  |
| Auth | JWT with ASP.NET Core Identity |

##  Project Structure
hurchProject/
├── ChurchAPI/ # .NET Core backend
│ ├── Controllers/ # API endpoints
│ ├── Models/ # Entity models
│ ├── Data/ # DbContext
│ └── wwwroot/ # Static files + React build
├── ChurchAdmin/ # React admin panel (separate)
│ ├── src/
│ │ ├── pages/ # Dashboard, Sermons, Prayers
│ │ ├── api/ # API client
│ │ └── components/
│ └── build/ # Production build
└── README.md


## Quick Start

### Prerequisites
- Node.js 18+
- .NET 9 SDK
- SQL Server 

### Backend Setup
```bash
# Clone repository
git clone https://github.com/natnael.abreham/church.git
cd church/ChurchAPI

# Restore dependencies
dotnet restore

# Update database
dotnet ef database update

# Run API
dotnet run
# API runs at https://localhost:5000

cd ../ChurchAdmin
npm install
npm start
# Admin runs at http://localhost:5173/

# Build React admin
cd ChurchAdmin
npm run build

# Copy build to wwwroot
cp -r build/* ../ChurchAPI/wwwroot/admin/

# Publish .NET API
cd ../ChurchAPI
dotnet publish -c Release
