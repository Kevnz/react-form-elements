'use strict';
import React from 'react';
import { Component, PropTypes } from 'react';
import TextBox from './textbox';

export default class Telephone extends TextBox {
    constructor(props) {
        super(props); 
    }
} 
Telephone.defaultProps = { type: 'tel', label: 'Telephone Number' };
