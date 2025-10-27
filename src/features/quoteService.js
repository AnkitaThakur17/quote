import axios from "axios";

const fetchRandomQuote = async () => {
  const res = await axios.get("https://api.adviceslip.com/advice");
  return res.data.slip;
};

export default { fetchRandomQuote };
