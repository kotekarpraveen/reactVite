/**  ########################### FILE INFORMATION ##############################/
*#    Name: 
*#    Description: 
*#    Created By: 
*#    Created On: 
*#    Updated By: 
*#    Updated On: 
*#    Last Changes:
############################# FILE INFORMATION ###############################*/



import { useEffect } from 'react';

const NavigationScroll= (props) => {
    const {children} = props;
    useEffect(() => {
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    }, [])

    return children || null;
    
    
}

export default NavigationScroll;








