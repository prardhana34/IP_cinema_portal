// Cinema & Film Industry Portal - JavaScript

// Sample data (in a real app, this would come from MySQL via backend)
let movies = [
    { id: 1, title: 'RRR', genre: 'Action', release_year: 2022, director: 'S.S. Rajamouli', description: 'A tale of two revolutionaries and their journey away from home before they started fighting for their country.', rating: 7.8, poster: 'https://m.media-amazon.com/images/M/MV5BNWMwODYyMjQtMTczMi00NTQ1LWFkYjItMGJhMWRkY2E3NDAyXkEyXkFqcGc@._V1_.jpg', platforms: ['Netflix'] },
    { id: 2, title: 'Baahubali: The Beginning', genre: 'Action', release_year: 2015, director: 'S.S. Rajamouli', description: 'In ancient India, an adventurous man becomes involved in a decades-old feud between two warring peoples.', rating: 8.0, poster: 'https://m.media-amazon.com/images/M/MV5BM2YxZThhZmEtYzM0Yi00OWYxLWI4NGYtM2Y2ZDNmOGE0ZWQzXkEyXkFqcGc@._V1_.jpg', platforms: ['Amazon Prime Video'] },
    { id: 3, title: 'KGF Chapter 2', genre: 'Action', release_year: 2022, director: 'Prashanth Neel', description: 'Rocky, a young man, seeks power and wealth in order to fulfill a promise to his dying mother.', rating: 8.3, poster: 'https://m.media-amazon.com/images/M/MV5BZmQzZjVkZTUtYjI4ZC00ZDJmLWI0ZDUtZTFmMGM1Mzc5ZjIyXkEyXkFqcGc@._V1_.jpg', platforms: ['Amazon Prime Video'] },
    { id: 4, title: '3 Idiots', genre: 'Comedy', release_year: 2009, director: 'Rajkumar Hirani', description: 'Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend.', rating: 8.4, poster: 'https://m.media-amazon.com/images/M/MV5BNzc4ZWQ3NmYtODE0Ny00YTQ4LTlkZWItNTBkMGQ0MmUwMmJlXkEyXkFqcGc@._V1_.jpg', platforms: ['Amazon Prime Video', 'Netflix'] },
    { id: 5, title: 'Dangal', genre: 'Biography', release_year: 2016, director: 'Nitesh Tiwari', description: 'Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games.', rating: 8.4, poster: 'https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_.jpg', platforms: ['Amazon Prime Video', 'Disney+ Hotstar'] },
    { id: 6, title: 'Aarya', genre: 'Action', release_year: 2020, director: 'Balaji Mohan', description: 'Aarya, a drug lord, sets out to take down a corrupt politician in the port city of Kochi.', rating: 7.5, poster: 'https://m.media-amazon.com/images/M/MV5BMmY3OGIzMWUtNmE0Yi00NjZmLWFiMzItYTVmN2ZhZjk3MWUwXkEyXkFqcGc@._V1_.jpg', platforms: ['Disney+ Hotstar'] },
    { id: 7, title: 'Ala Vaikuntapuram', genre: 'Comedy', release_year: 2020, director: 'Udugula Venu', description: 'A man from a village in Andhra Pradesh goes to America to fulfill his late father\'s wish.', rating: 7.2, poster: 'https://m.media-amazon.com/images/M/MV5BMmY1ZjBmYzQtMmIyYS00Yzk3LTg5ZDYtZWM1ZTRkYTE3MWZlXkEyXkFqcGc@._V1_.jpg', platforms: ['Amazon Prime Video'] },
    { id: 8, title: 'Arjun Reddy', genre: 'Drama', release_year: 2017, director: 'Sandeep Reddy Vanga', description: 'Arjun Reddy, a brilliant but short-tempered medical student, falls in love with Preethi.', rating: 8.1, poster: 'https://m.media-amazon.com/images/M/MV5BY2Y4ZDhmM2UtMWY0ZS00ODFmLTk2N2YtMDM1ZmQzYWI4ZDQ3XkEyXkFqcGc@._V1_.jpg', platforms: ['Netflix'] },
    { id: 9, title: 'Dear Comrade', genre: 'Romance', release_year: 2019, director: 'Bharat Kamma', description: 'A young man and woman fall in love, but their relationship is tested by political unrest.', rating: 7.0, poster: 'https://m.media-amazon.com/images/M/MV5BYTE1YTgxYWUtMjZlMS00ZWEzLWI1MGMtOWRmZTQ5NjM0NGVhXkEyXkFqcGc@._V1_.jpg', platforms: ['Amazon Prime Video'] },
    { id: 10, title: 'Pushpa: The Rise', genre: 'Action', release_year: 2021, director: 'Sukumar', description: 'A labourer rises through the ranks of a smuggling syndicate, making some powerful enemies in the process.', rating: 7.6, poster: 'https://m.media-amazon.com/images/M/MV5BOWE4YWEyNjYtMWFiNC00M2IzLWE3ZGMtMjQ0ZGEyOWI1YjAzXkEyXkFqcGc@._V1_.jpg', platforms: ['Amazon Prime Video'] },
    { id: 11, title: 'Sarkaru Vaari Paata', genre: 'Action', release_year: 2022, director: 'Parasuram', description: 'A finance agent takes on a corrupt politician and his industrialist father-in-law.', rating: 7.0, poster: 'https://m.media-amazon.com/images/M/MV5BMzhmMDI3MmQtNTVmYi00YmRmLWIyYjQtMWQ3N2VlYzJkMDQ4XkEyXkFqcGc@._V1_.jpg', platforms: ['Amazon Prime Video'] },
    { id: 12, title: 'Salaam Venky', genre: 'Drama', release_year: 2022, director: 'Revathi', description: 'A mother fights for her son\'s right to donate his organs after his death from muscular dystrophy.', rating: 7.5, poster: 'https://m.media-amazon.com/images/M/MV5BNWJiYTIyNjUtNTdjMi00MjE1LWIxNDYtNmE1OGZkNDhjZmUwXkEyXkFqcGc@._V1_.jpg', platforms: ['Amazon Prime Video'] }
];

let actors = [
    { id: 1, name: 'Ram Charan', movie_id: 1, image: 'images/ram-charan.jpg' },
    { id: 2, name: 'N.T. Rama Rao Jr.', movie_id: 1, image: 'images/jr-ntr.jpg' },
    { id: 3, name: 'Prabhu Deva', movie_id: 2, image: 'images/prabhu-deva.jpg' },
    { id: 4, name: 'Rana Daggubati', movie_id: 2, image: 'images/rana-daggubati.jpg' },
    { id: 5, name: 'Yash', movie_id: 3, image: 'images/yash.jpg' },
    { id: 6, name: 'Srinidhi Shetty', movie_id: 3, image: 'images/srinidhi-shetty.jpg' },
    { id: 7, name: 'Aamir Khan', movie_id: 4, image: 'images/aamir-khan.jpg' },
    { id: 8, name: 'Kareena Kapoor', movie_id: 4, image: 'images/kareena-kapoor.jpg' },
    { id: 9, name: 'Aamir Khan', movie_id: 5, image: 'images/aamir-khan.jpg' },
    { id: 10, name: 'Sakshi Tanwar', movie_id: 5, image: 'images/sakshi-tanwar.jpg' },
    { id: 11, name: 'Alia Bhatt', movie_id: 5, image: 'images/alia-bhatt.jpg' },
    { id: 12, name: 'Sharukh Khan', movie_id: 4, image: 'images/shah-rukh-khan.jpg' },
    { id: 13, name: 'Sushant Singh Rajput', movie_id: 6, image: 'images/sushant-singh-rajput.jpg' },
    { id: 14, name: 'Pulkit Samrat', movie_id: 6, image: 'images/pulkit-samrat.jpg' },
    { id: 15, name: 'Vikrant Massey', movie_id: 6, image: 'images/vikrant-massey.jpg' },
    { id: 16, name: 'Allu Arjun', movie_id: 7, image: 'images/allu-arjun.jpg' },
    { id: 17, name: 'Pooja Hegde', movie_id: 7, image: 'images/pooja-hegde.jpg' },
    { id: 18, name: 'Tabu', movie_id: 7, image: 'images/tabu.jpg' },
    { id: 19, name: 'Vijay Deverakonda', movie_id: 8, image: 'images/vijay-deverakonda.jpg' },
    { id: 20, name: 'Shalini Pandey', movie_id: 8, image: 'images/shalini-pandey.jpg' },
    { id: 21, name: 'Jia Sharma', movie_id: 8, image: 'images/jia-sharma.jpg' },
    { id: 22, name: 'Vijay Deverakonda', movie_id: 9, image: 'images/vijay-deverakonda.jpg' },
    { id: 23, name: 'Rashmika Mandanna', movie_id: 9, image: 'images/rashmika-mandanna.jpg' },
    { id: 24, name: 'Prakash Raj', movie_id: 9, image: 'images/prakash-raj.jpg' },
    { id: 25, name: 'Alia Bhatt', movie_id: 1, image: 'images/alia-bhatt.jpg' },
    { id: 26, name: 'Ajay Devgn', movie_id: 1, image: 'images/ajay-devgn.jpg' },
    { id: 27, name: 'Allu Arjun', movie_id: 10, image: 'images/allu-arjun.jpg' },
    { id: 28, name: 'Rashmika Mandanna', movie_id: 10, image: 'images/rashmika-mandanna.jpg' },
    { id: 29, name: 'Fahadh Faasil', movie_id: 10, image: 'images/fahadh-faasil.jpg' },
    { id: 30, name: 'Mahesh Babu', movie_id: 11, image: 'images/mahesh-babu.jpg' },
    { id: 31, name: 'Keerthy Suresh', movie_id: 11, image: 'images/keerthy-suresh.jpg' },
    { id: 32, name: 'Samuthirakani', movie_id: 11, image: 'images/samuthirakani.jpg' },
    { id: 33, name: 'Kajol', movie_id: 12, image: 'images/kajol.jpg' },
    { id: 34, name: 'Vishal Jethwa', movie_id: 12, image: 'images/vishal-jethwa.jpg' }
];

let reviews = JSON.parse(localStorage.getItem('reviews')) || [
    { id: 1, movie_id: 1, username: 'User1', comment: 'Amazing action sequences!', rating: 9 },
    { id: 2, movie_id: 1, username: 'User2', comment: 'Great story and performances.', rating: 8 },
    { id: 3, movie_id: 2, username: 'User3', comment: 'Epic movie!', rating: 9 }
];

let users = JSON.parse(localStorage.getItem('users')) || [];

let theaters = [
    { id: 1, name: 'PVR Cinemas', location: 'Hyderabad, Telangana', rows: 10, cols: 15 },
    { id: 2, name: 'INOX', location: 'Hyderabad, Telangana', rows: 8, cols: 12 },
    { id: 3, name: 'Cinepolis', location: 'Hyderabad, Telangana', rows: 12, cols: 20 },
    { id: 4, name: 'Prasads', location: 'Hyderabad, Telangana', rows: 10, cols: 14 },
    { id: 5, name: 'Asian GPR', location: 'Hyderabad, Telangana', rows: 9, cols: 16 }
];

let bookings = JSON.parse(localStorage.getItem('bookings')) || [];

// Load data from localStorage
function loadData() {
    // Bump the localStorage version to 105 to clear the previous cache.
    if (!localStorage.getItem('app_version_107')) {
        localStorage.removeItem('movies');
        localStorage.removeItem('actors');
        localStorage.setItem('app_version_107', 'true');
    }

    const storedMovies = localStorage.getItem('movies');
    if (storedMovies && storedMovies !== '[]' && storedMovies !== 'null' && storedMovies !== '' && JSON.parse(storedMovies).length >= movies.length) {
        try {
            const parsedMovies = JSON.parse(storedMovies);
            if (Array.isArray(parsedMovies) && parsedMovies.length > 0) {
                movies = parsedMovies;
            }
        } catch (e) {
            console.error('Error parsing stored movies:', e);
        }
    } else {
        // Save defaults if no stored or fewer items
        saveData();
    }

    const storedActors = localStorage.getItem('actors');
    if (storedActors && storedActors !== '[]' && storedActors !== 'null' && storedActors !== '' && JSON.parse(storedActors).length >= actors.length) {
        try {
            const parsedActors = JSON.parse(storedActors);
            if (Array.isArray(parsedActors) && parsedActors.length > 0) {
                actors = parsedActors;
            }
        } catch (e) {
            console.error('Error parsing stored actors:', e);
        }
    } else {
        // Save defaults if no stored or fewer items
        saveData();
    }

    const storedReviews = localStorage.getItem('reviews');
    if (storedReviews && storedReviews !== '[]' && storedReviews !== 'null' && storedReviews !== '') {
        try {
            reviews = JSON.parse(storedReviews);
        } catch (e) {
            console.error('Error parsing stored reviews:', e);
            reviews = [
                { id: 1, movie_id: 1, username: 'User1', comment: 'Amazing action sequences!', rating: 9 },
                { id: 2, movie_id: 1, username: 'User2', comment: 'Great story and performances.', rating: 8 },
                { id: 3, movie_id: 2, username: 'User3', comment: 'Epic movie!', rating: 9 }
            ];
        }
    }

    const storedUsers = localStorage.getItem('users');
    if (storedUsers && storedUsers !== '[]' && storedUsers !== 'null' && storedUsers !== '') {
        try {
            users = JSON.parse(storedUsers);
        } catch (e) {
            console.error('Error parsing stored users:', e);
            users = [];
        }
    }

    const storedBookings = localStorage.getItem('bookings');
    if (storedBookings && storedBookings !== '[]' && storedBookings !== 'null' && storedBookings !== '') {
        try {
            bookings = JSON.parse(storedBookings);
        } catch (e) {
            console.error('Error parsing stored bookings:', e);
            bookings = [];
        }
    }
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('movies', JSON.stringify(movies));
    localStorage.setItem('actors', JSON.stringify(actors));
    localStorage.setItem('reviews', JSON.stringify(reviews));
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('bookings', JSON.stringify(bookings));
}

// Initialize
loadData();

// Reset data to defaults (for debugging)
function resetData() {
    localStorage.removeItem('movies');
    localStorage.removeItem('actors');
    localStorage.removeItem('reviews');
    localStorage.removeItem('users');
    localStorage.removeItem('bookings');
    localStorage.removeItem('app_version_107'); // Also remove the version flag
    location.reload();
}

// Display movies
function displayMovies() {
    const movieGrid = document.getElementById('movie-grid');
    if (!movieGrid) return;

    movieGrid.innerHTML = '';
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        const platformsStr = movie.platforms ? movie.platforms.join(', ') : 'Theater only';
        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Genre: ${movie.genre}</p>
            <p>Year: ${movie.release_year}</p>
            <p class="platforms">Platforms: ${platformsStr}</p>
            <a href="movie-details.html?id=${movie.id}" class="btn">View Details</a>
        `;
        movieGrid.appendChild(movieCard);
    });
}

// Display movie details
function displayMovieDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = parseInt(urlParams.get('id'));
    const movie = movies.find(m => m.id === movieId);

    if (!movie) return;

    const movieDetails = document.getElementById('movie-details');
    const cast = actors.filter(a => a.movie_id === movieId).map(a => a.name).join(', ');

    movieDetails.innerHTML = `
        <div>
            <img src="${movie.poster}" alt="${movie.title}">
        </div>
        <div>
            <h2>${movie.title}</h2>
            <p><strong>Director:</strong> ${movie.director}</p>
            <p><strong>Cast:</strong> ${cast}</p>
            <p><strong>Description:</strong> ${movie.description}</p>
            <p><strong>Rating:</strong> ${movie.rating}/10</p>
            <p><strong>Available on:</strong> ${movie.platforms ? movie.platforms.join(', ') : 'Theater only'}</p>
            <a href="booking.html" class="btn">Book Tickets</a>
        </div>
    `;
}

// Display actors
function displayActors() {
    const actorGrid = document.getElementById('actor-grid');
    if (!actorGrid) return;

    actorGrid.innerHTML = '';
    actors.forEach(actor => {
        const movie = movies.find(m => m.id === actor.movie_id);
        const actorCard = document.createElement('div');
        actorCard.className = 'actor-card';
        actorCard.innerHTML = `
            <img src="${actor.image}" alt="${actor.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/150x150/cccccc/000000?text=No+Image'">
            <h3>${actor.name}</h3>
            <p>Famous for: ${movie ? movie.title : 'Unknown'}</p>
        `;
        actorGrid.appendChild(actorCard);
    });
}

// Cancel booking
function cancelBooking(bookingId) {
    if (confirm('Are you sure you want to cancel this booking?')) {
        bookings = bookings.filter(b => b.id !== bookingId);
        saveData();
        displayMyBookings();
        alert('Booking cancelled successfully.');
    }
}

// Display reviews
function displayReviews() {
    const reviewsContainer = document.getElementById('reviews-container');
    if (!reviewsContainer) return;

    reviewsContainer.innerHTML = '';
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    reviews.forEach(review => {
        const movie = movies.find(m => m.id === review.movie_id);
        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'review';
        let deleteBtn = '';
        if (currentUser && review.username === currentUser.username) {
            deleteBtn = `<button class="btn delete-btn" onclick="deleteReview(${review.id})">Delete Review</button>`;
        }
        reviewDiv.innerHTML = `
            <h4>${review.username} - ${movie ? movie.title : 'Unknown Movie'}</h4>
            <p>Rating: ${review.rating}/10</p>
            <p>${review.comment}</p>
            ${deleteBtn}
        `;
        reviewsContainer.appendChild(reviewDiv);
    });
}

// Delete review
function deleteReview(reviewId) {
    if (confirm('Are you sure you want to delete this review?')) {
        reviews = reviews.filter(r => r.id !== reviewId);
        saveData();
        displayReviews();
        alert('Review deleted successfully.');
    }
}

// Submit review
function submitReview(event) {
    event.preventDefault();

    const movieId = parseInt(document.getElementById('movie-select').value);
    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;
    const rating = parseInt(document.getElementById('rating').value);

    if (!username || !comment || !rating) {
        alert('Please fill all fields');
        return;
    }

    const newReview = {
        id: reviews.length + 1,
        movie_id: movieId,
        username: username,
        comment: comment,
        rating: rating
    };

    reviews.push(newReview);
    saveData();
    displayReviews();

    // Reset form
    document.getElementById('review-form').reset();
}

// Admin functions
function displayAdminMovies() {
    const adminMoviesTable = document.getElementById('admin-movies-table');
    if (!adminMoviesTable) return;

    const tbody = adminMoviesTable.querySelector('tbody');
    tbody.innerHTML = '';

    movies.forEach(movie => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${movie.title}</td>
            <td>${movie.genre}</td>
            <td>${movie.release_year}</td>
            <td>
                <button onclick="editMovie(${movie.id})">Edit</button>
                <button onclick="deleteMovie(${movie.id})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function addMovie(event) {
    event.preventDefault();

    const title = document.getElementById('movie-title').value;
    const genre = document.getElementById('movie-genre').value;
    const releaseYear = parseInt(document.getElementById('movie-year').value);
    const director = document.getElementById('movie-director').value;
    const description = document.getElementById('movie-description').value;
    const rating = parseFloat(document.getElementById('movie-rating').value);
    const poster = document.getElementById('movie-poster').value;
    const platforms = document.getElementById('movie-platforms').value.split(',').map(p => p.trim()).filter(p => p);

    const newMovie = {
        id: movies.length + 1,
        title: title,
        genre: genre,
        release_year: releaseYear,
        director: director,
        description: description,
        rating: rating,
        poster: poster,
        platforms: platforms
    };

    movies.push(newMovie);
    saveData();
    displayAdminMovies();
    document.getElementById('add-movie-form').reset();
}

function editMovie(id) {
    const movie = movies.find(m => m.id === id);
    if (!movie) return;

    // Populate form with movie data
    document.getElementById('movie-title').value = movie.title;
    document.getElementById('movie-genre').value = movie.genre;
    document.getElementById('movie-year').value = movie.release_year;
    document.getElementById('movie-director').value = movie.director;
    document.getElementById('movie-description').value = movie.description;
    document.getElementById('movie-rating').value = movie.rating;
    document.getElementById('movie-poster').value = movie.poster;
    document.getElementById('movie-platforms').value = movie.platforms ? movie.platforms.join(', ') : '';

    // Change form to edit mode
    const form = document.getElementById('add-movie-form');
    form.onsubmit = (e) => updateMovie(e, id);
    document.getElementById('form-title').textContent = 'Edit Movie';
    document.getElementById('submit-btn').textContent = 'Update Movie';
}

function updateMovie(event, id) {
    event.preventDefault();

    const movie = movies.find(m => m.id === id);
    if (!movie) return;

    movie.title = document.getElementById('movie-title').value;
    movie.genre = document.getElementById('movie-genre').value;
    movie.release_year = parseInt(document.getElementById('movie-year').value);
    movie.director = document.getElementById('movie-director').value;
    movie.description = document.getElementById('movie-description').value;
    movie.rating = parseFloat(document.getElementById('movie-rating').value);
    movie.poster = document.getElementById('movie-poster').value;
    movie.platforms = document.getElementById('movie-platforms').value.split(',').map(p => p.trim()).filter(p => p);

    saveData();
    displayAdminMovies();

    // Reset form
    document.getElementById('add-movie-form').reset();
    document.getElementById('form-title').textContent = 'Add Movie';
    document.getElementById('submit-btn').textContent = 'Add Movie';
    document.getElementById('add-movie-form').onsubmit = addMovie;
}

function deleteMovie(id) {
    if (confirm('Are you sure you want to delete this movie?')) {
        movies = movies.filter(m => m.id !== id);
        saveData();
        displayAdminMovies();
    }
}

// ----- Authentication Helpers -----

function getRedirectUrl() {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');
    if (!redirect) return null;

    // Prevent open redirects by disallowing protocol-relative URLs or URLs with explicit schemes.
    if (/^(?:[a-zA-Z][a-zA-Z0-9+.-]*:)?\/\//.test(redirect) || /^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(redirect)) {
        return null;
    }

    // Prevent newline injection
    if (redirect.includes('\n') || redirect.includes('\r')) {
        return null;
    }

    try {
        const url = new URL(redirect, window.location.href);
        if (url.origin === window.location.origin) {
            return url.href;
        }
    } catch (e) {
        // Ignore invalid URL formats.
    }

    return null;
}

function requireLogin() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const path = window.location.pathname.split('/').pop().toLowerCase();
    const isAuthPage = path === 'login.html' || path === 'register.html';

    if (!currentUser && !isAuthPage) {
        const redirect = encodeURIComponent(window.location.href);
        window.location.href = `login.html?redirect=${redirect}`;
        return;
    }

    // If already logged in, redirect away from login/register pages.
    if (currentUser && isAuthPage) {
        const redirectUrl = getRedirectUrl() || 'index.html';
        window.location.href = redirectUrl;
    }
}

function updateNavForUser() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const nav = document.querySelector('nav ul');
    if (!nav) return;

    // Try to find existing nav items
    const loginLi = nav.querySelector('a[href="login.html"]')?.closest('li');
    const profileLi = nav.querySelector('a[href="profile.html"]')?.closest('li');

    if (currentUser) {
        const label = `Profile (${currentUser.username})`;

        // Ensure a profile link exists
        if (profileLi) {
            const profileAnchor = profileLi.querySelector('a[href="profile.html"]');
            if (profileAnchor) {
                profileAnchor.textContent = label;
            }
        } else if (loginLi) {
            // Turn the existing login item into a profile link
            loginLi.innerHTML = `<a href="profile.html">${label}</a>`;
        } else {
            const li = document.createElement('li');
            li.innerHTML = `<a href="profile.html">${label}</a>`;
            nav.appendChild(li);
        }
    } else {
        // Remove profile link if present
        if (profileLi) {
            profileLi.remove();
        }

        if (loginLi) {
            loginLi.innerHTML = '<a href="login.html">Login</a>';
        }
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}

// ----- Profile & Password Management -----

function renderProfileDetails() {
    const container = document.getElementById('profile-details');
    if (!container) return;

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        container.innerHTML = '<p>No user information found. Please log in again.</p>';
        return;
    }

    const safeUsername = currentUser.username || '';
    const safeEmail = currentUser.email || '';
    const maskedEmail = safeEmail
        ? safeEmail.replace(/(.{2}).+(@.+)/, (m, start, end) => start + '***' + end)
        : '';

    container.innerHTML = `
        <h3>Account Details</h3>
        <p class="profile-meta">These are the details you provided during registration.</p>
        <div class="profile-fields">
            <div>
                <div class="profile-field-label">Username</div>
                <div class="profile-field-value">${safeUsername}</div>
            </div>
            <div>
                <div class="profile-field-label">Email</div>
                <div class="profile-field-value">${maskedEmail || 'Not set'}</div>
            </div>
        </div>
    `;
}

function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function sendPasswordOtp() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || !currentUser.email) {
        alert('We could not find an email address for your account.');
        return;
    }

    const otp = generateOtp();
    const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes
    const key = `password_otp_${currentUser.id}`;
    sessionStorage.setItem(
        key,
        JSON.stringify({ otp, expiresAt })
    );

    const statusEl = document.getElementById('otp-status');
    if (statusEl) {
        statusEl.textContent = `OTP sent to ${currentUser.email}. It will expire in 10 minutes.`;
    }

    // In a real app, this OTP would be emailed via backend instead of stored in the browser.
    console.log('Debug OTP (for development only):', otp);
}

function handleChangePasswordWithCurrent(event) {
    event.preventDefault();

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        alert('Session expired. Please log in again.');
        window.location.href = 'login.html';
        return;
    }

    const currentPasswordInput = document.getElementById('current-password');
    const newPasswordInput = document.getElementById('new-password-known');
    const confirmPasswordInput = document.getElementById('confirm-password-known');

    const currentPassword = currentPasswordInput ? currentPasswordInput.value : '';
    const newPassword = newPasswordInput ? newPasswordInput.value : '';
    const confirmPassword = confirmPasswordInput ? confirmPasswordInput.value : '';

    if (!currentPassword) {
        alert('Please enter your current password.');
        return;
    }

    if (currentPassword !== currentUser.password) {
        alert('Current password is incorrect.');
        return;
    }

    if (!newPassword || !confirmPassword) {
        alert('Please enter and confirm your new password.');
        return;
    }

    if (newPassword !== confirmPassword) {
        alert('New password and confirm password do not match.');
        return;
    }

    if (newPassword.length < 6) {
        alert('Password should be at least 6 characters long.');
        return;
    }

    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex === -1) {
        alert('User not found. Please log in again.');
        return;
    }

    users[userIndex].password = newPassword;
    localStorage.setItem('users', JSON.stringify(users));

    currentUser.password = newPassword;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    alert('Your password has been updated successfully.');
    if (event.target && typeof event.target.reset === 'function') {
        event.target.reset();
    }
}

function handleChangePasswordWithOtp(event) {
    event.preventDefault();

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        alert('Session expired. Please log in again.');
        window.location.href = 'login.html';
        return;
    }

    const otpInput = document.getElementById('otp-input');
    const newPasswordInput = document.getElementById('new-password-otp');
    const confirmPasswordInput = document.getElementById('confirm-password-otp');
    const statusEl = document.getElementById('otp-status');

    const enteredOtp = otpInput ? otpInput.value.trim() : '';
    const newPassword = newPasswordInput ? newPasswordInput.value : '';
    const confirmPassword = confirmPasswordInput ? confirmPasswordInput.value : '';

    if (!enteredOtp) {
        alert('Please enter the OTP.');
        return;
    }

    const key = `password_otp_${currentUser.id}`;
    const stored = sessionStorage.getItem(key);
    if (!stored) {
        alert('Please click "Send OTP to Email" first.');
        return;
    }

    let parsed;
    try {
        parsed = JSON.parse(stored);
    } catch {
        alert('OTP is invalid. Please request a new one.');
        sessionStorage.removeItem(key);
        return;
    }

    if (Date.now() > parsed.expiresAt) {
        alert('OTP has expired. Please request a new one.');
        sessionStorage.removeItem(key);
        if (statusEl) statusEl.textContent = 'OTP expired. Please request a new one.';
        return;
    }

    if (enteredOtp !== parsed.otp) {
        alert('Incorrect OTP. Please check and try again.');
        return;
    }

    if (!newPassword || !confirmPassword) {
        alert('Please enter and confirm your new password.');
        return;
    }

    if (newPassword !== confirmPassword) {
        alert('New password and confirm password do not match.');
        return;
    }

    if (newPassword.length < 6) {
        alert('Password should be at least 6 characters long.');
        return;
    }

    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex === -1) {
        alert('User not found. Please log in again.');
        return;
    }

    users[userIndex].password = newPassword;
    localStorage.setItem('users', JSON.stringify(users));

    currentUser.password = newPassword;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    sessionStorage.removeItem(key);

    if (statusEl) {
        statusEl.textContent = 'Password reset successfully.';
    }
    alert('Your password has been reset successfully.');
    if (event.target && typeof event.target.reset === 'function') {
        event.target.reset();
    }
}

function initProfilePage() {
    renderProfileDetails();

    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            logout();
        });
    }
}

function initChangePasswordKnownPage() {
    const form = document.getElementById('change-password-known-form');
    if (form) {
        form.addEventListener('submit', handleChangePasswordWithCurrent);
    }

    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            logout();
        });
    }
}

function initForgotPasswordPage() {
    const sendOtpButton = document.getElementById('send-otp-button');
    if (sendOtpButton) {
        sendOtpButton.addEventListener('click', sendPasswordOtp);
    }

    const form = document.getElementById('change-password-otp-form');
    if (form) {
        form.addEventListener('submit', handleChangePasswordWithOtp);
    }

    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            logout();
        });
    }
}
// Login function
function login(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert('Login successful!');
        const redirectUrl = getRedirectUrl() || 'index.html';
        window.location.href = redirectUrl;
    } else {
        alert('User not found. Please register first.');
        const redirectUrl = getRedirectUrl() || 'index.html';
        window.location.href = `register.html?redirect=${encodeURIComponent(redirectUrl)}`;
    }
}

// Register function
function register(event) {
    event.preventDefault();

    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    const email = document.getElementById('reg-email').value;

    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        alert('Username already exists. Please choose a different one.');
        return;
    }

    const newUser = {
        id: users.length + 1,
        username: username,
        password: password,
        email: email
    };

    users.push(newUser);
    saveData();
    alert('Registration successful! Please login.');

    const redirectUrl = getRedirectUrl() || 'index.html';
    window.location.href = `login.html?redirect=${encodeURIComponent(redirectUrl)}`;
}

// Populate movie select
function populateMovieSelect() {
    const select = document.getElementById('movie-select');
    if (!select) return;
    select.innerHTML = '<option value="">Choose a movie</option>';
    movies.forEach(movie => {
        const option = document.createElement('option');
        option.value = movie.id;
        option.textContent = movie.title;
        select.appendChild(option);
    });
}

// Populate theater select
function populateTheaterSelect() {
    const select = document.getElementById('theater-select');
    if (!select) return;
    select.innerHTML = '<option value="">Choose a theater</option>';
    theaters.forEach(theater => {
        const option = document.createElement('option');
        option.value = theater.id;
        option.textContent = `${theater.name} - ${theater.location}`;
        select.appendChild(option);
    });
}

// Display seat grid
function displaySeatGrid(theaterId) {
    const theater = theaters.find(t => t.id == theaterId);
    if (!theater) return;

    const seatGrid = document.getElementById('seat-grid');
    seatGrid.innerHTML = '';
    seatGrid.style.gridTemplateColumns = `repeat(${theater.cols}, 1fr)`;

    // Get booked seats for this theater (assuming all movies share seats for simplicity)
    const bookedSeats = bookings.filter(b => b.theater_id == theaterId).flatMap(b => b.seats);

    for (let row = 1; row <= theater.rows; row++) {
        for (let col = 1; col <= theater.cols; col++) {
            const seatId = `${row}-${col}`;
            const seat = document.createElement('div');
            seat.className = 'seat';
            seat.textContent = seatId;
            seat.dataset.seatId = seatId;

            if (bookedSeats.includes(seatId)) {
                seat.classList.add('booked');
            } else {
                seat.addEventListener('click', () => toggleSeat(seat));
            }

            seatGrid.appendChild(seat);
        }
    }
}

let selectedSeats = [];

// Toggle seat selection
function toggleSeat(seatElement) {
    const seatId = seatElement.dataset.seatId;
    const numSeats = parseInt(document.getElementById('num-seats').value);

    if (seatElement.classList.contains('selected')) {
        seatElement.classList.remove('selected');
        selectedSeats = selectedSeats.filter(s => s !== seatId);
    } else {
        if (selectedSeats.length < numSeats) {
            seatElement.classList.add('selected');
            selectedSeats.push(seatId);
        } else {
            alert(`You can only select ${numSeats} seats.`);
        }
    }

    document.getElementById('selected-seats').textContent = selectedSeats.join(', ') || 'None';
    document.getElementById('confirm-booking').style.display = selectedSeats.length === numSeats ? 'block' : 'none';
}

// Handle booking form
function handleBooking(event) {
    event.preventDefault();

    const movieId = document.getElementById('movie-select').value;
    const theaterId = document.getElementById('theater-select').value;
    const numSeats = document.getElementById('num-seats').value;

    if (!movieId || !theaterId || !numSeats) {
        alert('Please fill all fields.');
        return;
    }

    selectedSeats = [];
    displaySeatGrid(theaterId);

    const seatSection = document.getElementById('seat-selection');
    seatSection.style.display = 'block';

    // Smoothly scroll to the seat selection area
    seatSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    document.getElementById('confirm-booking').addEventListener('click', () => confirmBooking(movieId, theaterId));
}

// Confirm booking
function confirmBooking(movieId, theaterId) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        alert('Please login to book tickets.');
        window.location.href = 'login.html';
        return;
    }

    const newBooking = {
        id: bookings.length + 1,
        user_id: currentUser.id,
        movie_id: parseInt(movieId),
        theater_id: parseInt(theaterId),
        seats: selectedSeats,
        booking_date: new Date().toISOString()
    };

    bookings.push(newBooking);
    saveData();
    alert('Booking confirmed!');
    displayMyBookings();
    // Reset form
    document.getElementById('booking-form').reset();
    document.getElementById('seat-selection').style.display = 'none';
    selectedSeats = [];
}

// Display user's bookings
function displayMyBookings() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        document.getElementById('bookings-list').innerHTML = '<p>Please login to view your bookings.</p>';
        return;
    }

    const userBookings = bookings.filter(b => b.user_id === currentUser.id);
    const bookingsList = document.getElementById('bookings-list');
    if (!bookingsList) return;

    bookingsList.innerHTML = '';
    if (userBookings.length === 0) {
        bookingsList.innerHTML = '<p>No bookings found.</p>';
        return;
    }

    userBookings.forEach(booking => {
        const movie = movies.find(m => m.id === booking.movie_id);
        const theater = theaters.find(t => t.id === booking.theater_id);
        const bookingDiv = document.createElement('div');
        bookingDiv.className = 'booking-item';
        bookingDiv.innerHTML = `
            <h4>${movie ? movie.title : 'Unknown Movie'}</h4>
            <p><strong>Theater:</strong> ${theater ? theater.name + ' - ' + theater.location : 'Unknown'}</p>
            <p><strong>Seats:</strong> ${booking.seats.join(', ')}</p>
            <p><strong>Date:</strong> ${new Date(booking.booking_date).toLocaleString()}</p>
            <button class="btn cancel-btn" onclick="cancelBooking(${booking.id})">Cancel Booking</button>
        `;
        bookingsList.appendChild(bookingDiv);
    });
}

// Initialize pages
document.addEventListener('DOMContentLoaded', function () {
    requireLogin();
    updateNavForUser();

    if (document.getElementById('movie-grid')) {
        displayMovies();
    }

    if (document.getElementById('movie-details')) {
        displayMovieDetails();
    }

    if (document.getElementById('actor-grid')) {
        displayActors();
    }

    if (document.getElementById('reviews-container')) {
        displayReviews();
    }

    if (document.getElementById('review-form')) {
        document.getElementById('review-form').addEventListener('submit', submitReview);
    }

    if (document.getElementById('admin-movies-table')) {
        displayAdminMovies();
    }

    if (document.getElementById('add-movie-form')) {
        document.getElementById('add-movie-form').addEventListener('submit', addMovie);
    }

    if (document.getElementById('login-form')) {
        document.getElementById('login-form').addEventListener('submit', login);
    }

    if (document.getElementById('register-form')) {
        document.getElementById('register-form').addEventListener('submit', register);
    }

    if (document.getElementById('profile-details')) {
        initProfilePage();
    }

    if (document.getElementById('change-password-known-form')) {
        initChangePasswordKnownPage();
    }

    if (document.getElementById('change-password-otp-form')) {
        initForgotPasswordPage();
    }

    if (document.getElementById('booking-form')) {
        populateMovieSelect();
        populateTheaterSelect();
        document.getElementById('booking-form').addEventListener('submit', handleBooking);
        displayMyBookings();
    }
});
