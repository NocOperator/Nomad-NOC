export async function handler(event) {
  const response = await fetch('https://script.google.com/macros/s/AKfycb.../exec', {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: event.body
  });

  const text = await response.text(); // don't parse JSON until you know it's valid

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*'
    },
    body: text
  };
}
