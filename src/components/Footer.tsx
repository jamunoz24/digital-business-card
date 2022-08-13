import TwitterIcon from '../assets/Twitter Icon.png';
import FacebookIcon from '../assets/Facebook Icon.png';
import InstaIcon from '../assets/Instagram Icon.png';
import GithubIcon from '../assets/GitHub Icon.png';

function Footer() {
    return (
        <div className='footer'>
            <button>
                <img src={TwitterIcon} />
            </button>
            <button>
                <img src={FacebookIcon} />
            </button>
            <button>
                <img src={InstaIcon} />
            </button>
            <button>
                <img src={GithubIcon} />
            </button>
        </div>
    );
}

export default Footer;
