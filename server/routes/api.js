const express = require('express');
const router = express.Router();
const Data = require('../models/dataModel');

// API route to fetch data
router.get('/data', async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/data/toggleValue', async (req, res) => {
  try {
    const { label } = req.body;

    // Find the device by label
    const device = await Data.findOne({ label });

    // Toggle the value (if it's 0, set it to 1; if it's 1, set it to 0)
    device.value = device.value === 0 ? 1 : 0;

    // Save the updated device
    await device.save();

    // Send the updated device in the response
    res.json(device);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
