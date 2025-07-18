// utils/trackLocation.ts
export const trackLocation = async () => {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
  
    const { city, region, country_name } = data;
  
    return { city, region, country_name };
  };
  