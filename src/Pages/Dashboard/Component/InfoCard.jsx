import { CustomCart } from "../../../Chakra/CustomCard"
import { Tag,Text } from "@chakra-ui/react"
const InfoCard =  ({text,tagText}) => {
   return (
    <>
    <CustomCart >
    <Tag bg="blue" color="white" borderRadius="full" mt="0" fontSize="md">{tagText}</Tag>
        <Text mt="2" fontSize="sm" color="black">{text}</Text>
    </CustomCart>
   </>
   )
}
export default InfoCard;