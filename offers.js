
// ================================
// WanderWorld - Offers Management
// ================================

// Initial offers
const defaultOffers = [
    {
        id: 1,
        title: "Goa Beach Special",
        description: "Enjoy a relaxing beach holiday in Goa with special discounts.",
        discount: 25,
        validUntil: "2026-12-31",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
        status: "Active"
    },
    {
        id: 2,
        title: "Dubai Holiday Offer",
        description: "Explore Dubai with an exclusive holiday package discount.",
        discount: 20,
        validUntil: "2026-11-30",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
        status: "Active"
    },
    {
        id: 3,
        title: "Bali Summer Deal",
        description: "Book your Bali trip and save more on your dream vacation.",
        discount: 30,
        validUntil: "2026-10-31",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
        status: "Active"
    },
    {
        id: 4,
        title: "Manali Adventure Offer",
        description: "Experience the mountains of Manali at an affordable price.",
        discount: 15,
        validUntil: "2026-12-15",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
        status: "Active"
    }
];


// Get all offers
function getOffers() {
    const storedOffers = localStorage.getItem("wanderWorldOffers");

    if (storedOffers) {
        return JSON.parse(storedOffers);
    }

    localStorage.setItem(
        "wanderWorldOffers",
        JSON.stringify(defaultOffers)
    );

    return defaultOffers;
}


// Save offers
function saveOffers(offers) {
    localStorage.setItem(
        "wanderWorldOffers",
        JSON.stringify(offers)
    );
}


// Get offer by ID
function getOfferById(id) {
    const offers = getOffers();

    return offers.find(function (offer) {
        return Number(offer.id) === Number(id);
    });
}


// Add new offer
function addOffer(newOffer) {
    const offers = getOffers();

    const newId = offers.length > 0
        ? Math.max(...offers.map(offer => Number(offer.id))) + 1
        : 1;

    newOffer.id = newId;

    offers.push(newOffer);

    saveOffers(offers);

    return newOffer;
}


// Update offer
function updateOffer(updatedOffer) {
    const offers = getOffers();

    const index = offers.findIndex(function (offer) {
        return Number(offer.id) === Number(updatedOffer.id);
    });

    if (index !== -1) {
        offers[index] = updatedOffer;
        saveOffers(offers);
        return true;
    }

    return false;
}


// Delete offer
function deleteOffer(id) {
    const offers = getOffers();

    const updatedOffers = offers.filter(function (offer) {
        return Number(offer.id) !== Number(id);
    });

    saveOffers(updatedOffers);

    return true;
}


// Search offers
function searchOffers(searchText) {
    const offers = getOffers();

    const searchValue = searchText.toLowerCase().trim();

    if (!searchValue) {
        return offers;
    }

    return offers.filter(function (offer) {
        return (
            offer.title.toLowerCase().includes(searchValue) ||
            offer.description.toLowerCase().includes(searchValue)
        );
    });
}


// Filter offers by status
function filterOffers(status) {
    const offers = getOffers();

    if (!status || status === "All") {
        return offers;
    }

    return offers.filter(function (offer) {
        return offer.status === status;
    });
}


// Check whether offer is expired
function isOfferExpired(validUntil) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const expiryDate = new Date(validUntil);
    expiryDate.setHours(0, 0, 0, 0);

    return expiryDate < today;
}

