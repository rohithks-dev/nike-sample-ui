const Content = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                Step into comfort, style, and performance with every move. 
                Designed for athletes, crafted for everyone, built to go the distance. 
                Because every step matters—give your feet the quality they deserve.. 
                </p>
                <div className="hero-button">
                    <button>SHOP NOW</button>
                    <button className="secondary-button">CATEGORY</button>
                </div>
                <div className="hero-social">
                    <p>Also Available on</p>
                    <div className="social-icons">
                        <img src = "/images/amazon.png" alt = "Amazon" />
                        <img src = "/images/flipkart.png" alt = "Flipkart" />
                    </div>
                </div>
            </div>  
            <div className="hero-image">
                <img src = "/images/shoe_image.png" alt = "Shoe" />
             </div>
        </main>
    );
};

export default Content;