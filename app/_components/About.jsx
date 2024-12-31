import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto px-6 py-8">
      {/* Page Title */}
      <h1 className="text-5xl font-extrabold text-center text-foreground mb-8">About Us</h1>

      {/* Introduction Section */}
      <section className="text-center mb-10">
        <p className="text-xl text-foreground max-w-4xl mx-auto">
          Welcome to Blogify, the platform where creative minds come together to write, share, and connect. Our mission is to build a space for bloggers to express themselves, connect with like-minded individuals, and make their voices heard in the ever-evolving digital world.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-background py-8 mb-10 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-foreground mb-6">Our Mission</h2>
        <p className="text-lg text-foreground max-w-3xl mx-auto">
          At Blogify, we are committed to providing an easy-to-use platform for writers and readers alike. Our aim is to create an inclusive environment where ideas can thrive, creativity can flourish, and the world can gain knowledge through the written word. Whether you're sharing your experiences, expertise, or creative storytelling, Blogify is here to support your journey.
        </p>
      </section>

      {/* Founder Section */}
      <section className="flex justify-center mb-12">
        <div className="text-center w-full sm:w-1/2 md:w-1/3">
          <img 
            src="/founder.jpg" 
            alt="Ujjwal Bokde" 
            className="rounded-full w-48 h-48 mx-auto mb-6 shadow-lg border-4 border-primary"
          />
          <h3 className="text-2xl font-semibold text-foreground">Ujjwal Bokde</h3>
          <p className="text-sm text-foreground">Founder & CEO</p>
          <p className="text-lg text-foreground mt-4 max-w-md mx-auto">
            Ujjwal Bokde, the visionary behind Blogify, started this platform with a singular goal in mind: to empower writers and readers by giving them a space to express their thoughts and connect with others. With a passion for storytelling and digital technology, Ujjwal’s vision is to foster a community that thrives on collaboration and creativity.
          </p>
        </div>
      </section>

      
    </div>
  );
}
