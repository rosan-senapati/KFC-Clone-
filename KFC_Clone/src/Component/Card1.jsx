import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Image } from '@chakra-ui/react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { LiaCartPlusSolid } from "react-icons/lia";

const Card1 = () => {
    const[data,setData]=useState([]);
    async function getData(){
        let res = await fetch("http://localhost:3000/internationalBurgerFest");
        let data = await res.json();
        setData(data);
    }

    useEffect(()=>{
        getData();
    },[]);
  return (
    <div style={{display:"flex",flexWrap:"wrap",marginLeft:"4rem"}}>
        {
           data.map((e)=>(
            <Card maxW='sm'>
  <CardBody style={{backgroundColor:"#fff"}}>
    <Image
      src={e.img}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{e.title}</Heading>
      <div>
      <Text style={{display:"flex"}}><img src="https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg" alt="" style={{marginRight:"1.1rem"}} />{e.category}</Text></div>
      <Text color='blue.600' fontSize='2xl'>
        {e.price}
      </Text>
      <Text>
        {e.desc}
      </Text>
    </Stack>
  </CardBody>
  {/* <Divider /> */}
  <CardFooter style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <ButtonGroup spacing='2'>
      <Button variant='ghost' colorScheme='blue' style={{width:"10rem",backgroundColor:"#e4002b",color:"white", borderRadius:"50px",height:"3rem"}}>
        Add to cart <LiaCartPlusSolid />
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
           ))
        }
    </div>
  )
}

export default Card1