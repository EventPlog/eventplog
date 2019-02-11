import React from 'react'
import styled, { css } from 'styled-components'
import { Form, Message, Icon } from 'semantic-ui-react'

//======== Internal Components =========
import Sidebar from 'js/components/shared/sidebar'
import Select, { formatOptions } from 'js/components/shared/select'
import PlaceSelector from 'js/components/shared/place-selector'
import { media } from 'js/styles/mixins'
import config from 'js/config'
import { addDays, subtractDays } from 'js/utils'

import {
  Input,
  DateTimePicker,
  Search,
  Button,
} from 'js/components/shared'

const styles = css`
`

const today = new Date().toDateString()

export const dateFromOptions = {
  'Any': {start_time: null, end_time: null},
  'Date is': {start_time: null, end_time: null},
  'Date between': {start_time: null, end_time: null},
  'Today': {start_time: today},
  'Yesterday': {start_time: subtractDays(1).toDateString(), end_time: today},
  'Tomorrow': {start_time: today, end_time: addDays(1).toDateString()},
  'Past 7 days': {start_time: subtractDays(7).toDateString(), end_time: today},
  'Past 30 days': {start_time: subtractDays(30).toDateString(), end_time: today},
  'Past 90 days': {start_time: subtractDays(90).toDateString(), end_time: today},
  'Next 7 days': {start_time: today, end_time: addDays(7).toDateString()},
  'Next 30 days': {start_time: today, end_time: addDays(30).toDateString()},
  'Next 90 days': {start_time: today, end_time: addDays(90).toDateString()},
}

export const SearchSidebar = ({
  loading,
  success,
  error,
  date_range,
  searchQuery,
  className = '',
  handleChange = () => {},
  dateQuery,
  categoryQuery,
  activeTab,
  activeIndex,
}) => {

  const categoryOptions = formatOptions(['All', ...config.event_categories])
  const dateOptions = formatOptions(Object.keys(dateFromOptions))

  const {
    start_time,
    end_time,
    location,
    title,
    category_name,
  } = searchQuery

  const changeSearchParams = (updates) => {
    handleChange({searchQuery: {...searchQuery, ...updates} })
  }
  return (
    <Sidebar className={className} title="Search By">
      <Form {...{loading, success, error}}>
        <Message
          success
          header='Success!'
          content={success}
        />

        <Message
          error
          header='Error!'
          content={error}
        />

        <Form.Field>
          <label>Name/Title</label>
          <Input name="title"
                 value={title}
                 placeholder='Type here ...'
                 onChange={({target}) => changeSearchParams({[target.name]: target.value})}/>
        </Form.Field>

        {activeTab == 'events' &&
        <span>

        <Form.Field>
          <label>Category</label>
          <Select
            search
            name="category_name"
            placeholder="Today"
            value={category_name}
            options={categoryOptions}
            text={categoryQuery}
            searchQuery={categoryQuery}
            onSearchChange={(e, attr) => handleChange({categoryQuery: e.target.searchQuery})}
            onChange={(e, attr) => {
              changeSearchParams({category_name: attr.value == 'All' ? null : attr.value})
            }}
          />
        </Form.Field>

        <Form.Field className="wide email-holder">
          <label>Location</label>
          <PlaceSelector location={location}
                         locationField="location"
                         handleChange={(key, value) => changeSearchParams({[key]: value})}/>
        </Form.Field>

        <Form.Field className="search-holder">
          <label>Event Date</label>
          <Select
            search
            name="date_range"
            type="text"
            className="select-search"
            placeholder="Today"
            value={date_range}
            options={dateOptions}
            text={dateQuery}
            searchQuery={dateQuery}
            onSearchChange={(e, attr) => handleChange({dateQuery: e.target.searchQuery})}
            onChange={(e, attr) => handleChange({
              [attr.name]: attr.value,
              searchQuery: {...searchQuery, ...dateFromOptions[attr.value]}
            })}
          />
        </Form.Field>

          {(date_range == "Date is" || date_range == 'Date between') &&
          <Form.Field className="wide">
            <label>Starts Date</label>
            <DateTimePicker
              selected={start_time}
              showTimeSelect={false}
              onChange={(selected_date) => changeSearchParams({start_time: selected_date})}/>
          </Form.Field>
          }

          {date_range == "Date between" &&
          <Form.Field className="wide">
            <label>Ends Date</label>
            <DateTimePicker
              selected={end_time}
              showTimeSelect={false}
              onChange={(selected_date) => changeSearchParams({end_time: selected_date})}/>
          </Form.Field>
          }

        </span>
        }
        {/*<Form.Field>*/}
          {/*<Button inverted*/}
                  {/*onClick={handleSubmit}>*/}
            {/*<Icon name="search" />*/}
            {/*Search*/}
          {/*</Button>*/}
        {/*</Form.Field>*/}
      </Form>
    </Sidebar>
  )
}

export default styled(SearchSidebar)`${styles}`