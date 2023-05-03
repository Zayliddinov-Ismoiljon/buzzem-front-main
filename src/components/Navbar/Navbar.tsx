import React from 'react';
import Logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { Select, Space } from 'antd';

const Navbar: React.FC = (): JSX.Element => {
	const handleChange = (value: string) => {
		console.log(`selected ${value}`);
	};

	return (
		<>
			<header className='shadow-xl' style={{boxShadow: '0px 4px 24px rgba(4, 22, 116, 0.08)', backdropFilter:'blur(12px)'}}>
				<div className="container mx-auto p-2">
        <div className='flex items-center justify-between'>
					<a href='/' className='hover:opacity-50'>
						<img src={Logo} alt='site logo' />
					</a>
					<nav>
						<ul className='flex m-0 p-0 items-center justify-between'>
							<li className='mr-6'>
								<Link className='font-bold text-lg uppercase hover:opacity-50' to='/' style={{color:'#041674'}}>Home</Link>
							</li>
							<li className='mr-6'>
								<Link className='font-bold text-lg uppercase hover:opacity-50' to='/categories' style={{color:'#041674'}}>Categories</Link>
							</li>
							<li className='mr-6'>
								<Link className='font-bold text-lg uppercase hover:opacity-50' to='/about-us' style={{color:'#041674'}}>About Us</Link>
							</li>
						</ul>
					</nav>
					<Space wrap>
						<Select
							defaultValue='uz'
							style={{ width: 70,}}
							onChange={handleChange}
							options={[
								{ value: 'uz', label: 'uz' },
								{ value: 'en', label: 'en' },
								{ value: 'ru', label: 'ru' },
							]}
						/>
					</Space>
				</div>
        </div>
			</header>
		</>
	);
};

export default Navbar;
