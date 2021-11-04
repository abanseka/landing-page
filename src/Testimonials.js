import t1 from './images/testimonial images/t1.png'
import t2 from './images/testimonial images/t2.png'
import t3 from './images/testimonial images/t3.png'
import t4 from './images/testimonial images/t4.png'

const Testimonials = () => {
	return(
		<section className="testimonial">

			<div className = 'text-content'>
				<h1>Testimonials</h1>
			</div>
			<div>
				<div className="testimonial-cards">

					<div className='card'>

						<div className='profile'>
							<img  src = {t1} alt='man' />
							<div className='details'>
								<p>Claire Bell</p>
								<p>Designer</p>
							</div>
							
						</div>
						<p className='testimony'>
							Slate helps you see how many more days you
							need to work to reach your financial 
							goal for the month and year.Slate helps you see how many more days you
							need to work to reach your financial 
							goal for the month and year.
						</p>
					</div>

					<div className='card'>

						<div className='profile'>
							<img  src = {t2} alt='man' />
							<div className='details'>
								<p>Francisco Lane</p>
								<p>Designer</p>
							</div>
						</div>

						<p className='testimony'>
							Slate helps you see how many more days you
							need to work to reach your financial 
							goal for the month and year.Slate helps you see how many more days you
							need to work to reach your financial 
							goal for the month and year.
						</p>
					</div>

					<div className='card'>

						<div className='profile'>
							<img  src = {t3} alt='man' />
							<div className='details'>
								<p>Ralph Fisher</p>
								<p>Designer</p>
							</div>
						</div>
							
						<p className='testimony'>
							Slate helps you see how many more days you
							need to work to reach your financial 
							goal for the month and year.Slate helps you see how many more days you
							need to work to reach your financial 
							goal for the month and year.
						</p>
					</div>

					<div className='card'>

						<div className='profile'>
							<img  src = {t4} alt='man' />
							<div className='details'>
								<p>Jorge Murphy</p>
								<p>Designer</p>
							</div>
						</div>

						<p className='testimony'>
							Slate helps you see how many more days you
							need to work to reach your financial 
							goal for the month and year.Slate helps you see how many more days you
							need to work to reach your financial 
							goal for the month and year.
						</p>
					</div>
					</div>

			</div>
		</section>
	)
}

export default Testimonials;