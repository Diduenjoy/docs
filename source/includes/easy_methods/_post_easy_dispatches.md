## POST `/easy_dispatches`

Send a survey to a specified email address

```ruby--Rails
require 'rest-client'

RestClient::Request.execute method: :post,
  url: 'https://api.diduenjoy.com/api/v1/easy_dispatches',
  user: 'PUT-YOUR-API-KEY-HERE',
  headers: {
    content_type: 'application/json'
  },
  payload: {
    email: 'client@example.com',
    survey_id: 'YOUR-SURVEY-ID-HERE',
    template_id: 'YOUR-TEMPLATE-ID-HERE',
    segments: {
      language: 'EN',
      scheduled_at: '2022-04-18 15:07:00',
      gender: 'Mister',
      name: 'Rick Sanchez',
      interests: ['Science', 'Morty'],
    }
  }

# => {
#     "id": "DISPATCH-ID",
#     "email": "client@example.com",
#     "survey_id": "YOUR-SURVEY-ID-HERE",
#     "template_id": "YOUR-TEMPLATE-ID-HERE",
#     "segments": {
#       "language": "EN",
#       "scheduled_at": "2022-04-18 15:07:00",
#       "gender": "Mister",
#       "name": "Rick Sanchez",
#       "interests": ["Science", "Morty"]
#     }
#   }
```

```php--php
$api_key = 'YOUR-API-KEY-HERE';
$survey_id = 'YOUR-SURVEY-ID-HERE';
$template_id = 'YOUR-TEMPLATE-ID-HERE',
$email = 'client@example.com';
$date = '2022-04-18 15:07:00';

$payload = array(
  'email' => $email,
  'survey_id' => $survey_id,
  'template_id' => $template_id,
  'segments' => array(
    'language' => 'EN',
    'scheduled_at' => $date,
    'gender' => 'Mister',
    'name' => 'Rick Sanchez',
    'interests' => array('Science', 'Morty')
  )
);

$ch = curl_init('https://api.diduenjoy.com/api/v1/easy_dispatches');

curl_setopt_array($ch, array(
    CURLOPT_POST => TRUE,
    CURLOPT_HTTPHEADER => array(
        'Content-Type: application/json'
    ),
    CURLOPT_USERPWD => "$api_key:",
    CURLOPT_HTTPAUTH => CURLAUTH_BASIC,
    CURLOPT_POSTFIELDS => json_encode($payload)
));

// Send the request
$response = curl_exec($ch);

// => {
//     "id": "DISPATCH-ID",
//     "email": "client@example.com",
//     "survey_id": "YOUR-SURVEY-ID-HERE",
//     "template_id": "YOUR-TEMPLATE-ID-HERE",
//     "segments": {
//       "language": "EN",
//       "scheduled_at": "2022-04-18 15:07:00",
//       "gender": "Mister",
//       "name": "Rick Sanchez",
//       "interests": ["Science", "Morty"]
//     }
//   }
```

<aside class="notice lang-specific"><b>segments</b>
  <ul>
    <li><code>language</code> and <code>scheduled_at</code> are special segments.</li>
    <li><code>gender</code>, <code>name</code> and <code>interests</code> are user defined.</li>
</aside>


### attributes

attribute          |     | description
------------- | --- | -------------
__email__<br>_string_  | _required_ | email address to which send the survey
__survey_id__<br>_string_  | _required_ | id of the survey
__template_id__<br>_string_  | | id of the template
__segments__<br>_hash { string: (string OR array[string]) }_ | | custom data associated with the survey
__dispatch_subject__<br>_string_ | | survey email subject
__dispatch_text__<br>_string_  | | survey email text content
__dispatch_html__<br>_string_  | | survey email html content

### Segments

All segments are dynamically created, you can name them as you want.

There is 2 exceptions:

- `language` : if available, force the survey language, should be a ISO 639-1 code (https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
- `scheduled_at` : schedule the dispatch, should be formated as ISO 8601 (https://en.wikipedia.org/wiki/ISO_8601)