import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## PATCH `/users/:id`

Update a user

**PATCH /api/v1/users/&#123;USER_ID&#125;**

<Tabs groupId="api-language">
  <TabItem value="" label="">
    ```json
    {
      "data": {
        "type": "users",
        "attributes": {
          "email": "jhon.due@example.com",
          "firstname": "jhon",
          "lastname": "due",
          "saml_enabled": false,
          "user_role_type": "custom",
          "custom_user_role_id": "8836a1ef-1419-497f-960a-ef3024b0f8d4"
        }
      }
    }
    ```
  </TabItem>
</Tabs>

### attributes

attribute                                                         | description
------------------------------------------------------------------| -------------
__email__<br />_string_                                             | user email
__firstname__<br />_string_                                         | user firstname
__lastname__<br />_string_                                          | user lastname
__phone_number__<br />_string_                                      | user phone number
__user_role_type__<br />_enum_                                      | user role (admin, manager, custom)
__saml_enabled__<br />_boolean_                                     | user use a single sign
__custom_user_role_id__<br />_string_                               | user custom role id (If user_role_type is custom)
__language_id__<br />_string_                                       | user language id (default: Dashboard company language)
__segments__<br />_hash _&#123; segmentid: string&#124;array[string] &#125;_  | user restricted segments values
