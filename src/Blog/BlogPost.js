import React from "react";

const BlogPost = ({postId, goBack}) => {

    const posts = [
        {
            id: 1,
            title: "The Cemetery of Programming Languages",
            content: "In the ever-evolving landscape of programming languages, there exist forgotten and abandoned tongues that once promised to revolutionize the industry but ultimately faded into obscurity. From the cryptic syntax of esoteric languages like Brainfuck to the ambitious aspirations of failed projects like Esperanto, exploring the graveyard of programming languages is a journey through the annals of computing history that will leave you astonished and amused. Join us as we unearth the relics of a bygone era and pay homage to the pioneers who dared to dream."
        },
        {
            id: 2,
            title: "The Quantum Computing Revolution",
            content: "Prepare to dive headfirst into the mind-bending world of quantum computing, where the laws of classical physics bow to the whims of quantum mechanics. In this realm of superposition and entanglement, bits can exist in multiple states simultaneously, and algorithms solve problems faster than ever thought possible. Discover how quantum computing is reshaping the landscape of computation, from cryptography and optimization to drug discovery and artificial intelligence. The quantum revolution is upon us—are you ready to ride the wave of innovation?"
        },
        {
            id: 3,
            title: "Hacking the Human Brain: Neural Interfaces",
            content: "Uncover the cutting-edge research and groundbreaking technologies that are bridging the gap between man and machine. From brain-computer interfaces that enable paralyzed individuals to control computers with their thoughts to neural implants that enhance cognitive abilities, the future of human augmentation is closer than you think."
        },
        {
            id: 4,
            title: "The Rise of Cybernetic Organisms: Cyborgs Among Us",
            content: "Explore the fascinating world of cyborgs—part human, part machine—and how advancements in prosthetics, implants, and genetic engineering are blurring the lines between man and machine. From bionic limbs that restore lost functionality to implants that enhance sensory perception, discover the brave new world of cybernetic organisms."
        },
        {
            id: 5,
            title: "The Dark Side of Artificial Intelligence",
            content: "Delve into the ethical dilemmas and existential threats posed by artificial intelligence as it becomes increasingly integrated into our lives. From algorithmic bias and job displacement to autonomous weapons and existential risks, this exploration of AI's dark side will challenge your perceptions and provoke thought."
        },
        {
            id: 6,
            title: "The Code of Life: DNA Computing",
            content: "Embark on a journey into the world of DNA computing, where the building blocks of life serve as the basis for computational processes. Discover how scientists are harnessing the power of DNA molecules to solve complex problems in fields such as cryptography, data storage, and molecular programming."
        },
        {
            id: 7,
            title: "Crypto Craze: The Wild World of Blockchain",
            content: "Step into the chaotic and exhilarating world of blockchain technology, where decentralized networks and cryptographic principles are revolutionizing finance, governance, and beyond. From Bitcoin's meteoric rise to the explosion of decentralized finance (DeFi), this exploration of the crypto craze will leave you both enlightened and bewildered."
        },
        {
            id: 8,
            title: "The Singularity: Humanity's Event Horizon",
            content: "Contemplate the concept of the technological singularity—the hypothetical point at which artificial intelligence surpasses human intelligence and irreversibly alters civilization. Explore the implications of such a momentous event, from transcendent possibilities to existential threats, and consider what it means for the fate of humanity."
        },
        {
            id: 9,
            title: "Parallel Universes: The Multiverse of Quantum Computing",
            content: "Journey into the mind-bending realm of parallel universes and quantum superposition, where quantum computers can explore multiple realities simultaneously. Explore the strange and surreal landscape of quantum computing, where the laws of classical physics break down and possibilities become infinite."
        },
        {
            id: 10,
            title: "The Metaverse: Beyond Virtual Reality",
            content: "Venture beyond the confines of virtual reality into the boundless expanse of the metaverse—a collective virtual space that encompasses all virtual worlds, augmented reality, and the internet itself. Explore the transformative potential of the metaverse and its implications for society, culture, and human experience."
        },
    ];

    const post = posts.find(post => post.id === postId);

    return (
        <div className="selected-post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={goBack}>Go back</button>
        </div>
    );
};

export default BlogPost;