export interface InputWithSuggestionsInterface {
  suggestions: string[];
  placeholder: string;
  selectedSuggestion?: string | null;
  setValue: (value?: string | null) => void;
}
