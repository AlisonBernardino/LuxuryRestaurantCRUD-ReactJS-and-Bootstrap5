// Reference link:
// https://github.com/vsandrade/react-dotnetcore-
// efcore/blob/823761131e60df173137434c6603add9d6278ba8/
// pro-atividade-app/src/components/Atividade.js

import React from 'react';

export default function Combo(props){
    function comboRating(parameter){
        switch(parameter){
            case '1':
                return '1 point';
            case '2':
                return '2 points';
            case '3':
                return '3 points';
            case '4':
                return '4 points';
            default:
                return 'Classification unknown. Please, try again.';
        }
    }

    function ratingStyle(parameter, icon){
        switch(parameter){
            case '1':
                return icon ? 'frown' : 'danger';
            case '2':
                return icon ? 'frown' : 'primary';
            case '3':
                return icon ? 'meh' : 'success';
            case '4':
                return icon ? 'smile' : 'warning';
        }
    }

    
    
}