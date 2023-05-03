import React from 'react';
import BloggersImage from '../../images/bloggers.png';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
import News from '../../images/news.png';
import Blogger from '../../images/blogger.png';
import Star1 from '../../images/star1.png';
import Star2 from '../../images/star2.png';
import Facebook from '../../images/facebook.png';
import Instagramm from '../../images/instagramm.png';
import Twitter from '../../images/twitter.png';
import Youtube from '../../images/YouTube.png';

const contentStyle: React.CSSProperties = {
	margin: 0,
	height: '160px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79',
};

const Main: React.FC = (): JSX.Element => {
	const onChange = (currentSlide: number) => {
		console.log(currentSlide);
	};
	return (
		<>
			<main>
				<section className='blogger'>
					<div className='container mx-auto'>
						<img
							src={BloggersImage}
							alt='bloggers image'
							className='pt-20 d-block mx-auto'
						/>
						<h1
							className='text-center text-4xl uppercase font-bold my-4'
							style={{ color: '#041674' }}>
							THE BEST WEBSITE ABOUT BLOGGERS
						</h1>
						<p
							className='text-center text-lg font-normal'
							style={{ color: '#041674CC' }}>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</p>
						<div style={{ width: '70%' }} className='d-block mx-auto'>
							<form
								action=''
								className='bg-white rounded-full p-8 py-6 flex justify-between items-center mt-16'
								style={{ boxShadow: '0px 0px 64px rgba(4, 22, 116, 0.17)' }}>
								<input
									type='text'
									style={{ width: '80%', border: 'none' }}
									placeholder='Search blogger ...'
									className='text-lg'
								/>
								<button className='rounded-full bg-amber-500 py-5 pr-8 pl-12 text-white text-base uppercase blogger-btn'>
									search
								</button>
							</form>
							<Link
								to='/filter-blogger'
								className='text-amber-400 uppercase text-base hover:opacity-50 text-end block mt-4'>
								ADVANCER SEARCH
							</Link>
						</div>
					</div>
				</section>

				<section className='mt-16'>
					<div className='container mx-auto'>
						<Carousel afterChange={onChange}>
							<div>
								<ul className='flex justify-between items-center flex-wrap'>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
								</ul>
							</div>
							<div>
								<ul className='flex justify-between items-center flex-wrap'>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
									<li
										className='mb-4 border border-gray-300 rounded-lg text-center justify-center py-4 hover:cursor-pointer hover:shadow-lg'
										style={{ width: '12%' }}>
										<img src={News} className='block mx-auto' alt='news icon' />
										<h3 className='mt-2'>News</h3>
									</li>
								</ul>
							</div>
						</Carousel>
					</div>
				</section>

				<section>
					<div className='container mx-auto'>
						<h2
							className='text-center font-medium mt-24 mb-8 text-4xl'
							style={{ color: '#041674' }}>
							TOP RATES
						</h2>
					</div>
				</section>

				<section>
					<div className='container mx-auto'>
						<ul className='m-0 p-0 flex flex-wrap items-center justify-between'>
							<li
								style={{
									width: '32%',
									border: '1px solid #E7F1FF',
									borderRadius: '10px',
								}}
								className='py-4 px-8 hover:cursor-pointer hover:shadow-2xl mb-8'>
								<div className='flex items-center justify-between'>
									<img src={Blogger} alt='blogger image' />
									<div style={{ width: '67%' }}>
										<div className='flex items-center justify-between'>
											<a
												href='#'
												className='border rounded-full py-1 px-3 hover:opacity-50'
												style={{
													border: '1px solid #DC3545',
													color: '#DC3545',
												}}>
												Daily life
											</a>
											<ul
												className='flex justify-between m-0 p-0 items-center'
												style={{ width: '45%' }}>
												<li>
													<img src={Star1} alt='image' />
												</li>
												<li>
													<img src={Star1} alt='image' />
												</li>
												<li>
													<img src={Star1} alt='image' />
												</li>
												<li>
													<img src={Star1} alt='image' />
												</li>
												<li>
													<img src={Star2} alt='image' />
												</li>
												<li>
													<span>4.7</span>
												</li>
											</ul>
										</div>
										<h3
											className='text-xl capitalize font-medium my-2'
											style={{ color: '#041674' }}>
											<Link to='/profile'>Nozima Musaboyeva</Link>
										</h3>
										<div
											className='flex justify-between items-center mb-4'
											style={{ width: '50%' }}>
											<a href='https://facebook.com'>
												<img src={Facebook} alt='facebook icon' />
											</a>
											<a href='https://twitter.com'>
												<img src={Twitter} alt='twitter icon' />
											</a>
											<a href='https://instagramm.com'>
												<img src={Instagramm} alt='instagramm icon' />
											</a>
											<a href='https://youtube.com'>
												<img src={Youtube} alt='you tube icon' />
											</a>
										</div>
										<div className='flex justify-between items-center'>
											<span
												style={{ color: '#041674' }}
												className='ml-7 country'>
												Uzbekistan
											</span>
											<div
												style={{ width: '20%' }}
												className='flex items-center justify-between lang-icon'>
												<span style={{ color: '#041674' }}>Eng</span>
												<span style={{ color: '#041674' }}>Ru</span>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li
								style={{
									width: '32%',
									border: '1px solid #E7F1FF',
									borderRadius: '10px',
								}}
								className='py-4 px-8 hover:cursor-pointer hover:shadow-2xl mb-8'>
								<div className='flex items-center justify-between'>
									<img src={Blogger} alt='blogger image' />
									<div style={{ width: '67%' }}>
										<div className='flex items-center justify-between'>
											<a
												href='#'
												className='border rounded-full py-1 px-3 hover:opacity-50'
												style={{
													border: '1px solid #DC3545',
													color: '#DC3545',
												}}>
												Daily life
											</a>
											<ul
												className='flex justify-between m-0 p-0 items-center'
												style={{ width: '45%' }}>
												<li>
													<img src={Star1} alt='image' />
												</li>
												<li>
													<img src={Star1} alt='image' />
												</li>
												<li>
													<img src={Star1} alt='image' />
												</li>
												<li>
													<img src={Star1} alt='image' />
												</li>
												<li>
													<img src={Star2} alt='image' />
												</li>
												<li>
													<span>4.7</span>
												</li>
											</ul>
										</div>
										<h3
											className='text-xl capitalize font-medium my-2'
											style={{ color: '#041674' }}>
											<Link to='/profile'>Nozima Musaboyeva</Link>
										</h3>
										<div
											className='flex justify-between items-center mb-4'
											style={{ width: '50%' }}>
											<a href='https://facebook.com'>
												<img src={Facebook} alt='facebook icon' />
											</a>
											<a href='https://twitter.com'>
												<img src={Twitter} alt='twitter icon' />
											</a>
											<a href='https://instagramm.com'>
												<img src={Instagramm} alt='instagramm icon' />
											</a>
											<a href='https://youtube.com'>
												<img src={Youtube} alt='you tube icon' />
											</a>
										</div>
										<div className='flex justify-between items-center'>
											<span
												style={{ color: '#041674' }}
												className='ml-7 country'>
												Uzbekistan
											</span>
											<div
												style={{ width: '20%' }}
												className='flex items-center justify-between lang-icon'>
												<span style={{ color: '#041674' }}>Eng</span>
												<span style={{ color: '#041674' }}>Ru</span>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li
								style={{
									width: '32%',
									border: '1px solid #E7F1FF',
									borderRadius: '10px',
								}}
								className='py-4 px-8 hover:cursor-pointer hover:shadow-2xl mb-8'>
								<div className='flex items-center justify-between'>
									<img src={Blogger} alt='blogger image' />
									<div style={{ width: '67%' }}>
										<div className='flex items-center justify-between'>
											<a
												href='#'
												className='border rounded-full py-1 px-3 hover:opacity-50'
												style={{
													border: '1px solid #DC3545',
													color: '#DC3545',
												}}>
												Daily life
											</a>
											<ul
												className='flex justify-between m-0 p-0 items-center'
												style={{ width: '45%' }}>
												<li>
													<img src={Star1} alt='image' />
												</li>
												<li>
													<img src={Star1} alt='image' />
												</li>
												<li>
													<img src={Star1} alt='image' />
												</li>
												<li>
													<img src={Star1} alt='image' />
												</li>
												<li>
													<img src={Star2} alt='image' />
												</li>
												<li>
													<span>4.7</span>
												</li>
											</ul>
										</div>
										<h3
											className='text-xl capitalize font-medium my-2'
											style={{ color: '#041674' }}>
											<Link to='/profile'>Nozima Musaboyeva</Link>
										</h3>
										<div
											className='flex justify-between items-center mb-4'
											style={{ width: '50%' }}>
											<a href='https://facebook.com'>
												<img src={Facebook} alt='facebook icon' />
											</a>
											<a href='https://twitter.com'>
												<img src={Twitter} alt='twitter icon' />
											</a>
											<a href='https://instagramm.com'>
												<img src={Instagramm} alt='instagramm icon' />
											</a>
											<a href='https://youtube.com'>
												<img src={Youtube} alt='you tube icon' />
											</a>
										</div>
										<div className='flex justify-between items-center'>
											<span
												style={{ color: '#041674' }}
												className='ml-7 country'>
												Uzbekistan
											</span>
											<div
												style={{ width: '20%' }}
												className='flex items-center justify-between lang-icon'>
												<span style={{ color: '#041674' }}>Eng</span>
												<span style={{ color: '#041674' }}>Ru</span>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li
								style={{
									width: '32%',
									border: '1px solid #E7F1FF',
									borderRadius: '10px',
								}}
								className='py-4 px-8 hover:cursor-pointer hover:shadow-2xl mb-8'>
								<div className='flex items-center justify-between'>
									<img src={Blogger} alt='blogger image' />
									<div style={{ width: '67%' }}>
										<div className='flex items-center justify-between'>
											<a
												href='#'
												className='border rounded-full py-1 px-3 hover:opacity-50'
												style={{
													border: '1px solid #DC3545',
													color: '#DC3545',
												}}>
												Daily life
											</a>
											<ul
												className='flex justify-between m-0 p-0 items-center'
												style={{ width: '45%' }}>
												<li>
													<img src={Star1} alt='image' />
												</li>
												<li>
													<img src={Star1} alt='image' />
												</li>
												<li>
													<img src={Star1} alt='image' />
												</li>
												<li>
													<img src={Star1} alt='image' />
												</li>
												<li>
													<img src={Star2} alt='image' />
												</li>
												<li>
													<span>4.7</span>
												</li>
											</ul>
										</div>
										<h3
											className='text-xl capitalize font-medium my-2'
											style={{ color: '#041674' }}>
											<Link to='/profile'>Nozima Musaboyeva</Link>
										</h3>
										<div
											className='flex justify-between items-center mb-4'
											style={{ width: '50%' }}>
											<a href='https://facebook.com'>
												<img src={Facebook} alt='facebook icon' />
											</a>
											<a href='https://twitter.com'>
												<img src={Twitter} alt='twitter icon' />
											</a>
											<a href='https://instagramm.com'>
												<img src={Instagramm} alt='instagramm icon' />
											</a>
											<a href='https://youtube.com'>
												<img src={Youtube} alt='you tube icon' />
											</a>
										</div>
										<div className='flex justify-between items-center'>
											<span
												style={{ color: '#041674' }}
												className='ml-7 country'>
												Uzbekistan
											</span>
											<div
												style={{ width: '20%' }}
												className='flex items-center justify-between lang-icon'>
												<span style={{ color: '#041674' }}>Eng</span>
												<span style={{ color: '#041674' }}>Ru</span>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li
								style={{
									width: '32%',
									border: '1px solid #E7F1FF',
									borderRadius: '10px',
								}}
								className='py-4 px-8 hover:cursor-pointer hover:shadow-2xl mb-8'>
								<div className='flex items-center justify-between'>
									<img src={Blogger} alt='blogger image' />
									<div style={{ width: '67%' }}>
										<div className='flex items-center justify-between'>
											<a
												href='#'
												className='border rounded-full py-1 px-3 hover:opacity-50'
												style={{
													border: '1px solid #DC3545',
													color: '#DC3545',
												}}>
												Daily life
											</a>
											<ul
												className='flex justify-between m-0 p-0 items-center'
												style={{ width: '45%' }}>
												<li>
													<img src={Star1} alt='image' />
												</li>
												<li>
													<img src={Star1} alt='image' />
												</li>
												<li>
													<img src={Star1} alt='image' />
												</li>
												<li>
													<img src={Star1} alt='image' />
												</li>
												<li>
													<img src={Star2} alt='image' />
												</li>
												<li>
													<span>4.7</span>
												</li>
											</ul>
										</div>
										<h3
											className='text-xl capitalize font-medium my-2'
											style={{ color: '#041674' }}>
											<Link to='/profile'>Nozima Musaboyeva</Link>
										</h3>
										<div
											className='flex justify-between items-center mb-4'
											style={{ width: '50%' }}>
											<a href='https://facebook.com'>
												<img src={Facebook} alt='facebook icon' />
											</a>
											<a href='https://twitter.com'>
												<img src={Twitter} alt='twitter icon' />
											</a>
											<a href='https://instagramm.com'>
												<img src={Instagramm} alt='instagramm icon' />
											</a>
											<a href='https://youtube.com'>
												<img src={Youtube} alt='you tube icon' />
											</a>
										</div>
										<div className='flex justify-between items-center'>
											<span
												style={{ color: '#041674' }}
												className='ml-7 country'>
												Uzbekistan
											</span>
											<div
												style={{ width: '20%' }}
												className='flex items-center justify-between lang-icon'>
												<span style={{ color: '#041674' }}>Eng</span>
												<span style={{ color: '#041674' }}>Ru</span>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li
								style={{
									width: '32%',
									border: '1px solid #E7F1FF',
									borderRadius: '10px',
								}}
								className='py-4 px-8 hover:cursor-pointer hover:shadow-2xl mb-8'>
								<div className='flex items-center justify-between'>
									<img src={Blogger} alt='blogger image' />
									<div style={{ width: '67%' }}>
										<div className='flex items-center justify-between'>
											<a
												href='#'
												className='border rounded-full py-1 px-3 hover:opacity-50'
												style={{
													border: '1px solid #DC3545',
													color: '#DC3545',
												}}>
												Daily life
											</a>
											<ul
												className='flex justify-between m-0 p-0 items-center'
												style={{ width: '45%' }}>
												<li>
													<img src={Star1} alt='image' />
												</li>
												<li>
													<img src={Star1} alt='image' />
												</li>
												<li>
													<img src={Star1} alt='image' />
												</li>
												<li>
													<img src={Star1} alt='image' />
												</li>
												<li>
													<img src={Star2} alt='image' />
												</li>
												<li>
													<span>4.7</span>
												</li>
											</ul>
										</div>
										<h3
											className='text-xl capitalize font-medium my-2'
											style={{ color: '#041674' }}>
											<Link to='/profile'>Nozima Musaboyeva</Link>
										</h3>
										<div
											className='flex justify-between items-center mb-4'
											style={{ width: '50%' }}>
											<a href='https://facebook.com'>
												<img src={Facebook} alt='facebook icon' />
											</a>
											<a href='https://twitter.com'>
												<img src={Twitter} alt='twitter icon' />
											</a>
											<a href='https://instagramm.com'>
												<img src={Instagramm} alt='instagramm icon' />
											</a>
											<a href='https://youtube.com'>
												<img src={Youtube} alt='you tube icon' />
											</a>
										</div>
										<div className='flex justify-between items-center'>
											<span
												style={{ color: '#041674' }}
												className='ml-7 country'>
												Uzbekistan
											</span>
											<div
												style={{ width: '20%' }}
												className='flex items-center justify-between lang-icon'>
												<span style={{ color: '#041674' }}>Eng</span>
												<span style={{ color: '#041674' }}>Ru</span>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
						<a
							href='#'
							className='text-center mb-24 text-base text-amber-400 py-2 px-3 border border-amber-400 rounded-full'
							style={{
								width: '10%',
								marginLeft: 'auto',
								marginRight: 'auto',
								display: 'block',
							}}>
							Full List
						</a>
					</div>
				</section>

				<section
					className='py-6'
					style={{ backgroundColor: '#F1F7FF', marginBottom: '180px' }}>
					<div className='container mx-auto'>
						<h2
							className='font-medium text-4xl text-center'
							style={{ color: '#041674' }}>
							RECENT REVIEW OF BLOGGERS
						</h2>
						<Carousel afterChange={onChange}>
							<div>
								<ul className='flex flex-wrap p-0 m-0 justify-between items-center mt-8'>
									<li
										style={{ width: '22%' }}
										className='bg-white rounded-xl p-7 hover:shadow-lg hover:cursor-pointer pt-16 blogger-item mb-8'>
										<h4
											className='font-semibold text-lg mb-2'
											style={{ color: '#041674' }}>
											John Doe
										</h4>
										<span style={{ color: '#041674' }}>
											About:{' '}
											<a href='#' className='text-amber-400'>
												Asror Majid
											</a>
										</span>
										<p style={{ color: '#959DC7' }}>
											It is a long established fact that a reader will be
											distracted by the readable content of a page when looking
											at its layout.{' '}
										</p>
										<div
											className='flex justify-between items-center mt-2'
											style={{ width: '45%' }}>
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star2} alt='icon' />
											<span className='text-amber-400'>4.7</span>
										</div>
									</li>
									<li
										style={{ width: '22%' }}
										className='bg-white rounded-xl p-7 hover:shadow-lg hover:cursor-pointer pt-16 blogger-item mb-8'>
										<h4
											className='font-semibold text-lg mb-2'
											style={{ color: '#041674' }}>
											John Doe
										</h4>
										<span style={{ color: '#041674' }}>
											About:{' '}
											<a href='#' className='text-amber-400'>
												Asror Majid
											</a>
										</span>
										<p style={{ color: '#959DC7' }}>
											It is a long established fact that a reader will be
											distracted by the readable content of a page when looking
											at its layout.{' '}
										</p>
										<div
											className='flex justify-between items-center mt-2'
											style={{ width: '45%' }}>
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star2} alt='icon' />
											<span className='text-amber-400'>4.7</span>
										</div>
									</li>
									<li
										style={{ width: '22%' }}
										className='bg-white rounded-xl p-7 hover:shadow-lg hover:cursor-pointer pt-16 blogger-item mb-8'>
										<h4
											className='font-semibold text-lg mb-2'
											style={{ color: '#041674' }}>
											John Doe
										</h4>
										<span style={{ color: '#041674' }}>
											About:{' '}
											<a href='#' className='text-amber-400'>
												Asror Majid
											</a>
										</span>
										<p style={{ color: '#959DC7' }}>
											It is a long established fact that a reader will be
											distracted by the readable content of a page when looking
											at its layout.{' '}
										</p>
										<div
											className='flex justify-between items-center mt-2'
											style={{ width: '45%' }}>
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star2} alt='icon' />
											<span className='text-amber-400'>4.7</span>
										</div>
									</li>
									<li
										style={{ width: '22%' }}
										className='bg-white rounded-xl p-7 hover:shadow-lg hover:cursor-pointer pt-16 blogger-item mb-8'>
										<h4
											className='font-semibold text-lg mb-2'
											style={{ color: '#041674' }}>
											John Doe
										</h4>
										<span style={{ color: '#041674' }}>
											About:{' '}
											<a href='#' className='text-amber-400'>
												Asror Majid
											</a>
										</span>
										<p style={{ color: '#959DC7' }}>
											It is a long established fact that a reader will be
											distracted by the readable content of a page when looking
											at its layout.{' '}
										</p>
										<div
											className='flex justify-between items-center mt-2'
											style={{ width: '45%' }}>
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star2} alt='icon' />
											<span className='text-amber-400'>4.7</span>
										</div>
									</li>
									<li
										style={{ width: '22%' }}
										className='bg-white rounded-xl p-7 hover:shadow-lg hover:cursor-pointer pt-16 blogger-item mb-8'>
										<h4
											className='font-semibold text-lg mb-2'
											style={{ color: '#041674' }}>
											John Doe
										</h4>
										<span style={{ color: '#041674' }}>
											About:{' '}
											<a href='#' className='text-amber-400'>
												Asror Majid
											</a>
										</span>
										<p style={{ color: '#959DC7' }}>
											It is a long established fact that a reader will be
											distracted by the readable content of a page when looking
											at its layout.{' '}
										</p>
										<div
											className='flex justify-between items-center mt-2'
											style={{ width: '45%' }}>
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star2} alt='icon' />
											<span className='text-amber-400'>4.7</span>
										</div>
									</li>
									<li
										style={{ width: '22%' }}
										className='bg-white rounded-xl p-7 hover:shadow-lg hover:cursor-pointer pt-16 blogger-item mb-8'>
										<h4
											className='font-semibold text-lg mb-2'
											style={{ color: '#041674' }}>
											John Doe
										</h4>
										<span style={{ color: '#041674' }}>
											About:{' '}
											<a href='#' className='text-amber-400'>
												Asror Majid
											</a>
										</span>
										<p style={{ color: '#959DC7' }}>
											It is a long established fact that a reader will be
											distracted by the readable content of a page when looking
											at its layout.{' '}
										</p>
										<div
											className='flex justify-between items-center mt-2'
											style={{ width: '45%' }}>
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star2} alt='icon' />
											<span className='text-amber-400'>4.7</span>
										</div>
									</li>
									<li
										style={{ width: '22%' }}
										className='bg-white rounded-xl p-7 hover:shadow-lg hover:cursor-pointer pt-16 blogger-item mb-8'>
										<h4
											className='font-semibold text-lg mb-2'
											style={{ color: '#041674' }}>
											John Doe
										</h4>
										<span style={{ color: '#041674' }}>
											About:{' '}
											<a href='#' className='text-amber-400'>
												Asror Majid
											</a>
										</span>
										<p style={{ color: '#959DC7' }}>
											It is a long established fact that a reader will be
											distracted by the readable content of a page when looking
											at its layout.{' '}
										</p>
										<div
											className='flex justify-between items-center mt-2'
											style={{ width: '45%' }}>
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star2} alt='icon' />
											<span className='text-amber-400'>4.7</span>
										</div>
									</li>
									<li
										style={{ width: '22%' }}
										className='bg-white rounded-xl p-7 hover:shadow-lg hover:cursor-pointer pt-16 blogger-item mb-8'>
										<h4
											className='font-semibold text-lg mb-2'
											style={{ color: '#041674' }}>
											John Doe
										</h4>
										<span style={{ color: '#041674' }}>
											About:{' '}
											<a href='#' className='text-amber-400'>
												Asror Majid
											</a>
										</span>
										<p style={{ color: '#959DC7' }}>
											It is a long established fact that a reader will be
											distracted by the readable content of a page when looking
											at its layout.{' '}
										</p>
										<div
											className='flex justify-between items-center mt-2'
											style={{ width: '45%' }}>
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star2} alt='icon' />
											<span className='text-amber-400'>4.7</span>
										</div>
									</li>
								</ul>
							</div>
							<div>
								<ul className='flex flex-wrap p-0 m-0 justify-between items-center mt-8'>
									<li
										style={{ width: '22%' }}
										className='bg-white rounded-xl p-7 hover:shadow-lg hover:cursor-pointer pt-16 blogger-item mb-8'>
										<h4
											className='font-semibold text-lg mb-2'
											style={{ color: '#041674' }}>
											John Doe
										</h4>
										<span style={{ color: '#041674' }}>
											About:{' '}
											<a href='#' className='text-amber-400'>
												Asror Majid
											</a>
										</span>
										<p style={{ color: '#959DC7' }}>
											It is a long established fact that a reader will be
											distracted by the readable content of a page when looking
											at its layout.{' '}
										</p>
										<div
											className='flex justify-between items-center mt-2'
											style={{ width: '45%' }}>
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star2} alt='icon' />
											<span className='text-amber-400'>4.7</span>
										</div>
									</li>
									<li
										style={{ width: '22%' }}
										className='bg-white rounded-xl p-7 hover:shadow-lg hover:cursor-pointer pt-16 blogger-item mb-8'>
										<h4
											className='font-semibold text-lg mb-2'
											style={{ color: '#041674' }}>
											John Doe
										</h4>
										<span style={{ color: '#041674' }}>
											About:{' '}
											<a href='#' className='text-amber-400'>
												Asror Majid
											</a>
										</span>
										<p style={{ color: '#959DC7' }}>
											It is a long established fact that a reader will be
											distracted by the readable content of a page when looking
											at its layout.{' '}
										</p>
										<div
											className='flex justify-between items-center mt-2'
											style={{ width: '45%' }}>
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star2} alt='icon' />
											<span className='text-amber-400'>4.7</span>
										</div>
									</li>
									<li
										style={{ width: '22%' }}
										className='bg-white rounded-xl p-7 hover:shadow-lg hover:cursor-pointer pt-16 blogger-item mb-8'>
										<h4
											className='font-semibold text-lg mb-2'
											style={{ color: '#041674' }}>
											John Doe
										</h4>
										<span style={{ color: '#041674' }}>
											About:{' '}
											<a href='#' className='text-amber-400'>
												Asror Majid
											</a>
										</span>
										<p style={{ color: '#959DC7' }}>
											It is a long established fact that a reader will be
											distracted by the readable content of a page when looking
											at its layout.{' '}
										</p>
										<div
											className='flex justify-between items-center mt-2'
											style={{ width: '45%' }}>
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star2} alt='icon' />
											<span className='text-amber-400'>4.7</span>
										</div>
									</li>
									<li
										style={{ width: '22%' }}
										className='bg-white rounded-xl p-7 hover:shadow-lg hover:cursor-pointer pt-16 blogger-item mb-8'>
										<h4
											className='font-semibold text-lg mb-2'
											style={{ color: '#041674' }}>
											John Doe
										</h4>
										<span style={{ color: '#041674' }}>
											About:{' '}
											<a href='#' className='text-amber-400'>
												Asror Majid
											</a>
										</span>
										<p style={{ color: '#959DC7' }}>
											It is a long established fact that a reader will be
											distracted by the readable content of a page when looking
											at its layout.{' '}
										</p>
										<div
											className='flex justify-between items-center mt-2'
											style={{ width: '45%' }}>
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star2} alt='icon' />
											<span className='text-amber-400'>4.7</span>
										</div>
									</li>
									<li
										style={{ width: '22%' }}
										className='bg-white rounded-xl p-7 hover:shadow-lg hover:cursor-pointer pt-16 blogger-item mb-8'>
										<h4
											className='font-semibold text-lg mb-2'
											style={{ color: '#041674' }}>
											John Doe
										</h4>
										<span style={{ color: '#041674' }}>
											About:{' '}
											<a href='#' className='text-amber-400'>
												Asror Majid
											</a>
										</span>
										<p style={{ color: '#959DC7' }}>
											It is a long established fact that a reader will be
											distracted by the readable content of a page when looking
											at its layout.{' '}
										</p>
										<div
											className='flex justify-between items-center mt-2'
											style={{ width: '45%' }}>
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star2} alt='icon' />
											<span className='text-amber-400'>4.7</span>
										</div>
									</li>
									<li
										style={{ width: '22%' }}
										className='bg-white rounded-xl p-7 hover:shadow-lg hover:cursor-pointer pt-16 blogger-item mb-8'>
										<h4
											className='font-semibold text-lg mb-2'
											style={{ color: '#041674' }}>
											John Doe
										</h4>
										<span style={{ color: '#041674' }}>
											About:{' '}
											<a href='#' className='text-amber-400'>
												Asror Majid
											</a>
										</span>
										<p style={{ color: '#959DC7' }}>
											It is a long established fact that a reader will be
											distracted by the readable content of a page when looking
											at its layout.{' '}
										</p>
										<div
											className='flex justify-between items-center mt-2'
											style={{ width: '45%' }}>
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star2} alt='icon' />
											<span className='text-amber-400'>4.7</span>
										</div>
									</li>
									<li
										style={{ width: '22%' }}
										className='bg-white rounded-xl p-7 hover:shadow-lg hover:cursor-pointer pt-16 blogger-item mb-8'>
										<h4
											className='font-semibold text-lg mb-2'
											style={{ color: '#041674' }}>
											John Doe
										</h4>
										<span style={{ color: '#041674' }}>
											About:{' '}
											<a href='#' className='text-amber-400'>
												Asror Majid
											</a>
										</span>
										<p style={{ color: '#959DC7' }}>
											It is a long established fact that a reader will be
											distracted by the readable content of a page when looking
											at its layout.{' '}
										</p>
										<div
											className='flex justify-between items-center mt-2'
											style={{ width: '45%' }}>
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star2} alt='icon' />
											<span className='text-amber-400'>4.7</span>
										</div>
									</li>
									<li
										style={{ width: '22%' }}
										className='bg-white rounded-xl p-7 hover:shadow-lg hover:cursor-pointer pt-16 blogger-item mb-8'>
										<h4
											className='font-semibold text-lg mb-2'
											style={{ color: '#041674' }}>
											John Doe
										</h4>
										<span style={{ color: '#041674' }}>
											About:{' '}
											<a href='#' className='text-amber-400'>
												Asror Majid
											</a>
										</span>
										<p style={{ color: '#959DC7' }}>
											It is a long established fact that a reader will be
											distracted by the readable content of a page when looking
											at its layout.{' '}
										</p>
										<div
											className='flex justify-between items-center mt-2'
											style={{ width: '45%' }}>
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star1} alt='icon' />
											<img src={Star2} alt='icon' />
											<span className='text-amber-400'>4.7</span>
										</div>
									</li>
								</ul>
							</div>
						</Carousel>
					</div>
				</section>

				<section>
					
				</section>
			</main>
		</>
	);
};

export default Main;
