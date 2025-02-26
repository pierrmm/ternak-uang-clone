import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

interface ItemProps {
  icon: any;
  title: string;
  color: string;
}

interface CardProps {
  items: ItemProps[];
  cardTitle: string;
}

const Card = ({ items, cardTitle }: CardProps) => {
  return (
    <View style={tw`bg-[#1C1C1E] py-4 rounded-xl w-full mb-4`}>
      <Text style={tw`text-white px-6 font-bold text-lg mb-4`}>{cardTitle}</Text>
      <View style={tw`flex-row flex-wrap justify-between`}>
        {items.map((item, index) => (
          <TouchableOpacity key={index} style={tw`w-1/4 items-center mb-4`}>
            <View style={tw`bg-${item.color} w-12 h-12 rounded-full items-center justify-center mb-2`}>
              <Image source={item.icon} style={tw`w-6 h-6`} resizeMode="contain" />
            </View>
            <Text style={tw`text-white text-xs text-center`}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default Card