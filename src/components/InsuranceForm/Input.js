import React, { Fragment } from 'react';
import styled from 'styled-components';
import { capitalizeFirstLetter } from '../../utils';
import * as skin from './skin';

const InputTitle = styled.label`${skin.InputTitle}`;
const StyledInput = styled.input`${skin.Input}`;
const Select = styled.select`${skin.Select}`;
const SelectWrapper = styled.div`${skin.SelectWrapper}`;

const BuildOptions = ({ options }) => options.map((o, i) => <option key={i} value={o.title}>{o.title}</option>);

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
    return (
      <Fragment>
        <InputTitle htmlFor={id}>{capitalizeFirstLetter(name)}:</InputTitle>
        <SelectWrapper>
          <Select {...props.input} {...props}>
            <option value="">Please select...</option>
            <BuildOptions options={options} />
          </Select>
        </SelectWrapper>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <InputTitle htmlFor={id}>{capitalizeFirstLetter(name)}:</InputTitle>
      <StyledInput {...props} {...props.input} />
      <span>{touched &&
          ((error && <span style={{ color: 'red' }}>{error}</span>) ||
            (warning && <span style={{ color: 'red' }}>{warning}</span>))}
      </span>
    </Fragment>
  );
};

export default Input;
