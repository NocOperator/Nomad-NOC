export async function handler(event) {
  const scriptUrl = "https://script.google.com/macros/s/AKfycbwEg3zDQTvzrkZPgnaIMRBT9InrP-Hz_yT7dOCK9KsXcOBPjnqqMjqtAjRG3f_zd3ae/exec";

  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: event.body
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ status: 'error', message: error.message })
    };
  }
}
