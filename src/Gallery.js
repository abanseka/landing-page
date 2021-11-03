import gimg1 from './images/gallery Images/gimg1.png'
import gimg2 from './images/gallery Images/gimg2.png'
import gimg3 from './images/gallery Images/gimg3.png'
import gimg4 from './images/gallery Images/gimg4.png'
import gimg5 from './images/gallery Images/gimg5.png'
import gimg6 from './images/gallery Images/gimg6.png'
import gimg7 from './images/gallery Images/gimg7.png'


const Gallery = () => {
	return(
		<section className="gallery">

			<div className= "text-content" >

				<h1>Gallery</h1>

				<p>
					We focus on ergonomics and meeting you 
					where you work<br/> It's only a keystroke away.
				</p>

			</div>

			<div className='gallery-cards'>

				<div className='gallery-cards-1'>
					<img   src = {gimg1} alt='drone'/>
					<img   src = {gimg2} alt='ipad'/>
					<img   src = {gimg3} alt='2 women'/>
					<img   src = {gimg4} alt='Apple screen'/>
				</div>

				<div className='gallery-cards-2'>
					<img   src = {gimg5} alt='code'/>
					<img   src = {gimg6} alt='person typing'/>
					<img   src = {gimg7} alt='Camera'/>
				</div>
				
			</div>

			<button >See More</button>
		</section>
	)
}

export default Gallery