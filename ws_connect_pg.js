const pg = require('pg');

const config = {
    user: "avnadmin",
    password: "AVNS_2NI8qMCtaH2oGsCs3ib",
    host: "pg-12cfbda4-ynov-ws-jin-pg.a.aivencloud.com",
    port: 27541,
    database: "defaultdb",
    ssl: {
        rejectUnauthorized: true,
        ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUBYevZM0wmD3dq3TQzmYZoMV1BZMwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvNDFkZjdmODUtM2Y5My00YzQwLTg0MGItMjNhOTFjY2Nl
MzAyIFByb2plY3QgQ0EwHhcNMjQwMzI5MDkxMjA5WhcNMzQwMzI3MDkxMjA5WjA6
MTgwNgYDVQQDDC80MWRmN2Y4NS0zZjkzLTRjNDAtODQwYi0yM2E5MWNjY2UzMDIg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBALCYpuV5
bVyMWeRsk0l+TUpYgzNj+FaBWvxwApW1PgJjV+dshjANMhNmZg5P538zNWl5+dm2
VaWr3JNF0M5IDMfy0x455XQ46rUL0dbxT6OadQcJ0S6dfKp0P/9LeP4191qYtHkm
orgAZf9m2w6n1FYuDGr7vODTW0BcWw5jjv+Ct3hcjOFfgs8zemWgC1zg3F/+lFSq
9Q5cHV6tUM2AZOSX2pUBDeYP3ZJpSwiOuFMjlSyamuTGvMh6QSSGyOdBZs/nn7Gv
jEztKiU8BiXO5R2CY+DmX4CbIDdEMpLzyZhdnW8t11z7G0kkViXkgXTwIqbKfO+w
UmbIzXgbWqXprkPbagVPbrjQ8Xf37xotwZHyft9oNRtJdaHu6fCvHmuYO8EFB7i9
3OWB8Qqco8iYrj7d3jwtS+oiwrli5ktF8lVsusxetpsrHa0EQWT87xXVFqL7P1fK
ebiVvXsbz/NA44+GjdK4LWWh0dWlTTpX9rx8XEvYgvZr8WKTq7ZEEVeIkQIDAQAB
oz8wPTAdBgNVHQ4EFgQUGV0CHZS6JXBJPOqokr5mluJ3s3UwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAJqTpOuwjA0Jq5rk
GgyKAPpi7mJ64zIMZ1+k2LuiSKrq7J9/ohZVkeob5nfPeu0dY86vBn4RJEgR+UkL
2DH70AKZxb278WNMngFnkGlKkdjkz+jLF6Zodm8jc+JmeLAvQWr+0eMRKMr26j48
3pEuLAYGtq+SkgPcfTn4EA7a+sIPeCEzLs9CNlMRgEDCfAG7S67UUGOdKjmwdKR8
xXddDAdieSp4we+GSAS89mmmtekGE+GcQR9hsp4z+tf4b3ICXEQUwguQpSW4IwvQ
FhTdO6WUDZ5vP9JJcNfzaTwcGTy5uWGW2rbiNyS4mj6rw+j//atMMoj9oRlq4qfI
5GYGTwVeGcjdfRnkxqqfIvcvGQyMwVKSx3CdOvFN7sgtQ+GfcES77RkQiXsfLOZL
2v9g6FI0YndAtBVTv1BE4niRHxhS3PlULlQyH+kPp7coorwph0tyqhdqJZ/r1KRz
Vzoq/zyktEZxe+KeaT/VYXhWqZbw67kIVptpEXLrEpYIWi6p2g==
-----END CERTIFICATE-----`,
    },
};


const client = new pg.Client(config);
client.connect(function (err) {
    if (err)
        throw err;
    client.query("SELECT CONCAT(VERSION(),$1::text) as message", ["\nVous êtes connecté"], function (err, result) {
        if (err)
            throw err;

        console.log(result.rows[0].message);
        client.end(function (err) {
            if (err)
                throw err;
        });
    });
});

