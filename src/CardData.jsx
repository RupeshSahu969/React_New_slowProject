import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button, ButtonGroup, Divider, Stack, Heading, Image, Text } from '@chakra-ui/react'


const CardData = () => {
  return (
    <div>
      <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        
      </Text>
      <Text>
    
      </Text>
      <Text>
    
      </Text>

     
    </Stack>
  </CardBody>
  <Divider />
 
</Card>
    </div>
  )
}

export default CardData
