import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import { ListItem, ListItemDeleteAction, ListItemSeparator } from '../components/lists';
import messagesApi from '../api/messages';
import useApi from '../hooks/useApi';

function MessagesScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const getMessagesApi = useApi(messagesApi.getMessages);

  useEffect(() => {
    getMessagesApi.request();
  }, []);

  const handleDelete = message => {
    // Call the server
    console.log(message);
  }

  return (
    <Screen>
      <FlatList 
        data={getMessagesApi.data.sort((a, b) => (a.dateTime < b.dateTime) ? 1 : -1)}
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
          getMessagesApi.request();
        }}
      />
    </Screen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;
