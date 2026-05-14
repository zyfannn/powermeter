export default async function handler(req, res) {

    res.setHeader("Access-Control-Allow-Origin", "*");

    try {

        const path = req.query.path || "";

        const url =
        `http://iot.serangkota.go.id:8080/${path}`;

        const response = await fetch(url);

        const text = await response.text();

        return res.status(200).send(text);

    } catch (e) {

        return res.status(500).send(e.toString());
    }
}
