import React, { FC, useState, useRef, useCallback } from "react";
import { Button, Box } from "components/atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCheck } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useOutsideClick } from "hooks";

export type Option<Value extends string | number> = {
  label: string;
  value: Value;
};

type DropDownProps<Value extends string | number> = {
  label: string;
  value?: Value;
  options: Option<Value>[];
  onChange?: (value: Value) => void;
};

const DropDownOptionWrapper = styled(Box).attrs(({ theme }) => ({
  padding: `${theme.space.m}px ${theme.space.l}px`,
  borderBottomStyle: theme.input.borderStyle,
  borderBottomWidth: theme.input.borderWidth,
  borderColor: theme.input.borderColor
}))`
  color: ${({ theme }) => theme.colors.grayDark};
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.grayLight};
  }
`;

const DropDownOptionHeader = styled(DropDownOptionWrapper)`
  background-color: ${({ theme }) => theme.colors.grayLight};
  font-weight: bold;
`;

const DropDownOption: FC<{ selected: boolean; onClick: (value) => void }> = ({
  children,
  onClick,
  selected
}) => (
  <DropDownOptionWrapper onClick={onClick}>
    <Box display="inline-block" width="20px">
      {selected && <FontAwesomeIcon color="black" size="xs" icon={faCheck} />}
    </Box>
    {children}
  </DropDownOptionWrapper>
);

const DropDownOptionsWrapper = styled(Box).attrs({
  position: "absolute"
})`
  width: 300px;
  height: auto;
  max-height: 480px;
  margin: 4px 0 16px;
  ${({ theme }) => `
    border-style: ${theme.input.borderStyle};
    border-width: ${theme.input.borderWidth};
    border-color: ${theme.input.borderColor};
    border-radius: ${theme.input.borderRadius};
  `};
  box-shadow: 0 1px 5px rgba(27, 31, 35, 0.15);
  background-color: ${({ theme }) => theme.colors.white};
`;

const DropDownOptions = <Value extends string | number>({
  label,
  options,
  value,
  onChange
}: DropDownProps<Value>) => (
  <DropDownOptionsWrapper>
    <DropDownOptionHeader>
      Select {label.toLocaleLowerCase()}
    </DropDownOptionHeader>
    {options.map(option => (
      <DropDownOption
        selected={value === option.value}
        onClick={() => onChange(option.value)}
        key={option.value}
      >
        {option.label}
      </DropDownOption>
    ))}
  </DropDownOptionsWrapper>
);

export const DropDown = <Value extends string | number>({
  label,
  value,
  options,
  onChange
}: DropDownProps<Value>) => {
  const optionsRef = useRef();
  const [open, setOpen] = useState(false);

  useOutsideClick(optionsRef, () => {
    if (open) setOpen(false);
  });

  const selectedOption = options.find(option => option.value === value);

  const onSelectValue = useCallback(
    (value: Value) => {
      onChange(value);
      setOpen(false);
    },
    [setOpen, onChange]
  );

  const onToggleOptions = useCallback(() => setOpen(!open), [setOpen, open]);

  return (
    <>
      <Button active={open} onClick={onToggleOptions}>
        {label}
        {selectedOption && `: ${selectedOption.label}`}
        <FontAwesomeIcon fixedWidth={true} icon={faCaretDown} />
      </Button>
      {open && (
        <div ref={optionsRef}>
          <DropDownOptions
            label={label}
            value={value}
            onChange={onSelectValue}
            options={options}
          />
        </div>
      )}
    </>
  );
};
