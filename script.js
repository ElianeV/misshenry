const sections = [
  {
    id: "about-btn",
    img: "wave.svg",
    alt: "Smiling cartoon character waving hello.",
    title: "Hi! I'm Eliane",
    content:
      "<p style='line-height: 1.4rem'>On the clock, I’m a frontend <span style='color: #8f5fc4; font-size: 1.2rem; font-weight: 500'>developer at iVisual</span>, where I help create a platform that makes packaging design more efficient. My toolkit? JavaScript, React, Next, and Tailwind CSS. I’ve also <span style='color: #8f5fc4; font-size: 1.2rem; font-weight: 500'>freelanced</span>, building websites that help small businesses tell their stories. From creating a site for a game designer to developing an inspiring blog for an amputee who’s passionate about outdoor adventures and extreme sports, I’m all about <span style='color: #8f5fc4; font-size: 1.2rem; font-weight: 500'>bringing meaningful narratives to life</span> through code.<br><br>Off the clock, you’ll likely find me climbing rocks (or plastic), hitchhiking to far off destinations, or embarking on a 7-day solo canoe trip. Whether I’m exploring the wild or getting lost in a good book, I thrive on <span style='color: #8f5fc4; font-size: 1.2rem; font-weight: 500'>pushing boundaries and embracing new challenges</span>—both in my adventures and in the projects I build.<p>",
  },
  {
    id: "why-me-btn",
    img: "hats.svg",
    alt: "Cartoon character wearing many hats.",
    title: "Why choose Eliane?",
    content:
      "<p style='line-height: 1.4rem'>I believe I would be a great candidate for Miss Henry because I’m someone who is used to <span style='color: #8f5fc4; font-size: 1.2rem; font-weight: 500'>wearing many hats</span>. I balance technical skills with strong communication and teamwork, and I take pride in being a <span style='color: #8f5fc4; font-size: 1.2rem; font-weight: 500'>reliable colleague</span> who is always eager to learn and grow. Whether it’s switching careers, relocating to a new country, or acquiring new skills, I’m flexible, adaptable, and ready to tackle any challenge that comes my way.<br><br> When I heard that this year’s theme is “accessibility” I knew I had to get involved. A great <span style='color: #8f5fc4; font-size: 1.2rem; font-weight: 500'>user experience has always been a driving force behind my work</span>. I find nothing more rewarding than hearing that users find my apps and websites intuitive and enjoyable to use. Unfortunately, in many front-end roles, true accessibility often takes a back seat—but now, with this platform, I have the chance to truly champion it!<p>",
  },
  {
    id: "achievement-btn",
    img: "climb.svg",
    alt: "Cartoon character climbing a mountain.",
    title: "Eliane's biggest achievement",
    content:
      "<p style='line-height: 1.4rem'>One of my proudest achievements was working on a freelance project for the Women’s Rock Festival, a <span style='color: #8f5fc4; font-size: 1.2rem; font-weight: 500'>climbing festival for women</span>. I built a strong relationship with the two organizers, carefully understanding their needs and vision while bringing my own expertise to the table. This collaborative approach <span style='color: #8f5fc4; font-size: 1.2rem; font-weight: 500'>fostered trust</span> and helped me manage a tight deadline while delivering a functional, user-friendly website.<br><br>The site enabled over <span style='color: #8f5fc4; font-size: 1.2rem; font-weight: 500'>100 participants</span> to easily book workshops and reserve accommodation. The biggest challenge was ensuring everything was ready in time for ticket sales and the event itself, but the result was a resounding success. Not only was the client <span style='color: #8f5fc4; font-size: 1.2rem; font-weight: 500'>thrilled with the outcome</span>, but the project also led to new opportunities, as several attendees reached out to me for future work.</p>",
  },
  {
    id: "if-i-win-btn",
    img: "win.svg",
    alt: "Cartoon character holding a trophy.",
    title: "If Eliane would win...",
    content:
      "<p style='line-height: 1.4rem'>If I were to become Miss Henry 2025, I’d bring my <span style='color: #8f5fc4; font-size: 1.2rem; font-weight: 500'>passion for collaboration, creativity</span>, and delivering accessible digital experiences. I thrive on building <span style='color: #8f5fc4; font-size: 1.2rem; font-weight: 500'>strong relationships</span> with clients and colleagues, and I’m always eager to lend a hand and <span style='color: #8f5fc4; font-size: 1.2rem; font-weight: 500'>support others</span>. As a proactive problem solver, I’m constantly looking for ways to improve both my own skills and the outcomes of the team.<br><br>Joining the Henry family would provide the perfect opportunity to further develop my expertise, particularly in WordPress and PHP, while contributing my enthusiasm for user experience. I’m <span style='color: #8f5fc4; font-size: 1.2rem; font-weight: 500'>excited about the prospect of collaborating with a diverse and creative team</span>, bringing my skills and fresh ideas to the table, and helping create high-quality websites that leave a lasting impact.</p>",
  },
];

// Reference to the element where the content will be updated
const contestantInfo = document.getElementById("contestant-info");

// Function to update the content of the section
function updateContestantInfo(img, alt, title, content) {
  contestantInfo.innerHTML = `
    <img src="${img}" alt="${alt}" />
    <div>
      <h3>${title}</h3>
      ${content}
    </div>
  `;
}

// Load the "About" section when the page first loads
document.addEventListener("DOMContentLoaded", function () {
  const initialSection = sections.find(
    (section) => section.title === "Hi! I'm Eliane"
  );
  updateContestantInfo(
    initialSection.img,
    initialSection.alt,
    initialSection.title,
    initialSection.content
  );
});

// Dynamically create event listeners for each button
sections.forEach((section) => {
  const button = document.getElementById(section.id);
  button.addEventListener("click", function () {
    updateContestantInfo(
      section.img,
      section.alt,
      section.title,
      section.content
    );
  });
});
