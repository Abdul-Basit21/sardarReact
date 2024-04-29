import GoldGuide from "./GoldGuide";
import MainContent from "./MainContent";
import NewsSection from "./NewsSection";
import TabsSection from "./TabsSection";

export default function Home() {
  return (
    <>
      <TabsSection />
      <MainContent />
      <GoldGuide />
      <NewsSection />
    </>
  );
}
