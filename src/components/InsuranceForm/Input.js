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
  const { name } = props.input;
  if (props.selectable) {
    const { options } = props;
    console.log('ass', options);
    return [
      <InputTitle htmlFor={name}>{capitalizeFirstLetter('aaa')}:</InputTitle>,
      <SelectWrapper>
        <Select {...props.input} {...props}> {buildOptions(options)} </Select>
      </SelectWrapper>,
    ];
  }

  return [
    <InputTitle htmlFor={name}>{capitalizeFirstLetter(name)}:</InputTitle>,
    <StyledInput {...props} {...props.input} />,
  ];
};

export default Input;
