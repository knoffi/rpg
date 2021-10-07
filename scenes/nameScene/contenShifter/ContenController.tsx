import React, { useState } from 'react';
import { Button } from 'react-native-paper';

export const ContextController = (props: {}) => {
    //TODO: Get content list by static method from ContentCreator
    const content = ['Standard'];
    const [contentIndex, setContentIndex] = useState(0);
    return (
        <Button
            onPress={() => {
                setContentIndex(contentIndex + 1);
            }}
        >
            {content[contentIndex]}
        </Button>
    );
};
