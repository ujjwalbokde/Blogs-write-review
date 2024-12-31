import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-32 py-12">
      {/* Page Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-foreground mb-10">
        About Us
      </h1>

      {/* Welcome Section */}
      <section className="text-center mb-12">
        <p className="text-base sm:text-lg md:text-xl text-foreground max-w-4xl mx-auto leading-relaxed">
          Welcome to <span className="font-bold">Blogify</span>—where creativity meets community. 
          Whether you're a passionate storyteller, a knowledge sharer, or an avid reader, Blogify is 
          your go-to platform to write, connect, and be inspired. Dive into a world where ideas flow 
          freely, and voices echo across the digital landscape.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-8 mb-12 rounded-xl shadow-lg bg-card-bg">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-foreground mb-6">
          Our Mission
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
          At Blogify, our mission is to empower individuals by offering a space that fosters creativity, 
          inclusivity, and meaningful connections. We believe in the power of the written word to educate, 
          inspire, and transform. Our goal is to provide a seamless platform where writers can share their 
          stories and readers can discover content that resonates with them. Together, we aim to bridge gaps, 
          build communities, and amplify diverse voices.
        </p>
      </section>

      {/* Vision Section */}
      <section className="py-8 rounded-xl shadow-lg bg-card-bg">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-foreground mb-6">
          Our Vision
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
          We envision a world where everyone has a platform to express themselves freely. Blogify aspires 
          to be the cornerstone of a thriving blogging ecosystem, supporting writers and readers worldwide. 
          By combining innovation with community-driven values, we aim to redefine the way people engage with 
          stories, ideas, and perspectives.
        </p>
      </section>
    </div>
  );
}
