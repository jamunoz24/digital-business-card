import pic from '../assets/portrait.png'

function Profile() {
    return (
        <div className='profile'>
            <img src={pic} className="profile--portrait" />
            <p className='profile--name'>Jorge Munoz</p>
            <p className="profile--occupation">Fullstack Developer</p>
            <p className="website">www.github.com/jamunoz</p>
            <button className="profile--email">Email</button>
            <button className="profile--linkedin">LinkedIn</button>
        </div>
    )
}

export default Profile