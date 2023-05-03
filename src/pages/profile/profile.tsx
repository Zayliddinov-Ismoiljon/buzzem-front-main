import React from 'react';
import Start1 from '../../images/star1.png'
import Start2 from '../../images/star2.png';
import Blogger from '../../images/blogger.png'
import Union from '../../images/Union.png'

const Profile: React.FC = (): JSX.Element => {
	return (
		<>
			<div className='container mx-auto'>
        <section className='py-8'>
        <span className='font-semibold text-base' style={{color:'#041674'}}>Home/Bloggers/Nozima Musaboyeva</span>
          <div className='flex justify-between items-center mt-8'>
          <div className='flex justify-between items-center' style={{width:'37%'}}>
            <img src={Blogger} alt="blogger image" style={{width:'200px', height:'200px', objectFit:'contain'}} />
            <div>
              <span style={{color:'#7B87B9'}}>Female | 29 years old</span>
              <h3 className='text-4xl font-semibold bookmark-title' style={{color:'#041674'}}>Musaboyeva Nozima</h3>
              <div>
                <span style={{color:'#7B87B9'}}>Uzbekistan | </span>
                <span style={{color:'#7B87B9'}}> Joined at: 12:29PM, 12.23.2021</span>
              </div>
              <div className='mt-4 flex justify-between items-center' style={{width:'55%'}}>
                <button className='border flex justify-between items-center border-gray-400 rounded-lg text-center text-black px-2 blog-lang_btn'>
                  <img src={Union} alt="icon" style={{width:'12px', height:'12px', marginRight:'5px' }} />
                  English
                  </button>
                <button className='border flex justify-between items-center border-gray-400 rounded-lg text-center text-black px-2 blog-lang_btn'>
                  <img src={Union} alt="icon" style={{width:'12px', height:'12px', marginRight:'5px' }} />
                  Russian
                  </button>
              </div>
            </div>
          </div>

          <div className=''>
            <div className='flex justify-between items-center'>
              <img src={Start1} alt="icon" />
              <img src={Start1} alt="icon" />
              <img src={Start1} alt="icon" />
              <img src={Start1} alt="icon" />
              <img src={Start2} alt="icon" />
              <span className='text-amber-400 font-bold text-2xl hexagon'>
                <span>4.5</span>
              </span>
            </div>
            <a href="#" className='underline' style={{color:'#041674'}}>405 people rated so far</a>
          </div>
          </div>
        </section>
      </div>
		</>
	);
};

export default Profile;
