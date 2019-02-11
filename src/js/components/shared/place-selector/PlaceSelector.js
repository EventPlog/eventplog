import React from 'react'
import styled, { css } from 'styled-components'
import PlacesAutocomplete, {
  geocodeByAddress,
} from 'react-places-autocomplete';

const styles = css`
 .autocomplete-dropdown-container {
    border-bottom: honeydew;
    border-left: honeydew;
    border-right: honeydew;
    border-top: 1px solid #e6e6e6;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    border-radius: 0 0 2px 2px;
  }

  .suggestion-item {
    padding: 8px;
    text-align: left;
    background-color: #fff;
    cursor: pointer;
  }

  .suggestion-item--active {
    background-color: #fafafa;
    padding: 8px;
  }
`
class PlaceSelector extends React.Component {
  state = { venue: '' }

  handleChange = (key, value) => {
    this.props.handleChange(this.props.locationField, {...this.props.location, [key]: value})
  }

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then(results => {
        const countryIndex = results[0].address_components
          .findIndex(r => r.types.find(c => c == 'country'))

        const country = results[0].address_components[countryIndex].long_name
        const region = results[0].address_components[countryIndex - 1]
                      ? results[0].address_components[countryIndex - 1].long_name
                      : null
        const lat = results[0].geometry.location.lat()
        const lng = results[0].geometry.location.lng()
        const location = {country, region, lat, lng, address}

        this.props.handleChange(this.props.locationField, location)
      })
      .catch(error => console.error('Error', error));
  }

  render() {
    const { address } = this.props.location || {}
    return (
      <PlacesAutocomplete
        value={address}
        onError={(err) => console.log(err)}
        shouldFetchSuggestions={address && address.length > 2}
        onChange={(address) => this.handleChange('address', address)}
        onSelect={this.handleSelect} >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className={this.props.className}>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    )
  }
}

export default styled(PlaceSelector)`${styles}`