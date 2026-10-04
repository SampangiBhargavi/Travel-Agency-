
// ======================================
// WanderWorld - Blog Management
// ======================================

const defaultBlogs = [
    {
        id: 1,
        title: "10 Best Places to Visit in India",
        category: "Travel Guide",
        author: "WanderWorld Team",
        date: "2026-08-10",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
        excerpt: "Discover some of the most beautiful destinations in India for your next holiday.",
        content: "India offers a wonderful combination of mountains, beaches, historical places and natural beauty. From Goa and Kerala to Manali and Rajasthan, there are many destinations waiting to be explored.",
        status: "Published"
    },
    {
        id: 2,
        title: "Best Time to Visit Goa",
        category: "Travel Tips",
        author: "WanderWorld Team",
        date: "2026-08-18",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
        excerpt: "Planning a Goa trip? Find out the best season, places and activities.",
        content: "Goa is one of India's most popular beach destinations. The best time to visit is generally during the cooler months when you can enjoy beaches, sightseeing and water activities.",
        status: "Published"
    },
    {
        id: 3,
        title: "Dubai Travel Guide for First-Time Visitors",
        category: "Travel Guide",
        author: "WanderWorld Team",
        date: "2026-08-25",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
        excerpt: "Everything you need to know before planning your first Dubai holiday.",
        content: "Dubai is famous for its modern architecture, shopping malls, desert experiences and luxury lifestyle. Plan your itinerary in advance to experience the best attractions.",
        status: "Published"
    },
    {
        id: 4,
        title: "Things to Do in Manali",
        category: "Adventure",
        author: "WanderWorld Team",
        date: "2026-09-02",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
        excerpt: "Explore exciting activities and beautiful places in the mountains of Manali.",
        content: "Manali is perfect for adventure lovers. Visitors can enjoy trekking, sightseeing, river rafting, snow activities and peaceful mountain views.",
        status: "Published"
    },
    {
        id: 5,
        title: "How to Plan a Budget-Friendly Trip",
        category: "Travel Tips",
        author: "WanderWorld Team",
        date: "2026-09-10",
        image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=900&q=80",
        excerpt: "Simple tips to enjoy an amazing holiday without spending too much.",
        content: "A good travel budget starts with early planning. Compare packages, choose affordable accommodation, travel during off-season periods and plan your activities wisely.",
        status: "Published"
    },
    {
        id: 6,
        title: "Beautiful Beaches Around the World",
        category: "Destinations",
        author: "WanderWorld Team",
        date: "2026-09-15",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
        excerpt: "Discover some of the world's most beautiful beaches.",
        content: "From Bali and Goa to tropical destinations across the world, beaches offer the perfect combination of relaxation, adventure and unforgettable views.",
        status: "Published"
    }
];


// Get blogs
function getBlogs() {

    const storedBlogs =
        localStorage.getItem("wanderWorldBlogs");

    if (storedBlogs) {
        return JSON.parse(storedBlogs);
    }

    localStorage.setItem(
        "wanderWorldBlogs",
        JSON.stringify(defaultBlogs)
    );

    return defaultBlogs;
}


// Save blogs
function saveBlogs(blogs) {

    localStorage.setItem(
        "wanderWorldBlogs",
        JSON.stringify(blogs)
    );

}


// Get blog by ID
function getBlogById(id) {

    const blogs = getBlogs();

    return blogs.find(function (blog) {
        return Number(blog.id) === Number(id);
    });

}


// Add blog
function addBlog(blog) {

    const blogs = getBlogs();

    const newId =
        blogs.length > 0
            ? Math.max(
                ...blogs.map(
                    blog => Number(blog.id)
                )
              ) + 1
            : 1;

    blog.id = newId;

    blogs.push(blog);

    saveBlogs(blogs);

    return blog;

}


// Update blog
function updateBlog(updatedBlog) {

    const blogs = getBlogs();

    const index =
        blogs.findIndex(function (blog) {

            return Number(blog.id)
                === Number(updatedBlog.id);

        });


    if (index !== -1) {

        blogs[index] = updatedBlog;

        saveBlogs(blogs);

        return true;

    }

    return false;

}


// Delete blog
function deleteBlog(id) {

    const blogs = getBlogs();

    const updatedBlogs =
        blogs.filter(function (blog) {

            return Number(blog.id)
                !== Number(id);

        });


    saveBlogs(updatedBlogs);

    return true;

}


// Search blogs
function searchBlogs(searchText) {

    const blogs = getBlogs();

    const value =
        searchText.toLowerCase().trim();


    if (!value) {
        return blogs;
    }


    return blogs.filter(function (blog) {

        return (
            blog.title
                .toLowerCase()
                .includes(value) ||

            blog.category
                .toLowerCase()
                .includes(value) ||

            blog.excerpt
                .toLowerCase()
                .includes(value)
        );

    });

}


// Filter blogs
function filterBlogs(category) {

    const blogs = getBlogs();

    if (!category || category === "All") {
        return blogs;
    }


    return blogs.filter(function (blog) {

        return blog.category === category;

    });

}

