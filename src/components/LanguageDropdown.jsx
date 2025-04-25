import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageDropdown() {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select value={i18n.language} onChange={handleChange}>
      <option value="en">English</option>
      <option value="de">Deutsch</option>
      <option value="pl">Polski</option>
      {/* Add more languages as needed */}
    </select>
  );
}