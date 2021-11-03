import logo from './images/Logo.png'
// import screenImage1 from './images/header images/screenImage1.png'
// import screenImage2 from './images/header images/screenImage2.png'
// import screenImage3 from './images/header images/screenImage3.png'

import imageplaceholder from './images/imgPlaceholder.jpg'

const Header = () => {
  return (
    <section className ="header">
			<nav>
				<div id='logo'>
					<img src = {logo} alt='text:figma land' />
				</div>

				<div className='header-menu'>
					<p>Home</p>
					<p>Product</p>
					<p>About</p>
					<p>Contact</p>
				</div>

				<button className='login-btn'>Login</button>
			</nav>

			<div className='text-content'>
				<h1>Work at the speed<br/> of thought</h1>
				<p>
					 Most calendars are designed for teams. 
					 Slate is designed for<br/> freelancers who want
					 a simple way to plan their schedule.
				</p>
			</div>
			<div className='header'>
				<button id='header-free-btn'>Try For Free</button>
				<button id='header-learn-btn'>Learn More</button>
			</div>
			<div className='screen'>
				<div className ='screen1'>
					<img src={imageplaceholder} alt=''/>
				</div>
				<div className ='screen2'>
					<img src={imageplaceholder} alt=''/>
				</div>
				<div className ='screen3'>
					<img src={imageplaceholder} alt=''/>
				</div>
				
				{/* <img   src = {screenImage2} alt='chatbot'/>
				<img   src = {screenImage3} alt='boards'/> */}
				
			</div>
			<div className='dark-fade-gradient'></div>
		</section>
  );
}

export default Header;

