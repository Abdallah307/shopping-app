import React from 'react'
import {HeaderButton} from 'react-navigation-header-buttons'
import {Ionicons} from '@expo/vector-icons'
import AppColors from '../../Colors/AppColors'

const CustomHeaderButton = (props) => {
    return <HeaderButton 
    {...props} 
    IconComponent={Ionicons}
    iconSize={23}
    color={AppColors.primary}
    />
}

export default CustomHeaderButton;
