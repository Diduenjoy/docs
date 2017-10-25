# Authentication

## Get an API key

You authenticate to the Diduenjoy API by providing your secret API key in the request. Your API keys carry many privileges, so be sure to keep them secret!

You can find and generate your API keys in the <a href="https://dashboard.diduenjoy.com/settings/api" target="_blank">Settings>API page</a> in your diduenjoy dashboard.

![api_key_section_2](authentication/api_key_section_2.png)

If you dont have any generated Api key you can create a new one with the `+ Generate a new API key` button.

![api_key_section](authentication/api_key_section.png)

## Auth with API key

Authentication to the API occurs via HTTP Basic Auth. Provide your API key as the basic auth username. You do not need to provide a password.

<blockquote class="lang-specific"><p>Example request</p></blockquote>

```ruby--Rails
require 'net/http'
require 'net/https'
require 'uri'

uri = URI('https://api.diduenjoy.com/api/v3/companies')

Net::HTTP.start(uri.host, uri.port,
  :use_ssl => uri.scheme == 'https',
  :verify_mode => OpenSSL::SSL::VERIFY_NONE) do |http|

  request = Net::HTTP::Get.new uri.request_uri
  # keep empty second params
  request.basic_auth 'API_KEY', ''

  response = http.request request # Net::HTTPResponse object

end
```

```shell--cURL
curl 'https://api.diduenjoy.com/api/v3/companies' \
 -u 'API_KEY:'
```

<aside class="notice lang-specific">You must replace <code>API_KEY</code> with your personal API key.</aside>

Diduenjoy expects for all API requests to have the Base64 encoded API key in the `Authorization` header
`Authorization: Basic BASE64_API_KEY`
