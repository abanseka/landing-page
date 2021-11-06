import './Cta.css'
import cta from '../../images/cta.png'


const Cta = () => {
	return(
		<section className='cta component-container'>

			<div className='cta-content'>

				<div className='text'>
					<h1 className='section-heading'>	
							OpenType feature<br/>
							and Variable fonts	
					</h1>
					<button className='btn'>Try For Free</button>
				</div>

				<div className='media'>
					<img  src = {cta} alt='screenshot' />
				</div>

			</div>
		</section>
	)
}

export default Cta;