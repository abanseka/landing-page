import marker from './images/marker.png'
import phone from './images/phone.png'

import Fb from './images/Fb.png'
import Tw from './images/Tw.png'
import In from './images/In.png'


const Footer = () => {
	return(
		<section className='footer'>

			<div className='footer-content'>

				<div className='column-content'>
				<div className='footer-menu'>
					<h3>Fingertipe</h3>
					<p>Home</p>
					<p>Product</p>
					<p>About</p>
					<p>Contact</p>
				</div>

				<div className='footer-menu'>
					<h3>Resources</h3>
					<p>Home</p>
					<p>Product</p>
					<p>About</p>
					<p>Contact</p>
				</div>

				<div className='footer-menu'>
					<h3>About</h3>
					<p>Home</p>
					<p>Product</p>
					<p>About</p>
					<p>Contact</p>
				</div>
				</div>


				<div className='content-row'>
					<div className='content-block'>
						<div className='content-heading'>
							<img   src = {marker} alt='place-marker icon' />
							<p>480 Mockingbird Hill undefined </p>
						</div>
					</div>

					<div className='content-block'>
						<div className='content-heading'>
							<img  className='phone-icon' src = {phone} alt='phone icon' />
							<p>(239) 555-0108 </p>
						</div>
					</div>

					<div className='content-block'>
						<div className='social-media-icons'>
							<img   src = {Tw} alt='Twitter icon' />
							<img   src = {Fb} alt='Facebook icon' />
							<img   src = {In} alt='LinkedIn icon' />						
						</div>
					</div>
				</div>
			</div>
			
		</section>
	)
}
export default Footer