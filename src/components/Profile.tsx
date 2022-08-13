import pic from '../assets/portrait.png';
import EmailIcon from '../assets/Email Icon.png';
import LinkedInIcon from '../assets/LinkedIn Icon.png';

function Profile() {
    return (
        <div className='profile'>
            <img
                src={pic}
                className='profile--portrait'
                alt='Profile Picture'
            />
            <p className='profile--name'>Jorge Munoz</p>
            <p className='profile--occupation'>Fullstack Developer</p>
            <a href='https://www.github.com/jamunoz24' target='_blank'>
                <p className='website'>www.github.com/jamunoz</p>
            </a>
            <button className='profile--email'>
                <img src={EmailIcon} alt='Email Icon' />
                Email
            </button>
            <button className='profile--linkedin'>
                <img src={LinkedInIcon} alt='LinkedIn Icon' />
                LinkedIn
            </button>
        </div>
    );
}

export default Profile;
