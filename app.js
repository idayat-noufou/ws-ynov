const express = require('express');
const app = express();
const serv = require('./ws_crud_pg')

app.use(express.json()); // parse json body content

app.get('api/', (req, res) => {
    res.status(200).json('cool');
})

app.post('/api/masks', (req, res) => {
    const newMask = {
        id: serv.getLatestMaskId() + 1,
        name: req.body.name,
        description: req.body.description,
        mask_json: req.body.mask_json
    };
    serv.createMask();
    res.status(201).json(newMask);
});

app.get('/api/masks', (req, res) => {
    res.json(serv.getAllMasks());
});

app.get('/api/masks/:maskID', (req, res) => {
    try {
        serv.readMasks(req.params.maskID);
        res.json(newMask);
    } catch (e) {
        return res.status(404).send('mask not found');
    }
});

app.put('/api/mask/:maskID', (req, res) => {
    const updatedMask = {
        id: req.params.maskID,
        name: req.body.name,
        description: req.body.description,
        mask_json: req.body.mask_json
    };
    try {
        serv.updateMask(updatedMask);
        res.json(updatedMask);
        res.status(200).json('Product updated');
    } catch (e) {
        return res.status(404).send('mask not found');
    }
});

app.delete('/api/masks/:maskID', (req, res) => {
    try {
        serv.deleteMask(req.params.maskID);

        res.status(200).json('Product deleted');
    } catch (e) {
        return res.status(404).send('mask not found');
    }
});

app.listen(3000, () => {
    console.log('server is listening on port 3000');
});
