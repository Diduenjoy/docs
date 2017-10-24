## POST `/clients`

 Create a responder profile

> POST /api/v1/clients

```json
{
  "data": {
      "type": "clients",
      "attributes": {
        "email": "example@example.com"
      }
    }
}
```

### attributes

attribute          | description
------------- | -------------
__email__<br>_string (required)_ | client email