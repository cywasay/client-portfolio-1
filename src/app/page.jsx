import HeroClient from "./_components/HeroClient";
import HomeStory from "./_components/HomeStory";
import styles from "./_components/HomeStory.module.css";
import atmosphere from "./_components/HomeAtmosphere.module.css";

export default function Home() {
  return (
    <main id="top" className={`${styles.home} ${atmosphere.atmosphere} text-gray-800`}>
      <HeroClient />
      <HomeStory />
    </main>
  );
}

