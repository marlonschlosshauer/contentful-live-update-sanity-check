interface InspectorProps {
  entryId: string;
  fieldId: string;
  draftMode?: boolean;
  locale?: string;
}

export const inspectorProps = (
  data: InspectorProps,
): Record<string, string | undefined> => {
  if (!data.draftMode) {
    return {};
  }

  return {
    "data-contentful-field-id": data.fieldId,
    "data-contentful-entry-id": data.entryId,
    "data-contentful-locale": data.locale,
  };
};
