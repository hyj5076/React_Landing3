import { useState, useEffect } from 'react';

export const useMoreButtonFunction = (initialItems, n) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [displayItems, setDisplayItems] = useState(initialItems.slice(0, n));
  const [hiddenItems, setHiddenItems] = useState(initialItems.slice(n));
  const [moreButtonVisible, setMoreButtonVisible] = useState(hiddenItems.length > 0);
  const [closeButtonVisible, setCloseButtonVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showMore = () => {
    const newHiddenItems = hiddenItems.slice(n);
    const itemsToShow = hiddenItems.slice(0, n);
    setDisplayItems([...displayItems, ...itemsToShow]);
    setHiddenItems(newHiddenItems);

    if (newHiddenItems.length === 0) {
      setMoreButtonVisible(false);
      setCloseButtonVisible(true);
    }
  };

  const close = (sectionId) => {
    setDisplayItems(initialItems.slice(0, n));
    setHiddenItems(initialItems.slice(n));
    setMoreButtonVisible(true);
    setCloseButtonVisible(false);
    scrollToSection(sectionId);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const responsiveValues = windowWidth >= 700 
    ? {
      displayItems,
      moreButtonVisible,
      closeButtonVisible,
      showMore,
      close
    }
    : {
      displayItems: initialItems,
      moreButtonVisible: false,
      closeButtonVisible: false,
      showMore: () => {},
      close: () => {},
    };

  return responsiveValues;
};
