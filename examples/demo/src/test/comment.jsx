/* eslint-disable prettier/prettier */
import React from 'react';
import {
    Datagrid,
    List,
    Show,
    Create,
    Edit,
    SimpleForm,
    TextField,
    TextInput,
    EditButton,
    DeleteButton,
    ImageField,
    ImageInput,
    useGetList,
} from 'react-admin';
import db from '../firebase-config';
import { collection, getDoc } from 'firebase/firestore';

const useColsForWidth = async () => {
    const querySnapshot = await getDoc(collection(db, 'KHACHHANG'));
    querySnapshot.forEach(doc => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
};
// eslint-disable-next-line react-hooks/rules-of-hooks
useColsForWidth();
export const CommentShow = props => (
    <Show {...props}>
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" />

                <TextField source="category" />
            </Datagrid>
        </List>
    </Show>
);
export const CommentList = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="ten" />
                <TextField source="email" />
            </Datagrid>
        </List>
    );
};
export const CommentCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="Comment Section" multiline />
            <ImageInput
                source="Profile-Pic"
                label="Profile-Pic"
                accept="image/*"
            >
                <ImageField source="Profile-Pic" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);

export const CommentEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="Comment Section" multiline />
            <ImageInput
                source="Profile-Pic"
                label="Profile-Pic"
                accept="image/*"
            >
                <ImageField source="Profile-Pic" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);
