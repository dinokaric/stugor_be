const { getAllBookings } = require("../services/bookingService");

// alla bokningar
async function allBookings(req, res) {
  try {
    return res.json(getAllBookings());
  } catch (e) {
    return res.status(500).json({ message: e.message })
  }
}

module.exports = {
  allBookings
}