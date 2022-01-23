// Subscribes a user to a Buttondown email list. Based on https://leerob.io/snippets/buttondown

export default async (req, res) => {
  const { email } = req.body;
  const tags = ['Nox'];
  console.log(`Subscribing ${email} to ${tags}`);
  console.log(JSON.stringify({ email, tags }));

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const API_KEY = process.env.BUTTONDOWN_API_KEY;
    const response = await fetch(
      `https://api.buttondown.email/v1/subscribers`,
      {
        body: JSON.stringify({ email, tags }),
        headers: {
          Authorization: `Token ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      },
    );

    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter.`,
      });
    }

    return res.status(201).json({ msg: `success` });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
