import contentImage1 from './images/content images/contentImage1.png'
import contentImage2 from './images/content images/contentImage2.png'


const Contents = () => {
	return (
		<section className=" contents">

			<div className = 'text-content'>
				<h1>Contents</h1>
				<p>
					We focus on ergonomics and meeting you where you work.<br/>
					It's only a keystroke away.
				</p>
			</div>

			<div className="cards">
				<div className='work-card card'>
					<div className='card-heading'>
						<h4>Work</h4>
						<p>
							Ever wondered if you're too reliant
							on a client for work? Slate helps 
							you identify .
						</p>
					</div>
					<button >Sign Up</button>
					<img   src = {contentImage1} alt='Screen Mask'/>
				</div>

				<div className='design-card card'>
					<div className='card-heading'>
						<h4>Design with real data</h4>
						<p>
						Ever wondered if you're too reliant 
						on a client for work? Slate helps 
						you identify .
						</p>
					</div>
					<button >Try For Free</button>
					<img   src = {contentImage2} alt='Boards Notifications'/>
				</div>

			</div>
		</section>
	)
}

export default Contents