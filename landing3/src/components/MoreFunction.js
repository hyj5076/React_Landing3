import { useState } from 'react';

// 더보기 버튼
export const useMoreButtonFunction = (initialItems, n) => {
  const [displayItems, setDisplayItems] = useState(initialItems.slice(0, n));
  const [hiddenItems, setHiddenItems] = useState(initialItems.slice(n));
  const [moreButtonVisible, setMoreButtonVisible] = useState(hiddenItems.length > 0);
  const [closeButtonVisible, setCloseButtonVisible] = useState(false);

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

  return {
    displayItems,
    moreButtonVisible,
    closeButtonVisible,
    showMore,
    close,
  };
};


