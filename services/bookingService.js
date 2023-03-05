let _nextId = 0;
let _bookings = [];

let _cottages = [
  { id: 0, name: 'Stuga 1', image: '/images/1.jpg', description: 'En trevlig stuga 1', price: 500 },
  { id: 1, name: 'Stuga 2', image: '/images/2.jpg', description: 'En trevlig stuga 2', price: 450 },
  { id: 2, name: 'Stuga 3', image: '/images/3.jpg', description: 'En trevlig stuga 3', price: 841 },
  { id: 3, name: 'Stuga 4', image: '/images/4.jpg', description: 'En trevlig stuga 4', price: 984 },
  { id: 4, name: 'Stuga 5', image: '/images/5.jpg', description: 'En trevlig stuga 5', price: 674 },
  { id: 5, name: 'Stuga 6', image: '/images/6.jpg', description: 'En trevlig stuga 6', price: 635 },
  { id: 6, name: 'Stuga 7', image: '/images/7.jpg', description: 'En trevlig stuga 7', price: 585 },
];

// Hämta alla bokningar, merge:a in stugans namn via cottage_id nyckel
function getAllBookings() {
  return _bookings.map(booking => ({ ...booking, cottage_name: _cottages.find(cottage => cottage.id === booking.cottage_id).name }));
}

// Hämta all stugor som inte har bokningar
function getAvailableCottages() {
  return _cottages.filter(cottage => _bookings.findIndex(booking => booking.cottage_id === cottage.id) === -1);
}

// Alla detaljer för en stuga
function getCottageDetails(id) {
  let cottage = _cottages.find(cottage => cottage.id === Number(id));
  if (cottage && _bookings.findIndex(booking => booking.cottage_id === cottage.id) === -1) {
    return cottage;
  } else {
    throw Error("Ogiltig stuga");
  }
}

// Boka stuga med id, bookingDetails = { name, email, phone }
function bookCottage(id, bookingDetails) {
  let cottage = _cottages.find(cottage => cottage.id === Number(id));
  if (cottage && _bookings.findIndex(booking => booking.cottage_id === cottage.id) === -1) {
    _nextId++;
    let bookingObject = { ...bookingDetails };
    bookingObject.id = _nextId;
    bookingObject.cottage_id = Number(id);

    _bookings.push(bookingObject);
    return { id: _nextId };
  } else {
    throw Error("Ogiltig stuga");
  }

}

module.exports = {
  getAllBookings,
  getAvailableCottages,
  getCottageDetails,
  bookCottage
}