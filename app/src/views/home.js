import React from "react";
import { VStack, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box } from "native-base";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


function SearchBar(){
  return (
    <VStack space={8} width="100%">
      <VStack width="100%" space={2}>
        <Input
          placeholder="Find your hike..."
          variant="filled"
          width="100%"
          bg="gray.200"
          borderRadius={10}
          py={1}
          px={2}
          _web={{
            _focus: { borderColor: 'muted.300', style: { boxShadow: 'none' } },
            }}
          InputLeftElement={<Icon size='sm' ml={2} size={5} color="gray.400" as={<Ionicons name="ios-search" />} />}
        />
      </VStack>
      </VStack>
  )
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1} px={2}>
        <SearchBar/>
      </Center>
    </NativeBaseProvider>
  );
}