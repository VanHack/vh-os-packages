import React from 'react'
import PropTypes from 'prop-types'

import { Container, Row } from '../../Grid'
import Colors from '../../Colors'

const StartStep = props => {
 
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
        <div style={{ marginBottom: '36px', marginTop: '60px' }}>
            <h1 style={{ textAlign: 'center', fontFamily: 'Nunito Sans', fontSize: '24px', color: '#4f4f4f' }}>6 Steps to a Successful Profile</h1>
        </div>
        <div style={{ paddingLeft: '55px', paddingRight: '55px', marginBottom: '50px' }}>
            <p style={{ textAlign: 'center', lineHeight: '28px', fontFamily: 'Roboto', fontSize: '16px', color: '#4f4f4f' }}>Everything on VanHack begins with the profile – it’s the <b>first step</b> of your job search journey, and we have made it even simpler for you to fill it out.</p>
            <p style={{ textAlign: 'center', lineHeight: '28px', fontFamily: 'Roboto', fontSize: '16px', color: '#4f4f4f' }}>Click on "<b style={{ color: '#0675ce', fontWeight: 'normal' }}>start</b>" to boost your profile’s visibility and get closer to a job offer from an international company.</p>
            <p style={{ textAlign: 'center', lineHeight: '28px', fontFamily: 'Roboto', fontSize: '16px', color: '#4f4f4f' }}>Crafting a successful profile has never been easier. Let's start!</p>
        </div>
        <div>
            <button
                style={{ width: '175px', height: '52px', borderRadius: '3px', backgroundColor: '#0675ce' }}
                onClick={e => {
                    props.onEvent({
                      type: "OnChangeStep",
                      origin: "VHOnboarding",
                      props: {
                        data: {
                          step: 1
                        }
                      }
                    })
                    props.setCurrentStep(1)
                  }}>
                <p style={{ fontFamily: 'Roboto', fontSize: '16px', color: '#fff', cursor: 'pointer' }}>Start!</p>
            </button>
        </div>
    </div>
    )

}

StartStep.defaultProps = {
    className: "",
};

StartStep.propTypes = {
    className: PropTypes.string,
    onEvent: PropTypes.func.isRequired
};

export default StartStep
