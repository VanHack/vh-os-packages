import React from 'react';
import { render } from '../../../tests/setupTests'

import VHAssign from '.'

describe('[Component] - Assign', () => {

  /**
   * method used to control render and helpers only in one place
   */
  const setup = (props = {}) => {
    const { size = 3 } = props;

    // mock items by quantity of users
    const itemsMock = [...Array(size).keys()].map(i => (
      {
        id: i,
        name: `user0${i}`,
        email: `user0${i}@gmail.com`,
        avatar: `https://randomuser.me/api/portraits/men/4${i}.jpg`
      }
    ));

    const onEventMock = jest.fn(); // mock called function for tests (toHaveBeenCalledWith)

    const utils = render(<VHAssign items={itemsMock} onEvent={onEventMock} />)
    const avatars = utils.getAllByTestId('user-avatar');

    // return all options from render function
    return {
      avatars,
      itemsMock,
      ...utils
    }
  }

  it('should render correctly with 3 itens', () => {
    const { avatars } = setup();
    expect(avatars.length).toEqual(3);
  });

  it('should render correctly with less than 3 itens', () => {
    const { avatars } = setup({ size: 2 });
    expect(avatars.length).toEqual(2);
  });

  it('should render correctly with more than 3 itens', () => {
    const { avatars, getByTestId } = setup({ size: 5 });
    const count = getByTestId('user-count');

    // have only 3 avatars and +number
    expect(avatars.length).toEqual(3);
    expect(count.textContent).toEqual("+2")
  });

  it('should render with the correct properties', () => {
    const { avatars, itemsMock } = setup();

    // check if names were load correctly
    avatars.forEach((item, i) => {
      const name = item.firstChild.textContent;
      expect(name).toEqual(itemsMock[i].name)
    })
  });
});