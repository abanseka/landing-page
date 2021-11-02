import contentImage1 from './images/content images/contentImage1.png'
import contentImage2 from './images/content images/contentImage2.png'


const Contents = () => {
	return (
		<section className=" contents">

			<div className = 'text-content'>
				<h1>Contents</h1>
				<p>
					We focus on ergonomics and meeting you where you work. 
					It's only a keystroke away.
				</p>
			</div>

			<div className="cards">
				<div className='work-card'>
					<h4>Work</h4>
					<p>
					Ever wondered if you're too reliant 
					on a client for work? Slate helps 
					you identify .
					</p>
					<button >Sign Up</button><br/>
					<img   src = {contentImage1} alt='Screen Mask'/>
				</div>

				<div className='design-card'>
				<h4>Design with real data</h4>
					<p>
					Ever wondered if you're too reliant 
					on a client for work? Slate helps 
					you identify .
					</p>
					<button >Try For Free</button><br/>
					<img   src = {contentImage2} alt='Boards Notifications'/>
				</div>

			</div>
		</section>
	)
}

export default Contents