
import './Problem1.css';


// Question.1 : create a profile component in reactJS.

const Problem1 = () => {


    return (
        <div className='card'>
            <div className='card-header'>
            </div>
            <div className='card-body'>
                <div className='profile-image'>
                    <img src='public/Profile.jpg' alt='profile' />
                </div>
                <div className='profile-content'>
                    <h4>John Doe</h4>
                    <span>Web Developer</span>
                </div>

                <hr />
                <div className='profile-details'>
                    {/* followers */}
                    <div className='profile-details-item'>
                        <p>98K</p>
                        <h5>Followers</h5>
                    </div>

                    {/* following */}
                    <div className='profile-details-item'>
                        <p>100K</p>
                        <h5>Likes</h5>
                    </div>

                    {/* pohotos */}
                    <div className='profile-details-item'>
                        <p>200K</p>
                        <h5>Photos</h5>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Problem1;