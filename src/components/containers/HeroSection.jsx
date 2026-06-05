import { Button } from '@mantine/core'
import React from 'react'

const HeroSection = () => {
  return (
    <main>
        <section class="relative">
            <div class="absolute left-10 top-20">
                <h1 className="text-4xl font-bold mt-4">Welcome to Our Store</h1>
                <h1 className="text-4xl font-bold mt-4">Discover Amazing Products</h1>
                <Button variant="filled" radius="xl" color="green">Shop Now</Button>
            </div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2014/11/16/23/39/superhero-534120_1280.jpg" alt="Hero Image" className="w-full h-[20rem] object-fill" />
            </div>
        </section>
      
    </main>
  )
}

export default HeroSection
