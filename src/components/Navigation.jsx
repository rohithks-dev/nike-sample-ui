const Navigation = () => {
    return (
        <nav className="container">
        <div className="logo">
          <img src = "/images/nike_brand_logo.png" alt = "Nike Logo" />
        </div>

        <ul>
          <li >MENU</li>
          <li href = '#'>LOCATION</li>
          <li href = '#'>ABOUT</li>
          <li href = '#'>CONTACT</li>
        </ul>

        <button>LOGIN</button>
      </nav>
    );
};

export default Navigation;