import featureImage1 from './images/feature images/featureImage1.png'
import featureImage2 from './images/feature images/featureImage2.png'
import featureicon1 from './images/feature images/featureIcon1.png'
import featureicon2 from './images/feature images/featureIcon2.png'
import featureicon3 from './images/feature images/featureIcon3.png'

const Features = () => {
	return(
		<section className='features'>
			<div className= "text-content" >
				<h1>Features</h1>
				<p>
					Most calendars are designed for teams. 
					Slate is designed for<br /> freelancers who want 
					a simple way to plan their schedule.
				</p>
			</div>
			<div className='features-content-frame'>
				<div className='featImg-container'>
					<img className ='featImg1'	src = {featureImage1} alt='Chatbot'/>
					<img className='featImg2' src = {featureImage2} alt='Line Chart'/>
				</div>

				<div className="content-row">
					<div className='content-block'>
					<div className='content-heading'>
						<img src = {featureicon1} alt='cutlery icon' />
						<h3>A single source<br/> of truth</h3>
					</div>
						<p>
							When you add work to your<br/>
							Slate calendar we automatically<br/>
							calculate useful insights 
						</p>
					</div>

					<div className='content-block'>
						<div className='content-heading'>
							<img src = {featureicon2} alt='alien icon' />
							<h3>Intuitive<br/> interface</h3>
						</div>
						<p>
							When you add work to your<br/>
							Slate calendar we automatically<br/>
							calculate useful insights 
						</p>
					</div>

					<div className='content-block'>
					<div className='content-heading'>
						<img src = {featureicon3} alt='infinity icon' />
						<h3>Or with rules</h3>
					</div>
						<p>
							When you add work to your<br/>
							Slate calendar we automatically<br/>
							calculate useful insights 
						</p>
					</div>

					</div>
				</div>
		</section>
	)
}	
export default Features;