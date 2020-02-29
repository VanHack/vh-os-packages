import * as rendererReact from  'react-test-renderer'
import {render as reactRender} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'; // extend dom interactions
import 'jest-styled-components'; // enable .toHaveStyleRule

// expose method to make interactions
const render = (ui, options) => reactRender(ui,{ ...options});

// expose method to test style properties
const renderer = (ui, options) => rendererReact.create(ui, {...options});

// export methods {fireEvent}
export * from '@testing-library/react'

export {
  render,
  renderer
}