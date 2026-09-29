# Inquiry API contract

No backend is included in this first version. The frontend is prepared to call one endpoint when configured.

```dotenv
VITE_INQUIRY_ENDPOINT=/api/inquiries
```

Use a same-origin endpoint where possible. If using another origin, configure a restrictive CORS policy on that service. Configure the variable at build time for a deployed Vite app.

## Request

`POST /api/inquiries`, `Content-Type: application/json`:

```json
{
  "name": "Example Name",
  "company": "Example Company",
  "email": "name@example.com",
  "phone": "",
  "country": "Pakistan",
  "type": "Mine Leasing",
  "subject": "Kargah Nala",
  "mineArea": "Kargah Nala",
  "investmentInterest": "Joint Venture",
  "message": "Please share the documentation for this opportunity.",
  "consent": "yes"
}
```

`mineArea` and `investmentInterest` are included only for leasing. The client filters out the honeypot field. Validate all fields independently on the server. Apply maximum lengths (name 100, company 150, email 254, phone 40, country 100, subject 200, message 5000), trim strings, enforce the inquiry-category allowlist and reject unexpected content. Message minimum length in the frontend is 10 characters.

## Accepted response

Only return a successful response when the service has accepted the inquiry into a durable workflow:

```json
{
  "accepted": true,
  "inquiryId": "INQ-generated-on-server"
}
```

HTTP 200 or 201 is accepted. A successful status without both confirmation fields is treated as unconfirmed delivery. Avoid echoing customer data in the response. Validation, rate limiting and service failures should return appropriate non-2xx status codes. The frontend keeps input on failure and times out after 15 seconds.

## Production considerations

Persist first, then queue notification delivery; do not lose an inquiry when email fails. Add server-side abuse prevention, monitoring with redacted logs, duplicate/retry handling, retention and deletion policies. Authentication, authorization and audit logging are required for any inquiry management dashboard. The initial client does not implement idempotency keys or file uploads; define these only if the workflow needs them.
