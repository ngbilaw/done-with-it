import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import { ListItem, ListItemDeleteAction, ListItemSeparator } from '../components/lists';
import messagesApi from '../api/messages';
import useApi from '../hooks/useApi';

const initialMessages = [
  {
    "id": 1,
    "listingId": 1,
    "dateTime": 1586044521956,
    "content": "Is this still available?",
    "fromUser": {
        "id": 2,
        "name": "John"
    },
    "toUser": {
        "id": 1,
        "name": "Mosh"
    }
  },
  {
      "id": 2,
      "listingId": 1,
      "dateTime": 1586044521956,
      "content": "I'm interested in this item. Do you provide free delivery?",
      "fromUser": {
          "id": 2,
          "name": "John"
      },
      "toUser": {
          "id": 1,
          "name": "Mosh"
      }
  },
  {
      "id": 3,
      "listingId": 1,
      "dateTime": 1586044521956,
      "content": "Please give me a call and we'll arrange this for you.",
      "fromUser": {
          "id": 2,
          "name": "John"
      },
      "toUser": {
          "id": 1,
          "name": "Mosh"
      }
  },
]

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const getMessagesApi = useApi(messagesApi.getMessages);

  useEffect(() => {
    getMessagesApi.request();
  }, []);

  const handleDelete = message => {
    // Delete the message from messages
    const newMessages = messages.filter(m => m.id !== message.id);
    setMessages(newMessages);

    // Call the server
  }

  
  return (
    <Screen>
      <FlatList 
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={
          ({ item }) =>
            <ListItem
              title={item.fromUser.name}
              subTitle={item.content}
              image={require('../assets/mosh.jpg')}
              onPress={() => console.log('Message selected', item)}
              renderRightActions={() =>
                <ListItemDeleteAction
                  onPress={() => handleDelete(item)} 
                />
              }
              showChevrons={true}
            />
          }
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              "id": 8,
              "listingId": 101,
              "dateTime": 1603033351034,
              "content": "Wow",
              "fromUser": {
                  "id": 3,
                  "name": "Nicole"
              },
              "toUser": {
                  "id": 1,
                  "name": "Mosh"
              }
            },
          ])
        }}
      />
    </Screen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;
