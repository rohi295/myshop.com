<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maa Sharda Spices | Asli Swad</title>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Poppins:wght@300;400;500;600&display=swap"
        rel="stylesheet">

    <style>
        /* Embed CSS to ensure it loads correctly */
        :root {
            --bg-color: #FFF8E7;
            /* Richer Cream */
            --text-color: #2D1B0E;
            /* Dark Coffee Brown */
            --primary-color: #C43424;
            /* Royal Spice Red */
            --secondary-color: #FFB700;
            /* Turmeric */
            --accent-color: #C5A059;
            /* Muted Gold */
            --font-heading: 'Playfair Display', serif;
            --font-body: 'Poppins', sans-serif;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scroll-behavior: smooth;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: var(--font-body);
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* Navigation */
        .glass-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.2rem 5%;
            background: #fff;
            border-bottom: 4px solid var(--primary-color);
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        }

        .logo {
            font-family: var(--font-heading);
            font-size: 2.2rem;
            font-weight: 800;
            color: var(--primary-color);
            text-transform: uppercase;
            letter-spacing: -0.5px;
        }

        .highlight {
            color: var(--secondary-color);
        }

        .nav-links {
            display: flex;
            gap: 2.5rem;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--text-color);
            font-weight: 600;
            font-size: 1.1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: color 0.3s;
            position: relative;
        }

        .nav-links a:hover {
            color: var(--primary-color);
        }

        /* Hero Section */
        .hero {
            position: relative;
            height: 85vh;
            display: flex;
            align-items: center;
            padding: 0 5%;
            color: white;
            background-image: url('hero-bg.png');
            /* Ensure this file is present */
            background-size: cover;
            background-position: center;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 100%);
            z-index: 1;
        }

        .hero-content {
            position: relative;
            z-index: 2;
            max-width: 700px;
        }

        .badge {
            display: inline-block;
            background: var(--secondary-color);
            color: black;
            padding: 0.5rem 1rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 2rem;
            font-size: 0.9rem;
        }

        .hero h1 {
            font-family: var(--font-heading);
            font-size: 5rem;
            line-height: 1.1;
            margin-bottom: 1.5rem;
        }

        .hero p {
            font-size: 1.4rem;
            margin-bottom: 3rem;
            opacity: 0.9;
        }

        /* Products Section */
        .features {
            padding: 6rem 5%;
            text-align: center;
            background: #fff;
        }

        .features h2 {
            font-family: var(--font-heading);
            font-size: 3.5rem;
            color: var(--primary-color);
            margin-bottom: 4rem;
        }

        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 3rem;
            padding-bottom: 2rem;
        }

        .feature-card {
            background: white;
            border-radius: 8px;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
            border: 1px solid rgba(0, 0, 0, 0.05);
            display: flex;
            flex-direction: column;
        }

        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .product-image {
            width: 100%;
            height: 250px;
            overflow: hidden;
            background: #f0f0f0;
        }

        .product-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s;
        }

        .feature-card:hover .product-image img {
            transform: scale(1.1);
        }

        .product-info {
            padding: 2rem;
            text-align: left;
        }

        .feature-card h3 {
            font-family: var(--font-heading);
            font-size: 1.6rem;
            margin-bottom: 0.5rem;
            color: var(--text-color);
        }

        .feature-card p {
            color: #666;
            margin-bottom: 1rem;
            font-size: 0.95rem;
            line-height: 1.5;
            min-height: 3rem;
        }

        .price-tag {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid rgba(0, 0, 0, 0.05);
        }

        .price {
            font-family: var(--font-heading);
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary-color);
        }

        .weight {
            font-size: 0.9rem;
            color: #888;
            font-weight: 500;
        }

        .btn-add {
            padding: 0.5rem 1rem;
            background: var(--text-color);
            color: white;
            border: none;
            cursor: pointer;
            font-weight: 600;
            transition: background 0.3s;
        }

        .btn-add:hover {
            background: var(--primary-color);
        }

        /* Badge/Label Styles */
        .tag {
            position: absolute;
            top: 15px;
            right: 15px;
            background: var(--secondary-color);
            color: black;
            padding: 4px 12px;
            font-size: 0.8rem;
            font-weight: 700;
            border-radius: 20px;
            z-index: 10;
        }

        /* Footer */
        footer {
            background: #1a0f0a;
            color: #888;
            padding: 4rem 5%;
            text-align: center;
            border-top: 5px solid var(--accent-color);
        }

        .hindi-footer {
            font-family: 'Poppins', sans-serif;
            margin-top: 1rem;
            font-size: 1.2rem;
            color: var(--secondary-color);
        }

        /* Buttons */
        .btn-primary {
            padding: 1rem 2.5rem;
            background: var(--primary-color);
            color: white;
            border: none;
            font-weight: 700;
            cursor: pointer;
            font-family: var(--font-heading);
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .btn-secondary {
            padding: 1rem 2.5rem;
            background: transparent;
            color: white;
            border: 2px solid white;
            font-weight: 700;
            cursor: pointer;
            font-family: var(--font-heading);
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 3rem;
            }

            .nav-links {
                display: none;
            }
        }
    </style>
</head>

<body>
    <nav class="glass-nav">
        <div class="logo">Maa Sharda <span class="highlight">Spices</span></div>
        <div class="nav-links">
            <a href="#products">Hamare Masale</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </div>
        <button class="btn-primary" style="padding: 0.6rem 1.5rem; font-size: 0.9rem;">Order Now</button>
    </nav>

    <main>
        <section class="hero">
            <div class="hero-content">
                <div class="badge">EST. 2024</div>
                <h1>Experience <br><span style="color:var(--secondary-color)">Authentic India</span></h1>
                <p>From the fields to your kitchen, we bring you the finest, hand-picked spices for that perfect 'Ghar
                    ka Swad'.</p>
                <div class="cta-group">
                    <button class="btn-primary">View Products</button>
                    <button class="btn-secondary">Our Story</button>
                </div>
            </div>
        </section>

        <section id="products" class="features">
            <h2>Premium <span class="highlight">Collection</span></h2>
            <div class="feature-grid">

                <!-- 1. Red Chili -->
                <div class="feature-card">
                    <span class="tag">HOT</span>
                    <div class="product-image">
                        <img src="chili.png" alt="Red Chili Powder">
                    </div>
                    <div class="product-info">
                        <h3>Lal Mirch Powder</h3>
                        <p>Fiery red Guntur chili powder.</p>
                        <div class="price-tag">
                            <span class="price">₹85</span>
                            <span class="weight">200g</span>
                            <button class="btn-add">ADD</button>
                        </div>
                    </div>
                </div>

                <!-- 2. Turmeric -->
                <div class="feature-card">
                    <div class="product-image">
                        <img src="turmeric.png" alt="Turmeric Powder">
                    </div>
                    <div class="product-info">
                        <h3>Haldi Powder</h3>
                        <p>Pure, golden turmeric with high curcumin.</p>
                        <div class="price-tag">
                            <span class="price">₹65</span>
                            <span class="weight">200g</span>
                            <button class="btn-add">ADD</button>
                        </div>
                    </div>
                </div>

                <!-- 3. Coriander -->
                <div class="feature-card">
                    <div class="product-image">
                        <img src="coriander.png" alt="Coriander Powder">
                    </div>
                    <div class="product-info">
                        <h3>Dhaniya Powder</h3>
                        <p>Aromatic roasted coriander powder.</p>
                        <div class="price-tag">
                            <span class="price">₹55</span>
                            <span class="weight">200g</span>
                            <button class="btn-add">ADD</button>
                        </div>
                    </div>
                </div>

                <!-- 4. Cumin -->
                <div class="feature-card">
                    <div class="product-image">
                        <img src="cumin.png" alt="Cumin Seeds">
                    </div>
                    <div class="product-info">
                        <h3>Royal Jeera</h3>
                        <p>Premium quality whole cumin seeds.</p>
                        <div class="price-tag">
                            <span class="price">₹120</span>
                            <span class="weight">100g</span>
                            <button class="btn-add">ADD</button>
                        </div>
                    </div>
                </div>

                <!-- 5. Whole Spices Mix -->
                <div class="feature-card">
                    <span class="tag">PREMIUM</span>
                    <div class="product-image">
                        <img src="whole_spices.png" alt="Whole Spices">
                    </div>
                    <div class="product-info">
                        <h3>Khada Masala</h3>
                        <p>Essential whole spices for biryani.</p>
                        <div class="price-tag">
                            <span class="price">₹150</span>
                            <span class="weight">100g</span>
                            <button class="btn-add">ADD</button>
                        </div>
                    </div>
                </div>

                <!-- 6. Garam Masala (Hue Rotate) -->
                <div class="feature-card">
                    <div class="product-image">
                        <img src="whole_spices.png" style="filter: hue-rotate(15deg) contrast(1.2);" alt="Garam Masala">
                    </div>
                    <div class="product-info">
                        <h3>Shahi Garam Masala</h3>
                        <p>Secret blend of 15 roasted spices.</p>
                        <div class="price-tag">
                            <span class="price">₹140</span>
                            <span class="weight">100g</span>
                            <button class="btn-add">ADD</button>
                        </div>
                    </div>
                </div>

                <!-- 7. Black Pepper (Grayscale/Contrast Cumin) -->
                <div class="feature-card">
                    <div class="product-image">
                        <img src="cumin.png" style="filter: grayscale(100%) contrast(1.5) brightness(0.6);"
                            alt="Black Pepper">
                    </div>
                    <div class="product-info">
                        <h3>Kali Mirch</h3>
                        <p>Bold and spicy black peppercorns.</p>
                        <div class="price-tag">
                            <span class="price">₹180</span>
                            <span class="weight">100g</span>
                            <button class="btn-add">ADD</button>
                        </div>
                    </div>
                </div>

                <!-- 8. Cardamom (Green Hue Shift Cumin/Whole) -->
                <div class="feature-card">
                    <div class="product-image">
                        <img src="whole_spices.png" style="filter: hue-rotate(90deg) brightness(1.2);" alt="Cardamom">
                    </div>
                    <div class="product-info">
                        <h3>Green Elaichi</h3>
                        <p>Fragrant premium green cardamom.</p>
                        <div class="price-tag">
                            <span class="price">₹350</span>
                            <span class="weight">50g</span>
                            <button class="btn-add">ADD</button>
                        </div>
                    </div>
                </div>

                <!-- 9. Mustard Seeds (Dark Cumin) -->
                <div class="feature-card">
                    <div class="product-image">
                        <img src="cumin.png"
                            style="filter: sepia(100%) hue-rotate(50deg) saturate(500%) brightness(0.4);"
                            alt="Mustard Seeds">
                    </div>
                    <div class="product-info">
                        <h3>Rai / Sarson</h3>
                        <p>Fresh black mustard seeds.</p>
                        <div class="price-tag">
                            <span class="price">₹60</span>
                            <span class="weight">200g</span>
                            <button class="btn-add">ADD</button>
                        </div>
                    </div>
                </div>

                <!-- 10. Amchur (Light Coriander) -->
                <div class="feature-card">
                    <div class="product-image">
                        <img src="coriander.png" style="filter: brightness(1.2) contrast(0.9);" alt="Amchur">
                    </div>
                    <div class="product-info">
                        <h3>Amchur Powder</h3>
                        <p>Tangy dry mango powder.</p>
                        <div class="price-tag">
                            <span class="price">₹90</span>
                            <span class="weight">100g</span>
                            <button class="btn-add">ADD</button>
                        </div>
                    </div>
                </div>

                <!-- 11. Kashmiri Mirch (Brighter Red) -->
                <div class="feature-card">
                    <div class="product-image">
                        <img src="chili.png" style="filter: saturate(1.5) brightness(1.1);" alt="Kashmiri Mirch">
                    </div>
                    <div class="product-info">
                        <h3>Kashmiri Mirch</h3>
                        <p>Vibrant color, low heat. Perfect for tadka.</p>
                        <div class="price-tag">
                            <span class="price">₹110</span>
                            <span class="weight">100g</span>
                            <button class="btn-add">ADD</button>
                        </div>
                    </div>
                </div>

                <!-- 12. Cloves (Darkened Whole Spice) -->
                <div class="feature-card">
                    <div class="product-image">
                        <img src="whole_spices.png" style="filter: sepia(100%) hue-rotate(320deg) brightness(0.7);"
                            alt="Cloves">
                    </div>
                    <div class="product-info">
                        <h3>Laung (Cloves)</h3>
                        <p>Aromatic premium cloves.</p>
                        <div class="price-tag">
                            <span class="price">₹220</span>
                            <span class="weight">50g</span>
                            <button class="btn-add">ADD</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- CTA Section -->
        <section style="background:var(--primary-color); padding: 4rem 5%; text-align: center; color: white;">
            <h2 style="font-family: var(--font-heading); font-size: 2.5rem; margin-bottom: 1rem;">Bulk Orders for
                Weddings & Events?</h2>
            <p style="margin-bottom: 2rem; font-size: 1.2rem;">We supply fresh spices for bulk requirements at wholesale
                rates.</p>
            <button class="btn-secondary">Contact Us</button>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Maa Sharda Spices.</p>
        <p class="hindi-footer">माँ शारदा स्पाइसेस - शुद्धता का वादा</p>
    </footer>

    <script src="script.js"></script>
</body>

</html>
