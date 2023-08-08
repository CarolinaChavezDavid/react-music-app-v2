const CLIENT_ID = "6dc5649b893a4cd2bc212fd773710664";
const CLIENT_SECRET = "e8de0d5f1d3a463398418954f2a777ca";
const API_ENDPOINT = "https://accounts.spotify.com/api/token";

export const getAPIToken = async () => {
  const authParameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body:
      "grant_type=client_credentials&client_id=" +
      CLIENT_ID +
      "&client_secret=" +
      CLIENT_SECRET,
  };

  const response = await fetch(API_ENDPOINT, authParameters);
  if (response.ok) {
    const jsonResponse = await response.json();
    return jsonResponse.access_token;
  }
};
