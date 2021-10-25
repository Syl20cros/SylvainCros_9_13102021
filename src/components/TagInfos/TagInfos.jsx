import React from 'react'
import './TagInfos.css'
import caloriesIcon from '../../assets/calories-icon.png'
import glucidesIcon from '../../assets/carbs-icon.png'
import lipidesIcon from '../../assets/fat-icon.png'
import proteinIcon from '../../assets/protein-icon.png'
import PropTypes from 'prop-types'

/**
 * Create custom tag with icon corresponding to type
 * 
 * @component
 */
function TagInfos({type, unit, value}){
    return(
        <div className='tag'>
            {(() => {
                switch (type) {
                    case 'Calories':
                        return <img src={caloriesIcon} alt="icon calories" />;

                    case 'Proteines':
                        return <img src={proteinIcon} alt="icon protein" />;

                    case 'Glucides':
                        return <img src={glucidesIcon} alt="icon glucides" />;

                    case 'Lipides':
                        return <img src={lipidesIcon} alt="icon lipides" />;
                
                    default:
                        return null
                }
            })()}
            <p><span className='tagValue'>{value}{unit}</span><br />{type}</p>
        </div>
    )
}

TagInfos.propTypes = {
    /**
     * Type: Calories, Proteines, Glucides or Lipides
     */
    type: PropTypes.oneOf(['Calories', 'Proteines', 'Glucides', 'Lipides']).isRequired,
    /**
     * Type unit: kCal or g
     */
    unit: PropTypes.oneOf(['kCal', 'g']).isRequired,
    /**
     * Type quantity
     */
    value: PropTypes.number.isRequired,
}

export default TagInfos