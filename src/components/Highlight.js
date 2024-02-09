import React from 'react';

// Define tabValues constant
export const tabValues = [
    { label: 'On premises', value: 'on-premises', attributes: { className: 'highlight tab on-premises' } },
    { label: 'Hosted', value: 'hosted', attributes: { className: 'highlight tab hosted' } },
];

//colorVars - see css/custom.css
export default function Highlight({children, colorVar}) {
    return (
        <span
            className={`highlight box ${colorVar}`}>
      {children}
    </span>
    );
}
