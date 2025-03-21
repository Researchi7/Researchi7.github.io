const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

export default async (req, res) => {
  if (req.method === 'OPTIONS') {
    console.log("API Received Request:", req.body);
    return res.status(200).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Only POST requests are allowed' });
  }
  try {
    const { name, email, subject, message } = req.body;
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email,
        },
        Subject: {
          rich_text: [
            {
              text: {
                content: subject,
              },
            },
          ],
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
      },
    });
    res.status(201).json({ msg: 'Success' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Failed' });
  }
};
