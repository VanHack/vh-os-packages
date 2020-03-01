import React from 'react';
import VHTable from '.';
import { render } from '../../../setupTests';

describe('[Component] - VHTable', () => {
  // helper function to render default component used in tests
  const setup = props => {
    const handleEvent = e => jest.fn();
    const utils = render(
      <VHTable
        data="main"
        title="simple title"
        size={(props && props.size) || 3}
        onEvent={handleEvent}
        {...props}
      />
    );

    return {
      ...utils,
      handleEvent
    };
  };

  it('renders component without crashing', () => {
    const { getByTestId } = setup();
    expect(getByTestId('vh-table')).toMatchSnapshot();
  });

  it('renders VHTable with the correct TITLE', () => {
    const { container } = setup();
    const element = container.querySelector(
      '[class*="vh-title-description"] > p'
    );

    expect(element.textContent).toBe('simple title');
  });

  it('renders VHTable with ORDINAL', () => {
    const { container } = setup({ ordinal: true });

    const elements = container.querySelectorAll('[data*="vh-ordinal"]');
    expect(elements[0].textContent).toEqual('1st');
    expect(elements[1].textContent).toEqual('2nd');
    expect(elements[2].textContent).toEqual('3rd');
  });

  it('renders VHTable with BADGE', () => {
    const list = [
      {
        current: [{ label: 'item01', value: '01' }],
        order: 0,
        yearOfExperience: [{ label: '1 year', value: '1' }],
        badge: 'code test 90%'
      }
    ];
    const { container} = setup({ list, size: 1 });
    const element = container.querySelector('[data="vh-badge"]');

    expect(element.textContent).toEqual('code test 90%')
  });

  it('renders VHTble with the correct NUM OF LINES', () => {
    const rows_count = 5;
    const { container } = setup({ size: rows_count });
    const elements = container.querySelectorAll('[data*="selectExperience"]');

    expect(elements.length).toBe(rows_count);
  });

  it('renders VHTable selects with first option item', () => {
    const myOptions = [
      { label: 'First value', value: '0' },
      { label: '3 years', value: '3' }
    ];
    const { container } = setup({ options: myOptions });
    const elements = container.querySelectorAll('[class*="singleValue"]');

    expect(elements[0].textContent).toBe('First value');
  });

  it('renders VHTable with correct data attribute for SELECT', () => {
    const { container } = setup();
    const elements = container.querySelectorAll('[data*="selectExperience"]');

    // check if data attr if correct (parentDataAttr-itemDataAttr-index)
    elements.forEach((item, index) => {
      expect(item.getAttribute('data')).toEqual(
        `main-selectExperience-${index}`
      );
    });
  });

  it('renders VHTable with correct data attribute for INPUT', () => {
    const { container } = setup();
    const elements = container.querySelectorAll('[data*="inputExperience"]');

    // check if data attr if correct (parentDataAttr-itemDataAttr-index)
    elements.forEach((item, index) => {
      expect(item.getAttribute('data')).toEqual(
        `main-inputExperience-${index}`
      );
    });
  });
});
