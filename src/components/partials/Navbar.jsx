import React from 'react'
import { navItems } from '../../utils/constants/navItems';
import { Link } from 'react-router-dom';
import { TextInput } from '@mantine/core';
import { Search, ShoppingCart, User } from 'lucide-react';

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

      <section class='flex space-x-4 items-center'>
        <div>
          <TextInput
            placeholder="Search Products"
            radius={30}
            rightSection={<Search size={16} />}
          />
        </div>
        <div class='flex space-x-1 items-center'>
          <div>
            <User size={16} strokeWidth={3} />
          </div>
          <div class='font-bold'>
            Account
          </div>
          
        </div>
        <div class='flex space-x-1 items-center'>
          <div>
            <ShoppingCart size={16} strokeWidth={3} />
          </div>
          <div class='font-bold'>
            Cart
          </div>

        </div>
      </section>
    </main>
  );
}

export default Navbar
