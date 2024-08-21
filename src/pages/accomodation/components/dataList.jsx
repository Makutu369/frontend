import { DataList } from "@radix-ui/themes";
import { Badge, Flex, Code, Link } from "@radix-ui/themes";

const ListData = ({ data }) => {
  return (
    <DataList.Root>
      <DataList.Item align="center">
        <DataList.Label minWidth="88px">Status</DataList.Label>
        <DataList.Value>
          <Badge color="jade" variant="soft" radius="full">
            Good
          </Badge>
        </DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">Phone</DataList.Label>
        <DataList.Value>
          <Flex align="center" gap="2">
            <Code variant="ghost">{data.phone} </Code>
          </Flex>
        </DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">Street Address</DataList.Label>
        <DataList.Value>{data.address.street_address}</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">City</DataList.Label>
        <DataList.Value>{data.address.city}</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">google maps ID</DataList.Label>
        <DataList.Value>
          <Code variant="ghost">{data.placeId}</Code>
        </DataList.Value>
      </DataList.Item>
    </DataList.Root>
  );
};

export default ListData;