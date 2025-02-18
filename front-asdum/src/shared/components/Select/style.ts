import styled from '@emotion/styled';
import {InputLabel} from '@mui/material';
import Select from 'react-select';

import {ReactComponent as Down} from '@src/images/arrowdown.svg';

import {constants} from '@shared/helpers';

import {Props} from './type';

const {device} = constants;

export const Container = styled.div`
    width: ${({width}: Props) =>
        width?.width ? width?.width : '100%'} !important;
    min-width: ${({width}: Props) => `${width?.minwidth}px`} !important;
    max-width: ${({width}: Props) => `${width?.maxwidth}px`} !important;

    margin: ${({margin}: Props) => margin?.laptop} !important;
    @media (max-width: ${device.mobile}) {
        margin: ${({margin}: Props) => margin?.mobile} !important;
    }
    @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
        margin: ${({margin}: Props) => margin?.planshet} !important;
    }
    @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
        margin: ${({margin}: Props) => margin?.laptop} !important;
    }
    @media (min-width: ${device.laptop}) {
        margin: ${({margin}: Props) => margin?.desktop} !important;
    }
    position: relative;

    .css-qc6sy-singleValue {
        font-size: ${({fontSize}: Props) => fontSize + 'px'} !important;
    }
`;

export const NewSelect = styled(Select)`
    .css-1ss0qri-control {
        background-color: ${({selectStyle}: Props) =>
            selectStyle?.bgcolor ? selectStyle?.bgcolor : 'white'} !important;
    }

    .css-xb97g8:hover {
        background-color: #ddd !important;
    }
    .css-xb97g8 {
        background-color: ${({selectStyle}: Props) =>
            selectStyle?.deleteBgColor
                ? selectStyle?.deleteBgColor
                : 'transparent'} !important;
    }
    .css-1okebmr-indicatorSeparator {
        width: 0 !important;
    }
    [class$='-indicatorSeparator'] {
        background-color: transparent !important;
    }
    .css-1pahdxg-control {
        border: none !important;
    }
    [class$='-multiValue'] {
        background-color: ${({selectStyle}: Props) =>
            selectStyle?.valuebgcolor
                ? selectStyle?.valuebgcolor
                : 'transparent'} !important;
    }
    [class$='-placeholder'] {
        font-weight: ${({selectStyle}: Props) =>
            selectStyle?.placewieght ? selectStyle?.placewieght : '500'};
        color: ${({selectStyle}: Props) =>
            selectStyle?.placeholdercolor
                ? selectStyle?.placeholdercolor
                : ' #A5A5A5'} !important;
        font-size: 16px !important;
    }

    [class$='ValueContainer'],
    [class$='-control'] {
        min-height: ${({selectStyle}: Props) =>
            selectStyle?.height?.laptop
                ? `${selectStyle?.height?.laptop}px`
                : '50px'} !important;
        @media (max-width: ${device.mobile}) {
            min-height: ${({selectStyle}: Props) =>
                selectStyle?.height?.mobile
                    ? `${selectStyle?.height?.mobile}px`
                    : '45px'} !important;
        }
        @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
            min-height: ${({selectStyle}: Props) =>
                selectStyle?.height?.planshet
                    ? `${selectStyle?.height?.planshet}px`
                    : '45px'} !important;
        }
        @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
            min-height: ${({selectStyle}: Props) =>
                selectStyle?.height?.laptop
                    ? `${selectStyle?.height?.laptop}px`
                    : '50px'} !important;
        }
        @media (min-width: ${device.laptop}) {
            min-height: ${({selectStyle}: Props) =>
                selectStyle?.height?.desktop
                    ? `${selectStyle?.height?.desktop}px`
                    : '60px'} !important;
        }
    }
    [class$='-singleValue'],
    .css-12jo7m5 {
        color: ${({selectStyle}: Props) =>
            selectStyle?.color ? selectStyle?.color : '#223367'}!important;
        font-size: ${({selectStyle}: Props) =>
            selectStyle?.fontSize?.laptop
                ? `${selectStyle?.fontSize?.laptop}px`
                : '16px'} !important;
        font-weight: ${({selectStyle}: Props) =>
            selectStyle?.weight ? selectStyle?.weight : '500'} !important;
        @media (max-width: ${device.mobile}) {
            font-size: ${({selectStyle}: Props) =>
                selectStyle?.fontSize?.mobile
                    ? `${selectStyle?.fontSize?.mobile}px`
                    : '14px'} !important;
        }
        @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
            font-size: ${({selectStyle}: Props) =>
                selectStyle?.fontSize?.planshet
                    ? `${selectStyle?.fontSize?.planshet}px`
                    : '14px'} !important;
        }
        @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
            font-size: ${({selectStyle}: Props) =>
                selectStyle?.fontSize?.laptop
                    ? `${selectStyle?.fontSize?.laptop}px`
                    : '15px'} !important;
        }
        @media (min-width: ${device.laptop}) {
            font-size: ${({selectStyle}: Props) =>
                selectStyle?.fontSize?.desktop
                    ? `${selectStyle?.fontSize?.desktop}px`
                    : '16px'} !important;
        }
    }
    [class$='-indicatorContainer'] {
        padding: 0 !important;
    }
    [class$='ValueContainer'] {
        padding: ${({selectStyle}: Props) =>
            selectStyle?.inpadding
                ? selectStyle?.inpadding
                : '2px 20px'}!important;
    }
    [class$='-control'] > div:first-child {
        padding: ${({selectStyle}: Props) =>
            selectStyle?.inpadding
                ? selectStyle?.inpadding
                : '2px 20px'}!important;
    }
    .css-xb97g8 {
        & > svg {
            & > path {
                fill: ${({selectStyle}: Props) =>
                    selectStyle?.deleteColor
                        ? selectStyle?.deleteColor
                        : '#3492ff'} !important;
            }
        }
    }
`;

export const DownIcon = styled(Down)`
    margin-right: ${({iconmargin}: Props) =>
        iconmargin ? iconmargin : '15px'};
    & > path {
        fill: ${({icondowncolor}) =>
            icondowncolor ? icondowncolor : '#606EEA'};
    }
`;

export const Label = styled(InputLabel)`
    width: fit-content;
    user-select: none;

    color: ${({labelStyle}: Props) =>
        labelStyle?.color ? labelStyle?.color : '#C7C7C7'} !important;
    font-weight: ${({labelStyle}: Props) =>
        labelStyle?.weight ? labelStyle?.weight : 'bold'} !important;
    font-size: ${({labelStyle}: Props) =>
        labelStyle?.fontSize?.laptop
            ? `${labelStyle?.fontSize?.laptop}px`
            : '15px'} !important;
    margin-bottom: ${({lmargin}: Props) =>
        lmargin?.laptop ? `${lmargin?.laptop}px` : '7px'}!important;
    @media (max-width: ${device.mobile}) {
        font-size: ${({labelStyle}: Props) =>
            labelStyle?.fontSize?.mobile
                ? `${labelStyle?.fontSize?.mobile}px`
                : '14px'} !important;
        margin-bottom: ${({lmargin}: Props) =>
            lmargin?.mobile ? `${lmargin?.mobile}px` : '5px'}!important;
    }
    @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
        font-size: ${({labelStyle}: Props) =>
            labelStyle?.fontSize?.planshet
                ? `${labelStyle?.fontSize?.planshet}px`
                : '14px'} !important;
        margin-bottom: ${({lmargin}: Props) =>
            lmargin?.planshet ? `${lmargin?.planshet}px` : '6px'}!important;
    }
    @media (min-width: ${device.planshet}) and (max-width: ${device.laptop}) {
        font-size: ${({labelStyle}: Props) =>
            labelStyle?.fontSize?.laptop
                ? `${labelStyle?.fontSize?.laptop}px`
                : '15px'} !important;
        margin-bottom: ${({lmargin}: Props) =>
            lmargin?.laptop ? `${lmargin?.laptop}px` : '7px'}!important;
    }
    @media (min-width: ${device.laptop}) {
        font-size: ${({labelStyle}: Props) =>
            labelStyle?.fontSize?.desktop
                ? `${labelStyle?.fontSize?.desktop}px`
                : '16px'} !important;
        margin-bottom: ${({lmargin}: Props) =>
            lmargin?.desktop ? `${lmargin?.desktop}px` : '10px'}!important;
    }
`;

export const Message = styled.div`
    position: ${({isStatic}: Props) => (isStatic ? 'static' : 'absolute')};
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    letter-spacing: 0.03333em;
    text-align: left;
    margin-top: 4px;
    margin-right: 14px;
    margin-bottom: 0;
    color: #d32f2f;
`;
