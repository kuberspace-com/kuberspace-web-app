/* eslint-disable max-len */
import React from 'react';

function About() {
  return (
    <main className="about">
      <h1 style={{ textAlign: 'center' }}>
        <span>Our Story</span>
      </h1>
      <div style={{ textAlign: 'center', padding: '20px 60px', fontSize: '14px' }}>
        In 2023, KUBERSPACE was founded with a simple mission: Make Raw resources cheap and easily available to cunsumers to buy and trade.
      </div>

      <div className="image-container" style={{ width: '80%', margin: '40px auto' }}>
        <img style={{ width: '100%', margin: '0 auto' }} alt="tractors digging" src="https://www.euractiv.com/wp-content/uploads/sites/2/2022/10/shutterstock_1947945640.jpg" />
      </div>
      <p style={{ textAlign: 'center', padding: '20px 60px' }}>
        Growing up, I have always loved chemistry.
        One day out of high school I had a vision of creating a website where you can buy resources and trade them like in games.
        Except this is real resources that have value in the modern world.
        The most valuable assets are ones that are used in everyday items such as Iron.
        I Came to the understanding that banks could lose all your money but one thing you can lose is tangible assets.
        Kuberspace is made for customers who don&apos;t want to hold the tangible assets but still get the value of those tangible assets.
        Since Kuberspace ties the virtual asset to the real asset we hold the raw resources for you,
        and if you want to get your resources you just have to pay for shipping.
      </p>
    </main>
  );
}
export default About;
