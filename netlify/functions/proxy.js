export async function handler(event) {
  const url = 'https://script.google.com/macros/s/AKfycbwEg3zDQTvzrkZPgnaIMRBT9InrP-Hz_yT7dOCK9KsXcOBPjnqqMjqtAjRG3f_zd3ae/exec';

  const response = await fetch(url, {
    method: event.httpMethod,
    headers: {
      'Content-Type': 'application/json',
    },
    body: event.body,
  });

  const text = await response.text();

  return {
    statusCode: response.status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    body: text,
  };
}
