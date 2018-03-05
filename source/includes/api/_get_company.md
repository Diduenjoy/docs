## GET `/companies/:id`

Get a single company

```ruby--Rails
require 'rest-client'

company_id = 'PUT-YOUR-COMPANY-ID-HERE'

RestClient::Request.execute method: :get,
  url: "https://api.diduenjoy.com/api/v1/companies/#{company_id}",
  user: 'PUT-YOUR-API-KEY-HERE'
```

### attributes

attribute          | description
------------- | -------------
__created_at__<br>_datetime_  | company creation date
__updated_at__<br>_datetime_  | company last modification date
__name__<br>_string_ | company name

### relationships

relationship          | description
------------------------------ | -------------
__surveys__  | company surveys
