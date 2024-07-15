Flatdango   

 https://flatdango-five.vercel.app/


Flatdango is a web application for Flatiron Movie Theater that allows users to purchase movie tickets online. The app fetches data from a local JSON server and displays movie details, ticket availability, and allows ticket purchases.

Table of Contents
Introduction
Features
Installation
Usage
Project Structure
API Endpoints
Contributing
License
Introduction
Flatdango is designed to enhance the user experience for purchasing movie tickets at Flatiron Movie Theater. Users can view movie details, check ticket availability, and buy tickets directly from the application. The app updates the ticket count in real-time and provides a seamless user experience.

Features
View details of the first movie on page load, including the poster, title, runtime, showtime, and available tickets.
Display a list of all movies in the theater.
Purchase tickets and see the number of available tickets decrease in real-time.
Prevent ticket purchases when the showing is sold out.
(Bonus) Click on a movie in the list to view its details.
(Bonus) Indicate sold-out movies in the list and change the "Buy Ticket" button text to "Sold Out".
(Extra Bonus) Persist ticket purchase data on the server using PATCH requests.
(Extra Bonus) Delete a movie from the server and the list using DELETE requests.
