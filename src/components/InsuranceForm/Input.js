import React from 'react';
import styled from 'styled-components';
import { capitalizeFirstLetter } from '../../utils';
import * as skin from './skin';

const InputTitle = styled.label`${skin.InputTitle}`;
const StyledInput = styled.input`${skin.Input}`;
const Select = styled.select`${skin.Select}`;
const SelectWrapper = styled.div`${skin.SelectWrapper}`;
const buildOptions = options => options.map((o, i) => <option key={i} value={o.pageid}>{o.title}</option>);


const Input = (props) => {
  const {
    id,
    input: { name },
    meta: {
      touched, error, warning,
    },
    options,
    selectable,
  } = props;

  if (selectable) {
    return [
      <InputTitle htmlFor={id}>{capitalizeFirstLetter(name)}:</InputTitle>,
      <SelectWrapper>
        <Select {...props.input} {...props}>
          <option value="">Please select...</option>
          {buildOptions(options)}
        </Select>
      </SelectWrapper>,
    ];
  }

  return [
    <InputTitle htmlFor={id}>{capitalizeFirstLetter(name)}:</InputTitle>,
    <StyledInput {...props} {...props.input} />,
    <span>{touched &&
          ((error && <span style={{ color: 'red' }}>{error}</span>) ||
            (warning && <span style={{ color: 'red' }}>{warning}</span>))}
    </span>,
  ];
};

export default Input;
