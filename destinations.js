
// ============================================
// WANDERWORLD - DESTINATION DATA
// ============================================

const destinations = [

    {
        id: 1,
        name: "Goa",
        country: "India",
        region: "Beach",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
        rating: 4.8,
        reviews: 245,
        description:
            "Enjoy beautiful beaches, exciting nightlife, delicious food and relaxing coastal experiences."
    },

    {
        id: 2,
        name: "Manali",
        country: "India",
        region: "Mountain",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
        rating: 4.9,
        reviews: 198,
        description:
            "Explore snow-covered mountains, beautiful valleys, adventure activities and peaceful nature."
    },

    {
        id: 3,
        name: "Kerala",
        country: "India",
        region: "Nature",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
        rating: 4.8,
        reviews: 312,
        description:
            "Experience peaceful backwaters, lush greenery, beaches, houseboats and traditional culture."
    },

    {
        id: 4,
        name: "Dubai",
        country: "UAE",
        region: "International",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
        rating: 4.7,
        reviews: 276,
        description:
            "Discover luxury shopping, modern architecture, desert adventures and unforgettable city views."
    },

    {
        id: 5,
        name: "Bali",
        country: "Indonesia",
        region: "International",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
        rating: 4.9,
        reviews: 354,
        description:
            "Discover tropical beaches, beautiful temples, waterfalls, culture and peaceful island resorts."
    },

    {
        id: 6,
        name: "Paris",
        country: "France",
        region: "International",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80",
        rating: 4.8,
        reviews: 421,
        description:
            "Visit the Eiffel Tower, explore romantic streets, enjoy French cuisine and experience Parisian culture."
    }

];



// ============================================
// GET DESTINATIONS
// ============================================

function getDestinations() {

    const storedDestinations =
        localStorage.getItem("wanderWorldDestinations");

    if (storedDestinations) {

        return JSON.parse(storedDestinations);

    }

    localStorage.setItem(
        "wanderWorldDestinations",
        JSON.stringify(destinations)
    );

    return destinations;

}



// ============================================
// SAVE DESTINATIONS
// ============================================

function saveDestinations(destinationList) {

    localStorage.setItem(
        "wanderWorldDestinations",
        JSON.stringify(destinationList)
    );

}



// ============================================
// GET DESTINATION BY ID
// ============================================

function getDestinationById(id) {

    const destinationList = getDestinations();

    return destinationList.find(
        destination =>
            Number(destination.id) === Number(id)
    );

}



// ============================================
// ADD DESTINATION
// ============================================

function addDestination(destination) {

    const destinationList = getDestinations();

    const newId =
        destinationList.length > 0
            ? Math.max(
                ...destinationList.map(
                    destination => Number(destination.id)
                )
            ) + 1
            : 1;

    destination.id = newId;

    destinationList.push(destination);

    saveDestinations(destinationList);

    return destination;

}



// ============================================
// UPDATE DESTINATION
// ============================================

function updateDestination(updatedDestination) {

    const destinationList = getDestinations();

    const index = destinationList.findIndex(
        destination =>
            Number(destination.id) ===
            Number(updatedDestination.id)
    );

    if (index !== -1) {

        destinationList[index] = updatedDestination;

        saveDestinations(destinationList);

        return true;

    }

    return false;

}



// ============================================
// DELETE DESTINATION
// ============================================

function deleteDestination(id) {

    let destinationList = getDestinations();

    destinationList =
        destinationList.filter(
            destination =>
                Number(destination.id) !== Number(id)
        );

    saveDestinations(destinationList);

}



// ============================================
// SEARCH DESTINATIONS
// ============================================

function searchDestinations(searchText) {

    const destinationList = getDestinations();

    const search =
        searchText.toLowerCase().trim();

    if (!search) {

        return destinationList;

    }

    return destinationList.filter(
        destination =>

            destination.name
                .toLowerCase()
                .includes(search)

            ||

            destination.country
                .toLowerCase()
                .includes(search)

            ||

            destination.region
                .toLowerCase()
                .includes(search)

    );

}



// ============================================
// FILTER DESTINATIONS
// ============================================

function filterDestinations(region) {

    const destinationList = getDestinations();

    if (!region || region === "All") {

        return destinationList;

    }

    return destinationList.filter(
        destination =>
            destination.region === region
    );

}

