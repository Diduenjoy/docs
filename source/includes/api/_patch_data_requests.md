## PATCH `/data_requests/:data_subject/:feedback_id`

Updates segments for the provided feedback and the provided data subject


### Possible data_subject values
- contractor
- customer
- employee
- other
- prospect
- suppliers
- to_be_defined
- trainee
- visitor

<blockquote class="lang-specific"><p>PATCH /api/v1/data_requests/:data_subject/:feedback_id</p></blockquote>

```json--
{
  "data": {
    "type": "data_requests",
    "attributes": {
        "segments": {
            "contact_first_name": "xxx",
            "contact_last_name": "xxx"
        },
        "phone_number": "33606060606"
    }
  }
}
```

### attributes

attribute          | description
------------- | -------------
__segments__<br>_hash { string: string&#124;array[string] }_ | new data for segments of the provided data_subject
__email__<br>_string_ | optional
__phone_number__<br>_string_ | optional
