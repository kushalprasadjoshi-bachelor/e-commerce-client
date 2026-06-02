import React from 'react'
import { navItems } from '../../utils/constants/navItems';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <main class='flex justify-between py-4 dynamic-x-padding'>
      <section>LOGO</section>

      <section class='space-x-4'>
        {navItems.map((item, index) => (
          <Link key={index} href={item.path}>
            {item.name}
          </Link>
        ))}
      </section>

      <section class='flex space-x-4'>
        <div>
            <input 
            type="text" 
            placeholder='Search Products' 
            class='border border-black rounded-xl px-2'
            />
        </div>
        <div>
            Account
        </div>
        <div>
            Cart
        </div>
      </section>
    </main>
  );
}

export default Navbar
