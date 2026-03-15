# Cinema & Film Industry Portal

A web application for managing and displaying information about movies, actors, and film industry reviews using HTML, CSS, JavaScript, and MySQL.

## Project Structure

```
CinemaFilmPortal/
├── index.html              # Home page
├── movies.html             # Movies listing page
├── movie-details.html      # Individual movie details page
├── actors.html             # Actors listing page
├── reviews.html            # Reviews page with submission form
├── admin.html              # Admin panel for managing movies
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── script.js           # JavaScript for interactivity
├── images/                 # (Empty - images now loaded from internet URLs)
└── database/
    └── cinema_db.sql       # MySQL database schema and sample data
```

## Features

- **Home Page**: Portal title, navigation, and featured movies
- **Movies Page**: Grid layout displaying movie cards with posters, titles, genres, and years
- **Movie Details Page**: Detailed information including poster, director, cast, description, and ratings
- **Actors Page**: Actor profiles with images and famous movies
- **Reviews Page**: Display existing reviews and submit new ones with validation
- **Admin Page**: Add, edit, and delete movies

## Setup Instructions

1. **Clone or Download** the project files to your local machine.

2. **Database Setup**:
   - Install MySQL on your system if not already installed.
   - Create a new database named `cinema_db`.
   - Run the SQL script in `database/cinema_db.sql` to create tables and insert sample data.

3. **Images**:
   - Images are now loaded from placeholder services (via.placeholder.com) with actor names displayed.
   - These are guaranteed to work and display properly.
   - You can replace these URLs with actual actor images from the internet if desired.

4. **Run the Application**:
   - Open `index.html` in a web browser.
   - Navigate through the different pages using the navigation bar.

## Technologies Used

- **HTML**: Structure and content
- **CSS**: Styling and responsive design
- **JavaScript**: Interactivity, form validation, and data management
- **MySQL**: Database for storing movie, actor, and review data

## Notes

- This is a static web application without a backend server.
- Data persistence is simulated using localStorage for demonstration purposes.
- In a production environment, you would need a backend (e.g., Node.js with Express) to connect to the MySQL database.
- The MySQL database schema is provided for reference and can be used when implementing a full-stack version.

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for desktop and mobile devices