import React from 'react';
import { FaCartPlus, FaSearch } from 'react-icons/fa';

const NavBar = () => {
	return (
		<div className='navbar'>
			<div className='wrapper'>
				<div className='left'>
					<span className='language'>EN</span>
					<div className='searchContainer'>
						<input className='input' />
						<FaSearch />
					</div>
				</div>
				<div className='center'>
					<h1>Logo</h1>
				</div>
				<div className='right'>
					<div className='menuItem'>Register</div>
					<div className='menuItem'>Sign In</div>
					<div className='menuItem'>
						<div className='barge'>
							<FaCartPlus />
							<p className='count'>6</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
