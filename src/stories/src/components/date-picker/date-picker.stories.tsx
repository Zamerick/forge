import React from 'react';
import { Meta, Story } from '@storybook/react';
import { argTypes, IDatePickerProps } from './date-picker-args';
import { ForgeDatePicker, ForgeTextField } from '@tylertech/forge-react';

const MDX = require('./date-picker.mdx').default;

export default {
  title: 'Components/Date Picker',
  argTypes,
  parameters: { 
    docs: { 
      page: MDX
    }
  }
} as Meta;

export const Default: Story<IDatePickerProps> = ({
  disabled = false,
  min = '',
  max = '',
  open = false,
  masked = true,
  maskFormat = 'MM/DD/YYYY',
  showMaskFormat = false,
  allowInvalidDate = false,
  showToday = false,
  showClear = false,
  disabledDaysOfWeek = [],
  yearRange = '-50:+50'
}) => {
  if (min) {
    min = new Date(min);
  }
  if (max) {
    max = new Date(max);
  }
  return (
    <ForgeDatePicker
      disabled={disabled}
      min={min}
      max={max}
      open={open}
      masked={masked}
      maskFormat={maskFormat}
      showMaskFormat={showMaskFormat}
      allowInvalidDate={allowInvalidDate}
      showToday={showToday}
      showClear={showClear}
      disabledDaysOfWeek={disabledDaysOfWeek}
      yearRange={yearRange}
      style={{ maxWidth: '256px' }}>
      <ForgeTextField>
        <input type="text" id="input-date-picker" />
        <label htmlFor="input-date-picker">Choose date</label>
      </ForgeTextField>
    </ForgeDatePicker>
  );
};
Default.args = {
  disabled: false,
  min: '',
  max: '',
  open: false,
  masked: true,
  maskFormat: 'MM/DD/YYYY',
  showMaskFormat: false,
  allowInvalidDate: false,
  showToday: false,
  showClear: false,
  disabledDaysOfWeek: [],
  yearRange: '-50:+50'
} as IDatePickerProps;
