import linkedin from '../Assets/linkedin-logo.png'

const Footer = () => {

    return (
        <footer>
            <p>{/*Remember to KISS*/}</p>
            <nav>
                <a href="index.html">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="https://linkedin.com/in/j-emery"><img className="social-logo" src={linkedin} alt="Linked-In"></img></a>
            </nav>
        </footer>
    )
}

export default Footer