import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <div className="project-list">
                {/* Project: Sierpinsky */}
                <div className="project">
                    <h3>Sierpinsky</h3>
                    <p>
                        Sierpinsky project is a C implementation of the Sierpinski triangle generation algorithm. It demonstrates fractal generation using recursion and basic graphics output.
                    </p>
                    <a href="https://github.com/tunashred/jucarioare-in-C/tree/main/sierpinsky">GitHub Repository</a>
                </div>
                {/* Project: Mandelbrot */}
                <div className="project">
                    <h3>Mandelbrot</h3>
                    <p>
                        Mandelbrot project is a C program for generating the Mandelbrot set. It utilizes complex number arithmetic and iterative calculations to visualize the Mandelbrot fractal.
                    </p>
                    <a href="https://github.com/tunashred/jucarioare-in-C/tree/main/mandelbrot">GitHub Repository</a>
                </div>
                {/* Project: Directory Content Copier */}
                <div className="project">
                    <h3>Directory Content Copier</h3>
                    <p>
                        Directory Content Copier is a C program for recursively copying the contents of one directory to another. It demonstrates file system traversal and manipulation in C.
                    </p>
                    <a href="https://github.com/tunashred/jucarioare-in-C/tree/main/directory_content_copier">GitHub Repository</a>
                </div>
                {/* Project: Data Structures (excluding hashtable-fancy) */}
                <div className="project">
                    <h3>Data Structures</h3>
                    <p>
                        Data Structures project is a collection of various data structure implementations in C, including linked lists, stacks, queues, and trees. It serves as a foundational resource for learning and practicing data structures concepts.
                    </p>
                    <a href="https://github.com/tunashred/data-structures">GitHub Repository</a>
                </div>
                {/* Project: Hashtable Fancy */}
                <div className="project">
                    <h3>Hashtable Fancy</h3>
                    <p>
                        Hashtable Fancy is a C library for implementing hash tables with advanced features such as dynamic resizing, collision handling, and customizable hash functions. It provides efficient data storage and retrieval capabilities.
                    </p>
                    <a href="https://github.com/tunashred/data-structures/tree/master/hashtable-fancy">GitHub Repository</a>
                </div>
                {/* Project: Makefile Template */}
                <div className="project">
                    <h3>Makefile Template</h3>
                    <p>
                        Makefile Template is a generic Makefile template for compiling C projects. It simplifies the build process by automating compilation and linking tasks based on project structure and dependencies.
                    </p>
                    <a href="https://github.com/tunashred/makefile-template">GitHub Repository</a>
                </div>
                {/* Project: Supervised Learning */}
                <div className="project">
                    <h3>Supervised Learning</h3>
                    <p>
                        Supervised Learning project is a collection of machine learning algorithms implemented in Python. It includes algorithms for regression, classification, and ensemble learning, providing a comprehensive toolkit for supervised learning tasks.
                    </p>
                    <a href="https://github.com/tunashred/supervised-learning">GitHub Repository</a>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
