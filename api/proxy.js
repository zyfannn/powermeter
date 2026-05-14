export default async function handler(req, res) {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "*");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    try {

        const path = req.query.path || "";

        const url =
            `http://iot.serangkota.go.id:8080/${path}`;

        const response = await fetch(url);

        const text = await response.text();

        return res.status(200).send(text);

    } catch (err) {

        return res.status(500).json({
            error: err.toString()
        });
    }
}
