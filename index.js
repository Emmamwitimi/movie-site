document.addEventListener("DOMContentLoaded", () => {
    const moviesList = document.getElementById('allMovies');
    const ticketsOrderedList = document.getElementById('ticketsAvailable');
    
    fetch('https://raw.githubusercontent.com/Emmamwitimi/movie-site/main/db.json')
        .then(response => response.json())
        .then(data => {
            data.films.forEach(movie => {
                const movieTitle = document.createElement("li");
                movieTitle.textContent = movie.title;
                moviesList.appendChild(movieTitle);

                const availableTickets = movie.capacity - movie.tickets_sold;
                if (availableTickets > 0) {
                    const availableTicketsList = document.createElement("li");
                    availableTicketsList.textContent = `${movie.title} - Available Tickets: ${availableTickets}`;

                    // Create Buy Ticket button
                    const buyBtn = document.createElement("button");
                    buyBtn.textContent = 'Buy Ticket';
                    buyBtn.addEventListener('click', () => {
                        movieDisplay(movie);
                    });

                    // Append Buy Ticket button to availableTicketsList <li>
                    availableTicketsList.appendChild(buyBtn);

                    // Append availableTicketsList <li> to ticketsOrderedList <ol>
                    ticketsOrderedList.appendChild(availableTicketsList);
                }
            });
            // Function to display movie details
            function movieDisplay(movie) {
                const movieDetails = document.getElementById('movieDetails');
                movieDetails.innerHTML = `
                    <img src="${movie.poster}" alt="${movie.title} poster">
                    <h2>${movie.title}</h2>
                    <p>Runtime: ${movie.runtime} minutes</p>
                    <p>Showtime: ${movie.showtime}</p>
                    <p>Description: ${movie.description}</p>
                    <p>Available Tickets: ${movie.capacity - movie.tickets_sold}</p>
                `;
            }
        })
        .catch(error => {
            console.error('Error fetching movies:', error);
        });
        

    const bookBtn = document.getElementById('bookbtn');
    const availableTicketsSection = document.getElementById('availableTickets');

    bookBtn.addEventListener("click", () => {
        availableTicketsSection.style.display = 'block';
    });
});
