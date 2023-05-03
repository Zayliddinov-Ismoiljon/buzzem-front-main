import React from 'react';
import { Link } from 'react-router-dom';
import FaceBook from '../../images/facebook.png';
import YouTube from '../../images/YouTube.png';
import Instagramm from '../../images/instagramm.png';
import Twitter from '../../images/twitter.png';

const Footer: React.FC = (): JSX.Element => {
	return (
		<>
			<footer style={{backgroundColor:'#F1F7FF', padding:'32px 0px'}}>
				<div className='container mx-auto'>
					<div className='flex justify-between items-center'>
						<span style={{color:' #7B87B9'}}>© Buzzem 2023.</span>
						<ul className='flex justify-between items-center p-0 m-0' style={{width:'23%'}}>
							<li>
								<Link className='capitalize font-bold' to='/' style={{color:'#041674'}}>home</Link>
							</li>
							<li>
								<Link className='capitalize font-bold' to='/' style={{color:'#041674'}}>about us</Link>
							</li>
							<li>
								<Link className='capitalize font-bold' to='/' style={{color:'#041674'}}>contact us</Link>
							</li>
							<li>
								<Link className='capitalize font-bold' to='/' style={{color:'#041674'}}>For partners</Link>
							</li>
						</ul>
						<div
							className='flex justify-between items-center'
							style={{ width: '10%' }}>
							<a href='https://facebook.com'>
								<img src={FaceBook} alt='facebook icon' />
							</a>
							<a href='https://twitter.com'>
								<img src={Twitter} alt='facebook icon' />
							</a>
							<a href='https://instagramm.com'>
								<img src={Instagramm} alt='facebook icon' />
							</a>
							<a href='https://youtube.com'>
								<img src={YouTube} alt='facebook icon' />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
