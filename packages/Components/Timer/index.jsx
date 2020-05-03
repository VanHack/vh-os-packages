import React from 'react'
import { Row, Container } from '../../Grid';
import VHText from '../Text/index';
import VHCardBase from '../Cards/Base/index';

import {
  TimerContainer
} from './styles'

const VHTimer = props => {
  const [seconds, setSeconds] = React.useState(0)
  const [minutes, setMinutes] = React.useState(0)
  const [hours, setHours] = React.useState(0)
  const [days, setDays] = React.useState(0)

  const start = (endDate, countdownFunction) => {
    requestAnimationFrame(() => {
      const now = new Date()
      const currentDate = new Date(now.getTime() + now.getTimezoneOffset() * 60000)

      // Find the distance between now and the count down date
      var distance = endDate - currentDate;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // If the count down is finished, write some text
      if (distance < 0) {
        setSeconds(0)
        setMinutes(0)
        setHours(0)
        setDays(0)
        
        if (props.onEndTime) {
          props.onEndTime()
        }

        clearInterval(countdownFunction)
      } else {
        if (props.debugger) {
          console.log(
            {
              "Seconds": seconds,
              "Minutes": minutes,
              "Hours": hours,
              "Days": days
            }
          )
        }

        setSeconds(seconds)
        setMinutes(minutes)
        setHours(hours)
        setDays(days)
      }
     })
  }

  React.useEffect(() => {
    var countdownFunction = setInterval(function() {
      start(new Date(props.endDate), countdownFunction)
    }, 1000);
  }, [])

  return (
    <React.Fragment>
    <TimerContainer>
      <Row row alignItemsCenter>
        <Row marginRight={1} marginLeft={2}>
            <VHCardBase noHover>
                <Row alignItemsCenter height={1} style={{ justifyContent: "center",  }}>
                    <VHText 
                        variant={"h4"}
                        color={"black-90"}
                        text={days}
                    />
                    <VHText 
                        variant={"caption"}
                        color={"gray-40"}
                        text='Days'
                    />
                </Row>
            </VHCardBase>
        </Row>
        <Row marginRight={1}>
            <VHCardBase noHover>
                <Row alignItemsCenter height={1} style={{ justifyContent: "center",  }}>
                    <VHText 
                        variant={"h4"}
                        color={"black-90"}
                        text={hours}
                    />
                    <VHText 
                        variant={"caption"}
                        color={"gray-40"}
                        text='Hours'
                    />
                </Row>
            </VHCardBase>
        </Row>
        <Row marginRight={1}>
            <VHCardBase noHover>
                <Row alignItemsCenter height={1} style={{ justifyContent: "center",  }}>
                    <VHText 
                        variant={"h4"}
                        color={"black-90"}
                        text={minutes}
                    />
                    <VHText 
                        variant={"caption"}
                        color={"gray-40"}
                        text='Min'
                    />
                </Row>
            </VHCardBase>
        </Row>
        <Row marginRight={3}>
            <VHCardBase noHover>
                <Row alignItemsCenter height={1} style={{ justifyContent: "center",  }}>
                    <VHText 
                        variant={"h4"}
                        color={"black-90"}
                        text={seconds}
                    />
                    <VHText 
                        variant={"caption"}
                        color={"gray-40"}
                        text='Sec'
                    />
                </Row>
            </VHCardBase>
        </Row>
      </Row>
    </TimerContainer>
  </React.Fragment>
  )
}

export default VHTimer