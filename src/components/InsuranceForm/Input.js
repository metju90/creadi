import React from 'react';
import styled from 'styled-components';
import { capitalizeFirstLetter } from '../../utils';
import * as skin from './skin';

const InputTitle = styled.div`${skin.InputTitle}`;
const StyledInput = styled.input`${skin.Input}`;
const Select = styled.select`${skin.Select}`;
const SelectWrapper = styled.div`${skin.SelectWrapper}`;
const buildOptions = options => options.map((o, i) => <option key={i} value={o.pageid}>{o.title}</option>);


const Input = (props) => {
  if (props.selectable) {
    const { options, name } = props;
    console.log('ass', options);
    return [
      <InputTitle>{capitalizeFirstLetter(name)}:</InputTitle>,
      <SelectWrapper>
        <Select {...name}> {buildOptions(options)} </Select>
      </SelectWrapper>,
    ];
  }

  return [
    <InputTitle>{capitalizeFirstLetter(props.name)}:</InputTitle>,
    <StyledInput {...props} />,
  ];
};

export default Input;
