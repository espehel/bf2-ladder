import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

if (!(CLIENT_ID && CLIENT_SECRET)) {
  console.error('Required environment varaibles are not set', {
    CLIENT_ID,
    CLIENT_SECRET,
  });
  process.exit(1);
}

const redirect_uri = 'http://localhost:5555/api/discord/callback';
const redirect = encodeURIComponent(redirect_uri);

router.get('/login', (req, res) => {
  res.redirect(
    `https://discordapp.com/api/oauth2/authorize?client_id=${CLIENT_ID}&scope=identify&response_type=code&redirect_uri=${redirect}`
  );
});

router.get('/callback', async (req, res) => {
  const { code } = req.query;

  if (!(code && typeof code === 'string')) {
    throw new Error('NoCodeProvided');
  }

  const body = new URLSearchParams({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: 'authorization_code',
    code,
    redirect_uri,
    scope: 'identify',
  });

  const response = await fetch('https://discordapp.com/api/oauth2/token', {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  const json = await response.json();
  res.redirect(`/?token=${json.access_token}`);
});

export default router;
