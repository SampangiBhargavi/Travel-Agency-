
const galleryImages = [
    {
        id: "gallery-1",
        title: "Goa Beach",
        category: "Beach",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: "gallery-2",
        title: "Manali Mountains",
        category: "Mountain",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: "gallery-3",
        title: "Kerala Backwaters",
        category: "Nature",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: "gallery-4",
        title: "Dubai Skyline",
        category: "International",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: "gallery-5",
        title: "Bali Beach",
        category: "Beach",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: "gallery-6",
        title: "Paris",
        category: "International",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: "gallery-7",
        title: "Mountain Adventure",
        category: "Mountain",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: "gallery-8",
        title: "Tropical Paradise",
        category: "Beach",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
    }
];


function getGalleryImages() {

    const stored =
        localStorage.getItem("wanderWorldGallery");

    if (stored) {
        return JSON.parse(stored);
    }

    localStorage.setItem(
        "wanderWorldGallery",
        JSON.stringify(galleryImages)
    );

    return galleryImages;
}


function saveGalleryImages(images) {

    localStorage.setItem(
        "wanderWorldGallery",
        JSON.stringify(images)
    );
}


function getGalleryImageById(id) {

    return getGalleryImages().find(
        image => String(image.id) === String(id)
    );
}


function addGalleryImage(image) {

    const images = getGalleryImages();

    images.push(image);

    saveGalleryImages(images);
}


function updateGalleryImage(updatedImage) {

    const images = getGalleryImages();

    const index = images.findIndex(
        image => String(image.id) === String(updatedImage.id)
    );

    if (index !== -1) {

        images[index] = updatedImage;

        saveGalleryImages(images);
    }
}


function deleteGalleryImage(id) {

    const images = getGalleryImages().filter(
        image => String(image.id) !== String(id)
    );

    saveGalleryImages(images);
}


function filterGalleryImages(category) {

    if (category === "All") {
        return getGalleryImages();
    }

    return getGalleryImages().filter(
        image => image.category === category
    );
}
