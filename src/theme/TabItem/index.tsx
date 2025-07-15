import React from 'react';
import TabItem from '@theme-original/TabItem';
import type {WrapperProps} from '@docusaurus/types';
import styles from './styles.module.css';

type Props = WrapperProps<typeof TabItem>;

// Wrapper for TabItem to hide the tab content visually but keep it in the DOM for scrapers
// uses https://docusaurus.io/docs/swizzling#wrapping
// to wrap the original TabItem component and add a contextual label based on the tab value
export default function TabItemWrapper(props: Props): JSX.Element {
  const {hidden, value, ...otherProps} = props;

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
      <TabItem {...otherProps} />
    </div>
  );
}
