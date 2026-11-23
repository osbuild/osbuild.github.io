import React from 'react';
import TabItem from '@theme-original/TabItem';
import type {WrapperProps} from '@docusaurus/types';
import {useTabs} from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';

type Props = WrapperProps<typeof TabItem>;

// Wrapper for TabItem to hide the tab content visually but keep it in the DOM for scrapers
// uses https://docusaurus.io/docs/swizzling#wrapping
// to wrap the original TabItem component and add a contextual label based on the tab value
export default function TabItemWrapper(props: Props): JSX.Element {
  const {value} = props;
  // Docusaurus >= 3.10 no longer passes `hidden`; derive it from the tabs context
  const {selectedValue} = useTabs();
  const hidden = value !== selectedValue;

  // Generate contextual label based on tab value
  const getContextLabel = (tabValue: string) => {
    if (tabValue === 'on-premises') return 'On premises example:';
    if (tabValue === 'hosted') return 'Hosted example:';
    if (tabValue === 'bootc') return 'Bootc example:';
    // Fallback for other tab values
    return `${tabValue} example:`;
  };
  
  return (
    <div 
      className={hidden ? styles.hiddenTabItem : ''}
      data-tab-hidden={hidden}
      data-tab-value={value}
    >
      <div className={styles.contextLabel}>
        {getContextLabel(value)}
      </div>
      {/* always "selected" so TabItem never sets the `hidden` attribute */}
      <TabItem {...props} value={selectedValue} />
    </div>
  );
}
