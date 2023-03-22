## POST `/clients`

 Create a responder profile

<blockquote class="lang-specific"><p>POST /api/v1/clients</p></blockquote>

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