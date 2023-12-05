import { ChangeEvent, ChangeEventHandler } from 'react';
import './search-box.styles.css';

interface ISearchBoxProps extends IChangeHandlerProps {
  className: string;
  placeholder?: string;
}

interface IChangeHandlerProps {
  onChangeHandler: (a: string) => void;
}

type CanadianAddress = {
  street: string;
  state: string;
}

type USAddress = {
  street: string;
  state: string;
}

type ItalianAddress = {
  street: string;
  region: string;
}

type NorthAmericanAddress = CanadianAddress | USAddress | ItalianAddress;

const address: NorthAmericanAddress = {
  street: 'adsa',
  state: 'ads',
  region: 'sdfsdf'
}

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  // type ChangeEventHandler<T = Element> = (event: ChangeEvent<T>) => void
  func?: ChangeEventHandler;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={(e) => onChangeHandler(e)}
  />
);

export default SearchBox;
