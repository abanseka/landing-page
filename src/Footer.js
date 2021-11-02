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
					<h4>Fingertipe</h4>
					<p>Home</p>
					<p>Product</p>
					<p>About</p>
					<p>Contact</p>
				</div>

				<div className='footer-menu'>
					<h4>Resources</h4>
					<p>Home</p>
					<p>Product</p>
					<p>About</p>
					<p>Contact</p>
				</div>

				<div className='footer-menu'>
					<h4>About</h4>
					<p>Home</p>
					<p>Product</p>
					<p>About</p>
					<p>Contact</p>
				</div>
				</div>


				<div className='row-content'>
					<p>
					<img   src = {marker} alt='place-marker icon' />
					<p>7480 Mockingbird Hill undefined </p>
					</p>

					<p>
					<img   src = {phone} alt='phone icon' />
					<p> (239) 555-0108 </p>
					</p>
					<div className='social-media-icons'>
					<img   src = {Tw} alt='Twitter icon' />
					<img   src = {Fb} alt='Facebook icon' />
					<img   src = {In} alt='LinkedIn icon' />						
					</div>
				</div>
			</div>
			
		</section>
	)
}
export default Footer