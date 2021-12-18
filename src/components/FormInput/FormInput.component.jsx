import { InputStyles } from './FormInput.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <InputStyles shrink={!!otherProps.value.length}>
    <input onChange={handleChange} {...otherProps} />
    <label>{label}</label>
  </InputStyles>
);

export default FormInput;
