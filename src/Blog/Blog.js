import React, { useState } from 'react';
import Window from "../Window";
import BlogPost from "./BlogPost";

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    const blogPosts = [
        {
            id: 1,
            title: "The Cemetery of Programming Languages",
            preview: "Unearth forgotten and abandoned programming languages that once promised to revolutionize the industry.",
            link: "/blog/1"
        },
        {
            id: 2,
            title: "The Quantum Computing Revolution",
            preview: "Dive into the mind-bending world of quantum computing where bits exist in multiple states simultaneously.",
            link: "/blog/2"
        },
        {
            id: 3,
            title: "Hacking the Human Brain: Neural Interfaces",
            preview: "Discover cutting-edge technologies bridging the gap between man and machine.",
            link: "/blog/3"
        },
        {
            id: 4,
            title: "The Rise of Cybernetic Organisms: Cyborgs Among Us",
            preview: "Explore the fascinating world of cyborgs and the blurring lines between man and machine.",
            link: "/blog/4"
        },
        {
            id: 5,
            title: "The Dark Side of Artificial Intelligence",
            preview: "Delve into the ethical dilemmas and existential threats posed by AI integration.",
            link: "/blog/5"
        },
        {
            id: 6,
            title: "The Code of Life: DNA Computing",
            preview: "Embark on a journey into the world of DNA computing and its computational possibilities.",
            link: "/blog/6"
        },
        {
            id: 7,
            title: "Crypto Craze: The Wild World of Blockchain",
            preview: "Step into the chaotic world of blockchain technology and decentralized finance.",
            link: "/blog/7"
        },
        {
            id: 8,
            title: "The Singularity: Humanity's Event Horizon",
            preview: "Contemplate the concept of the technological singularity and its implications for humanity.",
            link: "/blog/8"
        },
        {
            id: 9,
            title: "Parallel Universes: The Multiverse of Quantum Computing",
            preview: "Journey into the mind-bending realm of parallel universes and quantum superposition.",
            link: "/blog/9"
        },
        {
            id: 10,
            title: "The Metaverse: Beyond Virtual Reality",
            preview: "Venture beyond virtual reality into the transformative potential of the metaverse.",
            link: "/blog/10"
        },
    ];

    const [selectedPostId, setSelectedPostId] = useState(null);

    const handleReadMore = (postId) => {
        setSelectedPostId(postId);
    };

    const handleGoBack = () => {
        setSelectedPost(null);
    };

    return (
        <div className="blog-container">
            <h1>Welcome to My Retro Blog!</h1>
            {selectedPostId ? (
                <BlogPost postId={selectedPostId} goBack={() => setSelectedPostId(null)} />
            ) : (
                blogPosts.map(post => (
                    <div className="blog-post-preview" key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.preview}</p>
                        <button onClick={() => handleReadMore(post.id)}>Read more</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Blog;
