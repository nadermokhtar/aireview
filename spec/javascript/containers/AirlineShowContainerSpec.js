import AirlineShowContainer from '../../../app/javascript/react/containers/AirlineShowContainer';
import AirlineShowTile  from '../../../app/javascript/react/components/AirlineShowTile'
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';
import fetchMock from 'fetch-mock'

describe('AirlineShowContainer', () => {
  let wrapper;
  const props = {
    id: 1,
    airline: "Floofs Airlines",
    destinations: "Flooftown",
    rating: "5"
  }

  beforeEach(() => {
    fetchMock.get(`/api/v1/airlines/${props.id}`, {
        status: 200,
        body: props
      });
    jasmineEnzyme();
    wrapper = mount(
      <AirlineShowContainer
      {...props}
      params={{id:1}}/>);
  });

  afterEach(fetchMock.restore)
    it('should return true to make sure test are running correctly', () => {
      expect(true).toEqual(true);
    });

    it('should render an h1 tag', () => {
      expect(wrapper.find('h1')).toBePresent();
    });

    it('should render an h1 tag with the label Airline', () => {
    expect(wrapper.find('.airline').text()).toBe('Airline: ');
    });

    it('should render a airline show tile component', () => {
      expect(wrapper.find(AirlineShowTile)).toBePresent();
      expect(wrapper.find('.airline')).toBePresent()
      expect(wrapper.find('.airline').text()).toEqual('Airline: ')
    });

});
