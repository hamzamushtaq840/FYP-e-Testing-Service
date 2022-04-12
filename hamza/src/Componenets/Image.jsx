import pic from '../Icons/logo.svg';

function Image()

{
    return(
      <div className='navBar'>
          <ul className='navBarul'>
             <li className='navbarImg'><img src={pic} width='140px'/></li>
             <li className='listItem'>Hamza Mushtaq</li>
             <li className='listItem'>Logout</li>
          </ul>
      </div>
    )

}

export default Image
