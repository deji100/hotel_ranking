import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="inner-container">
                <Link to="/" className="home">
                    <h3>Hotel Ranking</h3>
                </Link>

                <Link to="/create-hotel" className="create">
                    <span className="material-symbols-outlined add">add</span>
                    <button>Create Hotel</button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;