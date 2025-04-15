import React from "react";
import { Card, CardContent, Button, Avatar } from "@mui/material";
import { Icon } from "@iconify/react";

const agents = [
  {
    id: 1,
    name: "John David",
    agency: "Alice Estate Agency",
    verified: true,
    avatar: "https://img.heroui.chat/image/avatar?w=150&h=150&u=john",
    properties: [
      "https://img.heroui.chat/image/furniture?w=400&h=300&u=prop1",
      "https://img.heroui.chat/image/furniture?w=400&h=300&u=prop2",
      "https://img.heroui.chat/image/furniture?w=400&h=300&u=prop3",
    ],
  },
  {
    id: 2,
    name: "Alice Brian",
    agency: "Alice Estate Agency",
    verified: true,
    avatar: "https://img.heroui.chat/image/avatar?w=150&h=150&u=alice",
    properties: [
      "https://img.heroui.chat/image/furniture?w=400&h=300&u=prop4",
      "https://img.heroui.chat/image/furniture?w=400&h=300&u=prop5",
      "https://img.heroui.chat/image/furniture?w=400&h=300&u=prop6",
    ],
  },
  {
    id: 3,
    name: "Melissa William",
    agency: "James Estate Agents",
    verified: false,
    avatar: "https://img.heroui.chat/image/avatar?w=150&h=150&u=melissa",
    properties: [
      "https://img.heroui.chat/image/furniture?w=400&h=300&u=prop7",
      "https://img.heroui.chat/image/furniture?w=400&h=300&u=prop8",
      "https://img.heroui.chat/image/furniture?w=400&h=300&u=prop9",
    ],
  },
];

function Example() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Meet Our Agents</h2>
        <Button color="primary" variant="light" size="sm">
          View All
        </Button>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <Card key={agent.id} className="p-4">
            <CardContent className="p-0">
              <div className="flex items-center gap-4 mb-4">
                <Avatar
                  src={agent.avatar}
                  className="w-12 h-12"
                  alt={agent.name}
                />
                <div>
                  <div className="flex items-center gap-1">
                    <h3 className="text-lg font-semibold">{agent.name}</h3>
                    {agent.verified && (
                      <Icon
                        icon="lucide:badge-check"
                        className="text-primary h-4 w-4"
                      />
                    )}
                  </div>
                  <p className="text-sm text-default-500">{agent.agency}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {agent.properties.map((property, index) => (
                  <img
                    key={index}
                    src={property}
                    alt={`Property ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                ))}
              </div>

              <div className="flex justify-between mt-4">
                <Button color="primary" variant="light" size="sm">
                  View Profile
                </Button>
                <Button color="primary" variant="ghost" size="sm">
                  {agent.properties.length} Listed Properties »
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Example;
