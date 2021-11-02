import cta from './images/cta.png'


const Cta = () => {
	return(
		<section className='cta'>

			<div className='cta-content'>

				<div className='text'>
					<h1>	
							OpenType features 
							and Variable fonts	
					</h1>
					<button>Try For Free</button>
				</div>

				<div className='media'>
					<img  src = {cta} alt='screenshot' />
				</div>

			</div>
		</section>
	)
}

export default Cta;