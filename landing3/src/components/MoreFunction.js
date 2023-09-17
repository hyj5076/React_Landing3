
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

  const close = () => {
    setDisplayItems(initialItems.slice(0, n));
    setHiddenItems(initialItems.slice(n));
    setMoreButtonVisible(true);
    setCloseButtonVisible(false);
    // Add code here if you want to scroll to the top of the component or perform other actions
  };

  return {
    displayItems,
    moreButtonVisible,
    closeButtonVisible,
    showMore,
    close,
  };
};


