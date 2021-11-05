const { httpGet } = require('./mock-http-interface');

const getSingleQuote = async (url) => {
  const quote = await httpGet(url);
  const { body, status } = quote;
  const { message } = JSON.parse(body);

  if (status === 200) {
    return ({
      'Arnie Quote': message,
    });
  }

  return ({
    'FAILURE': message,
  })
}

const getArnieQuotes = async (urls) => {
  const allQuotes = await Promise.all(urls.map((url) => getSingleQuote(url)));
  return allQuotes;
};

module.exports = {
  getArnieQuotes,
};
