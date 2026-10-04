
// ============================================
// WANDERWORLD - TOUR PACKAGE DATA
// ============================================

const packages = [

    {
        id: 1,
        name: "Kerala Escape",
        destination: "Kerala",
        country: "India",
        duration: 5,
        nights: 4,
        persons: 2,
        price: 24999,
        oldPrice: 29999,
        rating: 4.8,
        reviews: 125,
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
        description: "Explore Kerala's beautiful backwaters, green landscapes, tea gardens and traditional houseboats."
    },

    {
        id: 2,
        name: "Dubai Adventure",
        destination: "Dubai",
        country: "UAE",
        duration: 6,
        nights: 5,
        persons: 2,
        price: 59999,
        oldPrice: 69999,
        rating: 4.7,
        reviews: 98,
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
        description: "Experience Dubai's iconic skyline, desert safari, luxury shopping and exciting attractions."
    },

    {
        id: 3,
        name: "Bali Holiday",
        destination: "Bali",
        country: "Indonesia",
        duration: 7,
        nights: 6,
        persons: 2,
        price: 69999,
        oldPrice: 79999,
        rating: 4.9,
        reviews: 154,
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
        description: "Discover Bali's tropical beaches, temples, waterfalls and peaceful island resorts."
    },

    {
        id: 4,
        name: "Goa Beach Escape",
        destination: "Goa",
        country: "India",
        duration: 4,
        nights: 3,
        persons: 2,
        price: 18999,
        oldPrice: 22999,
        rating: 4.8,
        reviews: 176,
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
        description: "Relax on golden beaches, enjoy local food and explore Goa's vibrant coastal life."
    },

    {
        id: 5,
        name: "Manali Mountain Trip",
        destination: "Manali",
        country: "India",
        duration: 5,
        nights: 4,
        persons: 2,
        price: 22999,
        oldPrice: 27999,
        rating: 4.9,
        reviews: 143,
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
        description: "Enjoy mountain views, beautiful valleys, adventure activities and a refreshing hill-station escape."
    },

    {
        id: 6,
        name: "Paris Romantic Getaway",
        destination: "Paris",
        country: "France",
        duration: 6,
        nights: 5,
        persons: 2,
        price: 89999,
        oldPrice: 99999,
        rating: 4.8,
        reviews: 201,
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80",
        description: "Discover the Eiffel Tower, charming streets, French cuisine and romantic city views."
    }

];


// ============================================
// GET ALL PACKAGES
// ============================================

function getPackages() {

    const storedPackages =
        localStorage.getItem("wanderWorldPackages");

    if (storedPackages) {
        return JSON.parse(storedPackages);
    }

    localStorage.setItem(
        "wanderWorldPackages",
        JSON.stringify(packages)
    );

    return packages;

}


// ============================================
// SAVE PACKAGES
// ============================================

function savePackages(packageList) {

    localStorage.setItem(
        "wanderWorldPackages",
        JSON.stringify(packageList)
    );

}


// ============================================
// GET PACKAGE BY ID
// ============================================

function getPackageById(id) {

    return getPackages().find(
        item => Number(item.id) === Number(id)
    );

}


// ============================================
// ADD PACKAGE
// ============================================

function addPackage(newPackage) {

    const packageList = getPackages();

    const newId = packageList.length > 0
        ? Math.max(
            ...packageList.map(item => Number(item.id))
        ) + 1
        : 1;

    newPackage.id = newId;

    packageList.push(newPackage);

    savePackages(packageList);

    return newPackage;

}


// ============================================
// UPDATE PACKAGE
// ============================================

function updatePackage(updatedPackage) {

    const packageList = getPackages();

    const index = packageList.findIndex(
        item => Number(item.id) === Number(updatedPackage.id)
    );

    if (index === -1) {
        return false;
    }

    packageList[index] = updatedPackage;

    savePackages(packageList);

    return true;

}


// ============================================
// DELETE PACKAGE
// ============================================

function deletePackage(id) {

    const packageList = getPackages().filter(
        item => Number(item.id) !== Number(id)
    );

    savePackages(packageList);

}


// ============================================
// SEARCH PACKAGES
// ============================================

function searchPackages(searchText) {

    const search = searchText.toLowerCase().trim();

    return getPackages().filter(item =>
        item.name.toLowerCase().includes(search) ||
        item.destination.toLowerCase().includes(search) ||
        item.country.toLowerCase().includes(search)
    );

}


// ============================================
// FILTER BY DESTINATION
// ============================================

function filterPackages(destination) {

    if (!destination || destination === "All") {
        return getPackages();
    }

    return getPackages().filter(
        item => item.destination === destination
    );

}


// ============================================
// SORT PACKAGES
// ============================================

function sortPackages(packageList, sortBy) {

    const sortedList = [...packageList];

    if (sortBy === "price-low") {
        sortedList.sort((a, b) => a.price - b.price);
    }

    else if (sortBy === "price-high") {
        sortedList.sort((a, b) => b.price - a.price);
    }

    else if (sortBy === "rating") {
        sortedList.sort((a, b) => b.rating - a.rating);
    }

    else if (sortBy === "duration") {
        sortedList.sort((a, b) => a.duration - b.duration);
    }

    else if (sortBy === "name") {
        sortedList.sort((a, b) => a.name.localeCompare(b.name));
    }

    return sortedList;

}

