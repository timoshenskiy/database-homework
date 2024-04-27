import React, { useState } from "react";
import S from "./styles";
import { InputWithSuggestionsInterface } from "./interface";

const InputWithSuggestions = ({
  suggestions,
  placeholder,
  selectedSuggestion,
  setValue,
}: InputWithSuggestionsInterface) => {
  // todo Custom input value

  const [inputValue, setInputValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    setShowSuggestions(value !== "");
  };

  const onSuggestionClick = (suggestion: string) => {
    setValue(suggestion);
    setInputValue("");
    setShowSuggestions(false);
  };

  const onTagClose = () => {
    setValue(null);
  };

  return (
    <S.InputWrapper>
      {!selectedSuggestion && (
        <S.Input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={onInputChange}
          onFocus={() => {
            if (!selectedSuggestion) {
              setShowSuggestions(true);
            }
          }}
        />
      )}
      {selectedSuggestion && (
        <S.TagWrapper>
          <S.Tag>
            {selectedSuggestion}
            <S.TagCloseButton onClick={onTagClose}>x</S.TagCloseButton>
          </S.Tag>
        </S.TagWrapper>
      )}
      <S.SuggestionsList show={showSuggestions}>
        {suggestions
          .filter((suggestion) =>
            suggestion.toLowerCase().includes(inputValue.toLowerCase())
          )
          .map((suggestion) => (
            <S.SuggestionItem
              onClick={() => onSuggestionClick(suggestion)}
              key={suggestion}
            >
              {suggestion}
            </S.SuggestionItem>
          ))}
      </S.SuggestionsList>
    </S.InputWrapper>
  );
};

export default InputWithSuggestions;
