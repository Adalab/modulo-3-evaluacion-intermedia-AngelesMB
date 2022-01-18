const callToApi = (URL) => {
  return fetch(URL)
    .then((response) => response.json())
    .then((response) => {
      const data = response.results.map((eachResponse) => {
        const result = {
          name: eachResponse.name,
          id: eachResponse.id,
          counselor: eachResponse.counselor,
          speciality: eachResponse.speciality,
          socialNetworks: eachResponse.social_networks,
        };
        return result;
      });
      return data;
    });
};

export default callToApi;
