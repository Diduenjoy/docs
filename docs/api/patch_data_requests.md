import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

**PATCH /api/v1/data_requests/:data_subject/:feedback_id**

<Tabs groupId="api-language">
  <TabItem value="" label="">
    ```json
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
  </TabItem>
</Tabs>

### attributes

attribute          | description
------------- | -------------
__segments__<br />_hash &#123; string: string&#124;array[string] &#125;_ | new data for segments of the provided data_subject
__email__<br />_string_ | optional
__phone_number__<br />_string_ | optional
