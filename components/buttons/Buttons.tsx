import {
    AntDesign,
    Feather,
    FontAwesome,
    FontAwesome5,
    Ionicons,
} from '@expo/vector-icons';
import React from 'react';
import { Button, IconButton } from 'react-native-paper';

export enum buttonEmphasis {
    low = 'text',
    medium = 'outlined',
    high = 'contained',
}

interface ButtonProps {
    onPress: () => void;
    onLongPress?: () => void;
    size?: number;
    color?: string;
    mode?: buttonEmphasis;
    disabled?: boolean;
    padding?: number;
    margin?: number;
    title?: string;
    width?: number;
}
interface IconButtonProps {
    onPress: () => void;
    size?: number;
    color?: string;
    disabled?: boolean;
    padding?: number;
    margin?: number;
    width?: number;
    marginHorizontal?: number;
}

export const InfoIconButton = (props: IconButtonProps) => {
    return (
        <IconButton
            onPress={props.onPress}
            size={props.size}
            color={props.color}
            disabled={props.disabled}
            style={{
                padding: props.padding,
                margin: props.margin,
                width: props.width,
                marginHorizontal: props.marginHorizontal,
            }}
            icon={(props) => (
                <Feather name="info" size={props.size} color={props.color} />
            )}
        ></IconButton>
    );
};

export const InfoButton = (props: ButtonProps) => {
    return (
        <Button
            onPress={props.onPress}
            onLongPress={props.onLongPress}
            disabled={props.disabled}
            style={{ width: props.width }}
        >
            <Feather
                name="info"
                size={props.size}
                color={props.color}
                mode={props.mode}
                padding={props.padding}
                margin={props.margin}
                style={{ width: props.width }}
            />
        </Button>
    );
};
export const RerollButton = (props: ButtonProps) => {
    return (
        <Button
            mode={props.mode}
            onPress={props.onPress}
            onLongPress={props.onLongPress}
            disabled={props.disabled}
        >
            {
                <FontAwesome
                    name="random"
                    size={props.size}
                    color={props.color}
                />
            }
            {props.title}
        </Button>
    );
};
export const BookButton = (props: ButtonProps) => {
    return (
        <Button
            mode={props.mode}
            onPress={props.onPress}
            onLongPress={props.onLongPress}
            disabled={props.disabled}
        >
            {<FontAwesome name="book" size={props.size} color={props.color} />}
            {props.title}
        </Button>
    );
};
export const DeleteButton = (props: ButtonProps) => {
    return (
        <Button
            mode={props.mode}
            onPress={props.onPress}
            onLongPress={props.onLongPress}
            disabled={props.disabled}
        >
            {<AntDesign name="delete" size={props.size} color={props.color} />}
        </Button>
    );
};
export const DeleteIcon = (props: IconButtonProps) => {
    return (
        <IconButton
            icon={(props) => (
                <AntDesign
                    name="delete"
                    size={props.size}
                    color={props.color}
                />
            )}
            onPress={props.onPress}
            disabled={props.disabled}
        ></IconButton>
    );
};
export const AddButton = (props: ButtonProps) => {
    return (
        <Button
            mode={props.mode}
            onPress={props.onPress}
            onLongPress={props.onLongPress}
            disabled={props.disabled}
        >
            {
                <Ionicons
                    name="md-add-circle-outline"
                    size={props.size}
                    color={props.color}
                />
            }
        </Button>
    );
};
export const ImportButton = (props: ButtonProps) => {
    return (
        <Button
            mode={props.mode}
            onPress={props.onPress}
            onLongPress={props.onLongPress}
            disabled={props.disabled}
        >
            <Feather name="download" size={props.size} color={props.color} />
            {props.title}
        </Button>
    );
};
export const UploadButton = (props: ButtonProps) => {
    return (
        <Button
            mode={props.mode}
            onPress={props.onPress}
            onLongPress={props.onLongPress}
            disabled={props.disabled}
        >
            {<FontAwesome name="save" size={props.size} color={props.color} />}
            {props.title}
        </Button>
    );
};
export const OkayButton = (props: ButtonProps) => {
    return (
        <Button
            mode={props.mode}
            onPress={props.onPress}
            onLongPress={props.onLongPress}
            disabled={props.disabled}
        >
            {
                <AntDesign
                    name="checkcircleo"
                    size={props.size}
                    color={props.color}
                />
            }
            {props.title}
        </Button>
    );
};
// ts-prune-ignore-next
export const DiceButton = (props: ButtonProps) => {
    return (
        <Button
            mode={props.mode}
            onPress={props.onPress}
            onLongPress={props.onLongPress}
            disabled={props.disabled}
        >
            {<FontAwesome5 name="dice" size={props.size} color={props.color} />}
        </Button>
    );
};
// ts-prune-ignore-next
export const ShopButton = (props: ButtonProps) => {
    return (
        <Button
            onPress={props.onPress}
            onLongPress={props.onLongPress}
            disabled={props.disabled}
            mode={props.mode}
        >
            {
                <AntDesign
                    name="shoppingcart"
                    size={props.size}
                    color={props.color}
                />
            }
        </Button>
    );
};
export const FeatherButton = (props: ButtonProps) => {
    return (
        <Button
            mode={props.mode}
            onPress={props.onPress}
            onLongPress={props.onLongPress}
            disabled={props.disabled}
        >
            {
                <FontAwesome5
                    name="feather-alt"
                    size={props.size}
                    color={props.color}
                />
            }
        </Button>
    );
};

export const PencilButton = (props: ButtonProps) => {
    return (
        <Button
            mode={props.mode}
            onPress={props.onPress}
            onLongPress={props.onLongPress}
            disabled={props.disabled}
        >
            {
                <FontAwesome5
                    name="pencil-alt"
                    size={props.size}
                    color={props.color}
                />
            }
            {props.title}
        </Button>
    );
};
