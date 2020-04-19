import React, { useState } from 'react'
import PropTypes from 'prop-types'
import VHInputIcon from '../Icon'

const VHInputMultiple = props => {
  let it = []
  try {
    if (props.items !== null) {
      if (props.items.value !== null) {
        it = JSON.parse(props.items.value)
      } else {
        it = JSON.parse("[{ value: '' }]")
      }
    }
  } catch (error) {

  }
  const [items, setItems] = useState(it)
  const [newItems, setNewItems] = useState([{ value: '' }])

  const [render, reRender] = useState(1)

  return (
    <>
      {
        items.map((item, index) => (
          <div
            key={`VHInputMultiple-${index}`}
            style={{ margin: '9px 0' }}
          >
            <VHInputIcon
              icon='bullet'
              sm
              value={item.Value}
              data={item}
              placeholder={props.placeholder}
              onEvent={e => {
                switch (true) {
                  case e.event === "onBlur":
                    if (e.data.value !== '') {
                      items[index] = {
                        value: e.data.value,
                        loading: ''
                      }
                      setItems(items)
                      reRender(render + 1)

                      props.onEvent({
                        data: {
                          value: JSON.stringify(items.concat(newItems)),
                          data: props.data,
                        },
                        event: "onBlur",
                        origin: "VHInputMultiple"
                      })
                    }
                    else {
                      items.splice(index, 1)
                      setItems(items)
                      reRender(render + 1)
                    }
                    break
                }
              }}
            />
          </div>
        ))
      }
      {
        newItems.map((item, index) => (
          <div
            key={`VHInputMultiple-item-${index}`}
            style={{ margin: '9px 0' }}
          >
            <VHInputIcon
              icon='bullet'
              sm
              placeholder={props.placeholder}
              value=''
              autoFocus
              onEvent={e => {
                switch (true) {
                  case e.event === "onKeyUp":

                    if ((index === (newItems.length - 1)) && items.length + newItems.length < props.max) {
                      newItems.push({ value: '' })
                    }

                    setNewItems(newItems)
                    reRender(render + 1)

                    break
                  case e.event === "onBlur":
                    if (e.data.value !== '') {
                      newItems[index] = {
                        value: e.data.value,
                        loading: ''
                      }
                      setNewItems(newItems)
                      reRender(render + 1)

                      props.onEvent({
                        data: {
                          value: JSON.stringify(items.concat(newItems)),
                          data: props.data,
                        },
                        event: "onBlur",
                        origin: "VHInputMultiple"
                      })
                    } else {
                      newItems.splice(index, 1)
                      setNewItems(newItems)
                      reRender(render + 1)
                    }
                    break
                }
              }}
            />
          </div>
        ))
      }
    </>
  )
}

VHInputMultiple.defaultProps = {
  type: "text",
  disabled: false,
  autoFocus: false,
  className: '',
  noBorder: false
}

VHInputMultiple.propTypes = {
  disabled: PropTypes.bool,
  autoFocus: PropTypes.string,
  placeholder: PropTypes.string,
  noBorder: PropTypes.bool,
}

export default VHInputMultiple
