import React from 'react';
import List from './03-List';
import BackLink from './BackLink';
import { View } from 'react-native';

const items = [
    {
       id: 1,
       name: 'Apples',
    },
    {
       id: 2,
       name: 'Tomatoes',
    },
    {
       id: 3,
       name: 'Milk',
    },
    {
       id: 4,
       name: 'Eggs',
    }
];

export default ShoppingList = () => (
    <View>
        <BackLink />
        <List items={items} />
    </View>
);