import axiosInstance from "../request";

// Helper function to build clean populate query strings
const buildPopulateQuery = (populateFields: string[]): string => {
  return populateFields
    .map((field, index) => `populate[${index}]=${field}`)
    .join("&");
};

// Alternative: Use deep populate syntax for cleaner URLs
const buildDeepPopulate = (
  fields: Record<string, string[] | string>
): string => {
  const params = new URLSearchParams();

  Object.entries(fields).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((subField, index) => {
        params.append(`populate[${key}][populate][${index}]`, subField);
      });
    } else {
      params.append(`populate[${key}]`, value);
    }
  });

  return params.toString();
};

const fetchHero = async (locale: string) => {
  try {
    // For hero endpoint, populate=* is fine since it's a simple structure
    // But you could also specify exact fields if needed:
    // const populateFields = ['image', 'ctas'];
    // const populateQuery = buildPopulateQuery(populateFields);
    // const url = `/hero?locale=${locale}&${populateQuery}`;

    const url = `/hero?locale=${locale}&populate=*`;
    const res = await axiosInstance.get(url);

    return res.data.data;
  } catch (error) {
    console.error("Error fetching hero data:", error);
    throw error;
  }
};

const fetchHome = async (locale: string) => {
  try {
    // Define populate fields in a clean array
    const populateFields = [
      "hero.image",
      "hero.ctas",
      "area.image",
      "nusa_penida.image",
      "nusa_penida.cta",
    ];

    // Choose one approach:
    // Option 1: Simple array-based populate (cleaner for simple relations)
    const populateQuery = buildPopulateQuery(populateFields);
    const url = `/home?locale=${locale}&${populateQuery}`;

    const res = await axiosInstance.get(url);
    return res.data.data;
  } catch (error) {
    console.error("Error fetching home data:", error);
    throw error;
  }
};

export { fetchHero, fetchHome };
