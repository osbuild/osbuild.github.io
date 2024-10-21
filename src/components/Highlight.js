import React from 'react';

// Define tabValues constant
export const tabValues = [
    { label: '🔵 on premises', value: 'on-premises', attributes: { className: 'highlight tab on-premises' } },
    { label: '🟤 hosted', value: 'hosted', attributes: { className: 'highlight tab hosted' } },
    { label: '⚪ bootc', value: 'bootc', attributes: { className: 'highlight tab disabled' } },
];

export const tabValuesOnPremiseOnly = [
    { label: '🔵 on premises', value: 'on-premises', attributes: { className: 'highlight tab on-premises' } },
    { label: '⚪ hosted', value: 'hosted', attributes: { className: 'highlight tab disabled' } },
    { label: '⚪ bootc', value: 'bootc', attributes: { className: 'highlight tab disabled' } },
];

export const tabValuesHostedOnly = [
    { label: '⚪ on premises', value: 'on-premises', attributes: { className: 'highlight tab disabled' } },
    { label: '🟤 hosted', value: 'hosted', attributes: { className: 'highlight tab hosted' } },
    { label: '⚪ bootc', value: 'bootc', attributes: { className: 'highlight tab disabled' } },
];

export const tabValuesBootcOnly = [
    { label: '⚪ on premises', value: 'on-premises', attributes: { className: 'highlight tab disabled' } },
    { label: 'l hosted', value: 'hosted', attributes: { className: 'highlight tab disabled' } },
    { label: '🟣 bootc', value: 'bootc', attributes: { className: 'highlight tab bootc' } },
];

export const tabValuesOnPremBootc = [
    { label: '🔵 on premises', value: 'on-premises', attributes: { className: 'highlight tab on-premises' } },
    { label: 'l hosted', value: 'hosted', attributes: { className: 'highlight tab disabled' } },
    { label: '🟣 bootc', value: 'bootc', attributes: { className: 'highlight tab bootc' } },
];

export const tabValuesAll = [
    { label: '🔵 on premises', value: 'on-premises', attributes: { className: 'highlight tab on-premises' } },
    { label: '🟤 hosted', value: 'hosted', attributes: { className: 'highlight tab hosted' } },
    { label: '🟣 bootc', value: 'bootc', attributes: { className: 'highlight tab bootc' } },
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
