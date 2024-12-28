const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThFGBTwrc-m2PX_3YlVq-RcE25W8wv96dBTw&s://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"
              alt="About Image"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-700 mb-4">
              We are a passionate team dedicated to building amazing experiences
              for our users. Our mission is to innovate and create solutions
              that bring value to our customers. Our team is made up of skilled
              professionals who believe in collaboration and creativity.
            </p>
            <p className="text-lg text-gray-700">
              Our journey started with a simple goal: to solve real-world
              problems through technology. We continue to push boundaries and
              innovate, ensuring that we make a positive impact on the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
