import featureImage1 from './images/feature images/featureImage1.png'
import featureImage2 from './images/feature images/featureImage2.png'

const Features = () => {
	return(
		<section className='features'>
			<div className= "text-content" >
				<h2>FEATURES</h2>
				<p>
					Most calendars are designed for teams. 
					Slate is designed for freelancers who want 
					a simple way to plan their schedule
				</p>
			</div>
			<div className='features-content-frame'>
				<img   src = {featureImage1} alt='Chatbot'/>
				<img   src = {featureImage2} alt='Line Chart'/>

				<div className="content-row">
					<div>
						<h3>A single source of truth</h3>
						<p>When you add work to your 
							Slate calendar we automatically 
							calculate useful insights 
						</p>
					</div>

					<div>
						<h3>Intuitive interface</h3>
						<p>When you add work to your 
							Slate calendar we automatically 
							calculate useful insights 
						</p>
					</div>

					<div>
						<h3>Or with rules</h3>
						<p>When you add work to your 
							Slate calendar we automatically 
							calculate useful insights 
						</p>
					</div>

					</div>
				</div>
		</section>
	)
}	
export default Features;