const { bookCottage, getAvailableCottages, getCottageDetails } = require("../services/bookingService");

// tillgängliga stugor
async function available(req, res) {
  try {
    return res.json(getAvailableCottages());
  } catch (e) {
    return res.status(500).json({ message: e.message })
  }
}

// hämta en stuga
async function get(req, res) {
  if (isNaN(req.params.id)) {
    return res.status(400).json({ message: 'Ogiltigt nummer' });
  }

  try {
    return res.json(getCottageDetails(req.params.id));
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

// boka en stuga
async function book(req, res) {
  if (isNaN(req.params.id)) {
    return res.status(400).json({ message: 'Ogiltigt nummer' });
  }

  try {
    let { name, email, phone } = req.body;
    return res.json(bookCottage(req.params.id, { name, email, phone }));
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

module.exports = {
  available,
  get,
  book
}