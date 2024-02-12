import React from 'react';

// Define tabValues constant
export const tabValues = [
    { label: '🔵 on premises', value: 'on-premises', attributes: { className: 'highlight tab on-premises' } },
    { label: '🟤 hosted', value: 'hosted', attributes: { className: 'highlight tab hosted' } },
];

export const tabValuesOnPremiseOnly = [
    { label: '🔵 on premises', value: 'on-premises', attributes: { className: 'highlight tab on-premises' } },
    { label: '⚪ hosted', value: 'hosted', attributes: { className: 'highlight tab disabled' } },
];

export const tabValuesHostedOnly = [
    { label: '⚪ on premises', value: 'on-premises', attributes: { className: 'highlight tab disabled' } },
    { label: '🟤 hosted', value: 'hosted', attributes: { className: 'highlight tab hosted' } },
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
