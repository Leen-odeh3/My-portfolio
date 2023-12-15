
import { Hero, About, SkillsBar, TwitterFeed } from "../utils/Path";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <SkillsBar />
      <TwitterFeed username="leen_odeh2803" tweetLimit={4} />
    </div>
  );
};

export default Home;
