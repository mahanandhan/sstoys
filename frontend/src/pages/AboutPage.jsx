import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6 text-orange-500">About Us</h1>
      
      <p className="text-lg text-gray-700 max-w-3xl text-center mb-6">
        Welcome to <span className="font-bold text-orange-600">The Name</span>! 🎉
        <br /><br />
        We are a passionate team dedicated to offering a wide range of high-quality toys that ignite creativity, spark joy, and provide endless fun for kids of all ages. Our goal is simple: to make childhood magical, one toy at a time. 🧸✨
        <br /><br />
        Whether you’re looking for educational toys that help with learning, fun-filled activities that keep children entertained for hours, or plush companions that become their best friends, we’ve got it all! From the latest trends to timeless classics, our collection is carefully curated with safety, durability, and fun in mind. 🎈🌟
      </p>

      <p className="text-lg text-gray-700 max-w-3xl text-center mb-6">
        <span className="font-bold text-orange-600">Our Mission</span><br />
        At <span className="font-bold text-orange-600">The Name</span>, we believe that play is not just a way to pass the time – it's an essential part of a child’s development. It fosters creativity, boosts problem-solving skills, and helps children build lasting memories. Our mission is to offer toys that not only entertain but also encourage children to explore, learn, and grow. 🚀
        <br /><br />
        Every toy we offer is a result of our commitment to quality, innovation, and fun. We work closely with designers and manufacturers to ensure that each item in our collection meets the highest safety standards, so you can trust us with the happiness and well-being of your little ones. 💖
      </p>

      <p className="text-lg text-gray-700 max-w-3xl text-center mb-6">
        <span className="font-bold text-orange-600">Why Choose Us?</span><br />
        We’re not just another toy store – we’re a team of parents, toy enthusiasts, and child development experts working together to bring the best play experiences to families worldwide. Our commitment to customer satisfaction and a seamless shopping experience is what sets us apart.
        <br /><br />
        From the moment you browse our collection to the delivery of your chosen items, we’re here to ensure that your shopping experience is easy, fun, and unforgettable. We believe in building long-term relationships with our customers, and we’re always just a message away if you need assistance! 🌟
      </p>

      <p className="text-lg text-gray-700 max-w-3xl text-center mb-6">
        <span className="font-bold text-orange-600">Join the Fun!</span><br />
        Thank you for choosing <span className="font-bold text-orange-600">The Name</span> as your go-to destination for toys that bring happiness to children everywhere. We're thrilled to be a part of your family's journey and hope our toys help create memories that last a lifetime. 💫
        <br /><br />
        Ready to find the perfect toy? Start browsing our collection today, and let the fun begin! 🎉
      </p>

      <div className="text-center mt-8">
        <button 
          className="bg-orange-500 text-white font-bold py-2 px-6 rounded-md hover:bg-orange-600 transition-all cursor-pointer"
          onClick={() => window.location.href = '/toys'}
        >
          Explore Our Collection
        </button>
      </div>
    </div>
  );
}

export default About;
