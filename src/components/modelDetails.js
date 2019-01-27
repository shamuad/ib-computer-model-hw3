import * as React from 'react'
import PropTypes from 'prop-types'

const ModelDetails = (props) => {
    ModelDetails.propTypes = {
        name: PropTypes.string.isRequired,
        manufacturer: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        origin: PropTypes.string.isRequired
    }

    return (
        <div>
            <ul>
                <li key={props.name}>Name: {props.name}</li>
                <li key={props.manufacturer}>Manufacturer: {props.manufacturer}</li>
                <li key={props.year}>Year: {props.year}</li>
                <li key={props.origin}>Origin: {props.origin}</li>
            </ul>
        </div>
    )
}

export default ModelDetails;