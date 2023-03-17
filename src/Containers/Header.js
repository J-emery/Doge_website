import doge from '../Assets/Original_Doge_meme.jpeg';

const Header = () => {
    return (
        <header>
            <h1>Doge Website</h1>
            <nav>
                <a href="">Home</a>
                <a href="https://shibe.online/">API</a>
            </nav>
            <img src={doge} alt="much sad if not load" id="header-image"></img>
        </header>
    )
}

export default Header;