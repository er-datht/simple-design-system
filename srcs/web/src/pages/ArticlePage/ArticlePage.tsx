import { useState, useEffect } from "react";
import { HeroBasic } from "../../ui/sections/HeroBasic";
import { ImageSection } from "../../ui/sections/ImageSection";
import { PanelImageDouble } from "../../ui/sections/PanelImageDouble";
import "./article-page.css";

// Types for data structure
interface HeroData {
  title: string;
  subtitle: string;
}

interface ImageSectionData {
  backgroundImage: string;
  alt: string;
}

interface PanelImageData {
  leftImageSrc: string;
  rightImageSrc: string;
}

interface ArticlePageData {
  hero: HeroData;
  imageSection: ImageSectionData;
  panelImageFirst: PanelImageData;
  panelImageSecond: PanelImageData;
}

// Default/mock data - will be replaced by API calls
const getDefaultData = (): ArticlePageData => ({
  hero: {
    title: "The Future of Design Systems",
    subtitle:
      "How modern design tools are revolutionizing the way teams collaborate and build products",
  },
  imageSection: {
    backgroundImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&h=400&fit=crop&q=80",
    alt: "Article hero image",
  },
  panelImageFirst: {
    leftImageSrc:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop&q=80",
    rightImageSrc:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop&q=80",
  },
  panelImageSecond: {
    leftImageSrc:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop&q=80",
    rightImageSrc:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop&q=80",
  },
});

export const ArticlePage = () => {
  const [data] = useState<ArticlePageData>(getDefaultData());

  // Prepared for API integration
  useEffect(() => {
    // TODO: Replace with actual API call
    // const fetchArticlePageData = async () => {
    //   setIsLoading(true);
    //   try {
    //     const response = await fetch('/api/article');
    //     const apiData = await response.json();
    //     setData(apiData);
    //   } catch (error) {
    //     console.error('Failed to fetch article page data:', error);
    //     // Fall back to default data
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    // fetchArticlePageData();
  }, []);

  return (
    <main className="article-page">
      <HeroBasic title={data.hero.title} subtitle={data.hero.subtitle} />

      <ImageSection
        backgroundImage={data.imageSection.backgroundImage}
        alt={data.imageSection.alt}
      />

      <PanelImageDouble
        leftImageSrc={data.panelImageFirst.leftImageSrc}
        rightImageSrc={data.panelImageFirst.rightImageSrc}
      />

      <PanelImageDouble
        leftImageSrc={data.panelImageSecond.leftImageSrc}
        rightImageSrc={data.panelImageSecond.rightImageSrc}
      />
    </main>
  );
};
