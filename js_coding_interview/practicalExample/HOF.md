1. a function which takesanathor function as a argument is known as hof 
2. why it is used - it promotes code re usability
3. for example in hotel booking to apply diff 
4. Imagine a scenario where you are managing a hotel reservation system (like in your ONRES project). You need a function to apply different filters to a list of bookings, such as filtering by room type, checking if the room is available, or selecting bookings by date.
```js
const bookings = [
    { room: 'Suite', isAvailable: true, date: '2024-11-15' },
    { room: 'Standard', isAvailable: false, date: '2024-11-16' },
    { room: 'Deluxe', isAvailable: true, date: '2024-11-17' },
];

// Higher-order function that accepts a condition as a function
function filterBookings(bookings, condition) {
    return bookings.filter(condition);
}

// Define different filter conditions
const availableRooms = booking => booking.isAvailable;
const suiteRooms = booking => booking.room === 'Suite';
const bookingsOnDate = date => booking => booking.date === date;

// Using the higher-order function with different conditions
console.log(filterBookings(bookings, availableRooms)); 
console.log(filterBookings(bookings, suiteRooms));
console.log(filterBookings(bookings, bookingsOnDate('2024-11-15')));

```