import TwitterIcon from '../assets/Twitter Icon.png';
import FacebookIcon from '../assets/Facebook Icon.png';
import InstaIcon from '../assets/Instagram Icon.png';
import GithubIcon from '../assets/GitHub Icon.png';

function Footer() {
    return (
        <div className='footer'>
            <button>
                <img src={TwitterIcon} alt='Twitter Icon' />
            </button>
            <button>
                <img src={FacebookIcon} alt='Facebook Icon' />
            </button>
            <button>
                <img src={InstaIcon} alt='Instagram Icon' />
            </button>
            <a href='https://www.github.com/jamunoz24' target='_blank' rel='noreferrer'>
                <button>
                    <img src={GithubIcon} alt='GitHub Icon' />
                </button>
            </a>
        </div>
    );
}

export default Footer;
