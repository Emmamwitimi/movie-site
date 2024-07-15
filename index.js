document.addEventListener("DOMContentLoaded", () => {
    const moviesList = document.getElementById('allMovies');
    const ticketsOrderedList = document.getElementById('ticketsAvailable');
    
    fetch('http://localhost:3000/films')
        .then(response => response.json())
        .then(data => {
            data.forEach(movie => {
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
                        movieDisplay();
                    });

                    // Append Buy Ticket button to availableTicketsList <li>
                    availableTicketsList.appendChild(buyBtn);

                    // Append availableTicketsList <li> to ticketsOrderedList <ol>
                    ticketsOrderedList.appendChild(availableTicketsList);
                }
            });
        })
        .catch(error => {
            console.error('Error fetching movies:', error);
        });
        function movieDisplay{
            
        };

    const bookBtn = document.getElementById('bookbtn');
    const availableTicketsSection = document.getElementById('availableTickets');

    bookBtn.addEventListener("click", () => {
        availableTicketsSection.style.display = 'block';
    });
});
